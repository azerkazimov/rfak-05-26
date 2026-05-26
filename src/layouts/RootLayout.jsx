import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/navbar";


export default function RootLayout() {
  return (
    <>
      <Navbar />

      <main className="container mx-auto px-4">
        <Outlet /> 
      </main>

      <footer style={{backgroundColor: "black", color: "white", height: "100px", padding: "20px", fontSize: "1.5rem"}}>
        <p style={{textAlign: "center", margin: 0}}>Footer</p>
        <Link to="/rufatin-sehifesi">Rufatin Sehifesi</Link>
      </footer>

    </>
  );
}
