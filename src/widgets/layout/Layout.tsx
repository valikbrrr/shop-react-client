import { useProfile } from "@/entities/user";
import { Link } from "react-router-dom";
import cart from "@/shared/assets/icons/cart.png";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { profile } = useProfile();
  if (!profile) {
    return <div>Loading...</div>;
  }
  return (
    <div className="h-screen bg-gray-50">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-medium">Hello, {profile.name} </p>
        <Link to="/cart">
          <img
            src={cart}
            alt="logo"
            className="w-6 h-6 mx-auto"
            color="#374151"
          />
        </Link>
      </div>
      <main className="h-[100vh] overflow-y-auto custom-scroll pb-4 px-4 pt-4">
        {children}
      </main>
    </div>
  );
};
