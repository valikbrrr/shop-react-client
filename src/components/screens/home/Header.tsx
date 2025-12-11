import { useProfile } from "../profile/useProfile";
import { Link } from "react-router-dom";

const Header = () => {
  const { profile } = useProfile();
  if (!profile) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex justify-between items-center gap-2">
        <p className="text-2xl font-medium">Hello, {profile.name} </p>
        <Link to="/cart"><img src="./src/assets/icons/cart.png" alt="logo" className="w-6 h-6 mx-auto" color="#374151" /></Link>
    </div>
  );
};

export default Header;