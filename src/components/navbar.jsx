import { Link } from "react-router-dom";
import useMobile from "../hooks/use-mobile";
import MobileNav from "./mobile-nav";
import { useTheme } from "../hooks/use-theme";

export default function Navbar() {
  const isMobile = useMobile();
  const { toggleTheme } = useTheme();


  if(isMobile){
    return <MobileNav />;
  }

  const handleToggleTheme = () => {
    toggleTheme();
  }

  return (

      <nav className="container mx-auto">
        <div className="flex justify-between items-center my-4">
          <Link to="/">
            <h1 className="font-bold text-3xl">Logo</h1>
          </Link>

          <ul className="flex gap-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Theme toggle button */}
          <button onClick={handleToggleTheme}>Toggle Theme</button>

          <Link to="/login">Login</Link>
        </div>
      </nav>


  );
}
