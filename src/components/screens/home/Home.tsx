import { toastAPI } from "@/components/ui/toast/toast-api";

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Главная страница
        </h1>
        <p className="text-gray-600 mb-8">Добро пожаловать в наше приложение</p>

        <div className="space-y-4">
          <button
            onClick={() => toastAPI.success("Добро пожаловать! 🎉")}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Показать успех
          </button>

          <button
            onClick={() => toastAPI.error("Что-то пошло не так! 😔")}
            className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Показать ошибку
          </button>

          <button
            onClick={() => toastAPI.loading("Загружаем данные... ⏳")}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Показать загрузку
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Нажмите на кнопки, чтобы протестировать систему уведомлений
          </p>
        </div>
      </div>
    </div>
  );
};
