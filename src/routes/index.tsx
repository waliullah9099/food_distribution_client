import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import NotFound from "@/components/shared/404";
import Login from "@/pages/Login/Login";
import Regestration from "@/pages/Regestration/Regestration";
import CreatePost from "@/pages/dashboard/CreatePost";
import Dashboard from "@/pages/dashboard/Dashboard ";
import Supplies from "@/pages/dashboard/Supplies";
import Home from "@/pages/home/Home";
import AllPost from "@/pages/home/posts/AllPost";
import ViewDetails from "@/pages/home/posts/ViewDetails";
import { createBrowserRouter } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/supplies",
        element: <AllPost />,
      },
      {
        path: `/view-details/:id`,
        element: <ViewDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/posts/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Regestration />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: (
          // <PrivateRouter>
          <Dashboard />
          // </PrivateRouter>
        ),
      },
      {
        path: "supplies",
        element: (
          // <PrivateRouter>
          <Supplies />
          // </PrivateRouter>
        ),
      },
      {
        path: "create-supply",
        element: (
          // <PrivateRouter>
          <CreatePost />
          // </PrivateRouter>
        ),
      },
    ],
  },
]);

export default router;
