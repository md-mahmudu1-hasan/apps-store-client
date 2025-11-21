import { createBrowserRouter } from "react-router";
import App from "../layouts/App";
import Home from "../pages/Home";
import AllAppsPage from "../pages/AllAppsPage";
import LoadingPage from "../ui/LoadingPage";
import AppDetails from "../pages/AppDetails";
import MyInstallation from "../pages/MyInstallation";
import ErrorPage from "../ui/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <LoadingPage></LoadingPage>,
    children: [
      {
        path: "",
        element: <Home></Home>,
        loader: () =>
          fetch("https://apps-store-server.vercel.app/apps"),
      },
      {
        path: "/apps",
        element: <AllAppsPage></AllAppsPage>,
      },
      {
        path: "/apps/:id",
        element: <AppDetails></AppDetails>,
        loader: ({ params }) =>
          fetch(
            `https://apps-store-server.vercel.app/apps/${params.id}`
          ),
      },
      {
        path: "/installations",
        element: <MyInstallation></MyInstallation>,
        loader: () =>
          fetch("https://apps-store-server.vercel.app/apps"),
      },
      {
        path: "/blogs",
        element: <h2>Single Items</h2>,
      },
    ],
  },
]);

export default router;
