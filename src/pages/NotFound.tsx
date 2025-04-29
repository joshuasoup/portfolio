
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "../components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-portfolio-muted mb-6">Oops! Page not found</p>
        <Link to="/" className="bg-portfolio-accent text-black px-6 py-3 rounded font-medium hover:bg-portfolio-accent/90 transition-colors">
          Return Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
