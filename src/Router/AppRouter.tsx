import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomeNavbar from "../Components/HomeNavbar";
import Home from "../Components/Views/Home";
import About from "../Components/Views/About";
import Services from "../Components/Views/Services";
import Doctors from "../Components/Views/Doctors";
import Blogs from "../Components/Views/Blogs";
import HomePage from "../Pages/HomePage";
import DoctorsListPage from "../Pages/DoctorsListPage";
import AppNavbar from "../Components/AppNavbar";

function Layout() {
  return (
    <>
      <AppNavbar />
      <Outlet /> {/* Renders the content of the current route */}
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <HomePage/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path: "/services",
            element: <Services/>,
        },
        {
            path: "/doctors",
            element: <Doctors/>,
        },
        {
            path: "/blogs",
            element: <Blogs/>,
        },
        {
            path: "/doctors/all",
            element: <DoctorsListPage/>,
        },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
