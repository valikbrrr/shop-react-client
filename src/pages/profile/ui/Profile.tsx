import { AuthApi, useAuth } from "@/entities/auth";
import { Heading } from "@/shared/ui/heading";
import { Button } from "@/shared/ui/button";
import { useProfile } from "@/entities/user";

export const Profile = () => {
  const { setUser } = useAuth();

  const { profile } = useProfile();

  return (
    <div className="flex flex-col items-center justify-center">
      <Heading isCenter>Profile</Heading>
      <img src={profile?.avatarPath} className="w-40 h-40 rounded-full" />
      <Button
        onClick={() => AuthApi.logout().then(() => setUser(null))}
        className="mt-5"
      >
        Logout
      </Button>
    </div>
  );
};
