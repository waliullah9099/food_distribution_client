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
import Leaderboard from "@/pages/dashboard/Leaderboard";
import CreateTestmonial from "@/pages/dashboard/CreateTestmonial";
import CreateVolunteer from "@/pages/volunteer/CreateVolunteer";

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
      },
    ],
  },
  {
    path: "/volunteer",
    element: <CreateVolunteer />,
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
    element: (
      <PrivateRouter>
        <DashboardLayout />
      </PrivateRouter>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "supplies",
        element: <Supplies />,
      },
      {
        path: "create-supply",
        element: <CreatePost />,
      },
      {
        path: "leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "create-testimonial",
        element: <CreateTestmonial />,
      },
    ],
  },
]);

export default router;
