import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-8 px-4">{children}</main>
    </>
  );
};

export default Layout;
