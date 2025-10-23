import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, Home } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
              <BookOpen className="w-8 h-8" />
              <span>Sirat</span>
            </Link>
            <nav className="flex gap-4">
              <Link
                to="/"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isHome
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-white/80 backdrop-blur-sm border-t mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p className="text-sm">
            MVP version of{" "}
            <a
              href="https://github.com/mAtiyaaa/sirat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Sirat
            </a>
            {" "}• Data from{" "}
            <a
              href="https://alquran.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              AlQuran.cloud
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
