import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-gray-50 overflow-y-auto custom-scroll">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
