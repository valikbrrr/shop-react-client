import { useAuth } from "@/hooks/useAuth";
import BottomMenu from "@/components/ui/bottom-menu/BottomMenu";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { user } = useAuth();

  return (
    <div className="h-screen bg-gray-50">
      <main className="h-[calc(100vh-72px)] overflow-y-auto custom-scroll pb-4 px-4 pt-4">
        {children}
      </main>

      {user && <BottomMenu />}
    </div>
  );
};

export default MainLayout;
