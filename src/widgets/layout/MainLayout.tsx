interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-gray-50">
      <main className="h-[calc(100vh-72px)] overflow-y-auto custom-scroll pb-4 px-4 pt-4">
        {children}
      </main>
    </div>
  );
};
