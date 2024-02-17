import App from "@/App";
import NotFound from "@/components/shared/404";
import Home from "@/pages/home/Home";
import AllPost from "@/pages/home/posts/AllPost";
import ViewDetails from "@/pages/home/posts/ViewDetails";
import { createBrowserRouter } from "react-router-dom";

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
]);

export default router;
