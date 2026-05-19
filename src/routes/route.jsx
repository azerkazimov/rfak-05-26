import About from "../components/about";
import Contact from "../components/contact";
import Home from "../components/home";
import Login from "../components/login";
import UserPage from "../components/user-page";
import Users from "../components/users";
import AuthLayout from "../layouts/AuthLayout";
import RootLayout from "../layouts/RootLayout";

export const appRoutes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "users", element: <Users /> },
      { path: "users/:id", element: <UserPage /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
    ],
  },  
];
