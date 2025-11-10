import { createBrowserRouter, Router } from "react-router";
import Home from "../Pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import MyProfile from "../Pages/MyProfile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import Loading from "../Pages/Loading";
import PrivateRoute from "../routes/PrivateRoute";
import AllIssues from "../Pages/AllIssues";
import AddIssues from "../Pages/AddIssues/AddIssues";
import IssueDetails from "../Pages/issueDetails";
import MyIssues from "../Pages/MyIssues/MyIssues";
import MyContributions from "../Pages/MyContributions/MyContributions";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch("/plants.json"),
      },

      {
        path: "/all-issues",
        Component: AllIssues,
        hydrateFallbackElement: <Loading />,
        loader: () => fetch("http://localhost:5000/issues"),
      },
      {
        path: "/add-issues",
        element: (
          <PrivateRoute>
            <AddIssues />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-issues",
        element: (
          <PrivateRoute>
            <MyIssues />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-contributions",
        element: (
          <PrivateRoute>
            <MyContributions />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/issues/:id",
        element: (
          <PrivateRoute>
            <IssueDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/issues/${params.id}`),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
]);

export default router;
