import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "./useProfile";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/button/Button";
import { AuthService } from "@/services/auth/auth.service";

const Profile = () => {
  const { setUser } = useAuth();

  const { profile } = useProfile();

  return (
    <div>
      <Heading isCenter>Profile</Heading>
      <img src={profile?.avatarPath} className="w-40 h-40 rounded-full" />
      <Button
        onClick={() => AuthService.logout().then(() => setUser(null))}
        className="mt-5"
      >
        Logout
      </Button>
    </div>
  );
};

export default Profile;
