import { Outlet } from "react-router-dom";



export default function AuthLayout() {
  return (
    <>

      <main className="container mx-auto px-4">
        <Outlet />
      </main>
      
    </>
  );
}
