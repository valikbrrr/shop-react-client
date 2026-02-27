import { UserApi } from "@/entities/user";
import { useQuery } from "@tanstack/react-query";

export const useProfile = () => {
  const { data: profile } = useQuery({
    queryKey: ["get profile"],
    queryFn: () => UserApi.getProfile(),
  });

  return { profile };
};
