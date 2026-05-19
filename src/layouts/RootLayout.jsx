import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";


export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4">
        <Outlet />
      </main>

    </>
  );
}
