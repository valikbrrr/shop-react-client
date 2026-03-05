import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-gray-50 overflow-y-auto custom-scroll">
      <Header />
      <main className="h-[100vh]">{children}</main>
    </div>
  );
};
