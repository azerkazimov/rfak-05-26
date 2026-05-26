import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appRoutes } from "./routes/route";
import { useTheme } from "./hooks/use-theme";

function App() {
  const router = createBrowserRouter(appRoutes);
  const { theme } = useTheme();
  return (
    <div className={`app ${theme === "dark" ? "dark" : "light"}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
