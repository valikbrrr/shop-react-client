import {
  useState,
  type FC,
  type PropsWithChildren,
  useEffect,
  useCallback,
} from "react";
import type { TypeUserState } from "./auth-provider.interface";
import { AuthContext } from "./auth-context";
import type { IUser } from "@/types/user.interface";
import {
  getRefreshToken,
  getUserFromStorage,
  deleteTokenStorage,
  getAccessToken,
} from "@/services/auth/auth.helper";
import { getNewTokens } from "@/services/api/helper.api";
import { errorCatch } from "@/services/api/error.api";
import { EnumStorage } from "@/types/auth.interface";

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [user, setUser] = useState<TypeUserState>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Функция для восстановления пользователя из localStorage
  const restoreUser = useCallback((): IUser | null => {
    const refreshToken = getRefreshToken();
    const storedUser = getUserFromStorage();

    if (refreshToken && storedUser) {
      return storedUser;
    }
    return null;
  }, []);

  // Функция для проверки и обновления токенов
  const checkAndRefreshTokens = useCallback(async (): Promise<boolean> => {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();

    if (!refreshToken) {
      return false;
    }

    // Если нет accessToken, но есть refreshToken - пытаемся обновить
    if (!accessToken && refreshToken) {
      try {
        const newTokens = await getNewTokens();
        if (newTokens?.accessToken) {
          const restoredUser = restoreUser();
          if (restoredUser) {
            setUser(restoredUser);
          }
          return true;
        }
      } catch (error) {
        if (errorCatch(error) === "jwt expired") {
          deleteTokenStorage();
          setUser(null);
        }
        return false;
      }
    }

    // Если есть accessToken, проверяем есть ли пользователь
    if (accessToken) {
      const currentUser = getUserFromStorage();
      if (currentUser) {
        setUser(currentUser);
        return true;
      }
    }

    return false;
  }, [restoreUser]);

  // Инициализация при монтировании
  useEffect(() => {
    const initAuth = async () => {
      setIsLoading(true);

      try {
        // Сначала проверяем и обновляем токены если нужно
        await checkAndRefreshTokens();

        // Затем восстанавливаем пользователя из хранилища
        const restoredUser = restoreUser();
        if (restoredUser) {
          setUser(restoredUser);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Ошибка инициализации аутентификации:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, [checkAndRefreshTokens, restoreUser]);

  // Синхронизация между вкладками
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      // Если удалили refreshToken в другой вкладке
      if (e.key === EnumStorage.REFRESH_TOKEN && !e.newValue && user) {
        setUser(null);
      }

      // Если обновили пользователя в другой вкладке
      if (e.key === EnumStorage.USER) {
        if (e.newValue) {
          try {
            const newUser = JSON.parse(e.newValue);
            setUser(newUser);
          } catch (error) {
            console.error("Ошибка парсинга пользователя:", error);
          }
        } else if (user) {
          // Если удалили пользователя
          setUser(null);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
