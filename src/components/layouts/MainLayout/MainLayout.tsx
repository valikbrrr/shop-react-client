import { useAuth } from "@/hooks/useAuth";
import BottomMenu from "@/components/ui/bottom-menu/BottomMenu";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1 pb-20 p-4"> {children}</main>

      {user && <BottomMenu />}
    </div>
  );
};

export default MainLayout;
