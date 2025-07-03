
import { Link, useLocation } from "react-router-dom";
import { Home, User, Mail } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "About Me", icon: Home },
    { path: "/skills", label: "Skills", icon: User },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-6 py-3 rounded-full glass-effect">
        {navItems.map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
              location.pathname === path
                ? "bg-primary text-primary-foreground shadow-lg"
                : "hover:bg-primary/20"
            }`}
          >
            <Icon size={18} />
            <span className="text-sm font-medium hidden sm:block">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
