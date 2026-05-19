import { Link } from "react-router-dom";

export default function Navbar() {
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
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
