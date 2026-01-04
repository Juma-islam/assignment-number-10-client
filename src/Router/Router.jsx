import { createBrowserRouter, Router } from "react-router";
import Home from "../Pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
// import MyProfile from "../Pages/MyProfile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import Loading from "../Pages/Loading";
import PrivateRoute from "../routes/PrivateRoute";
import AllIssues from "../Pages/AllIssues";
import AddIssues from "../Pages/AddIssues/AddIssues";
// import IssueDetails from "../Pages/issueDetails";
import MyIssues from "../Pages/MyIssues/MyIssues";
import MyContributions from "../Pages/MyContributions/MyContributions";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import PrivacyPolicy from "../Pages/ContributionsTable/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "../Pages/FooterPages/TermsOfService/TermsOfService";
import BlogHelp from "../Pages/FooterPages/BlogHelp/BlogHelp";
import FAQ from "../Pages/FooterPages/FAQ/FAQ";
import HelpCenter from "../Pages/FooterPages/HelpCenter/HelpCenter";
import DashboardHome from "../Pages/DashboardPages/DashboardHome";
import MyProfile from "../Pages/MyProfile";
import ManageIssues from "../Pages/DashboardPages/ManageIssues/ManageIssues";
import ManageContributions from "../Pages/DashboardPages/ManageContributions/ManageContributions";
import AdminRoute from "../routes/AdminRoute/AdminRoute";
import Services from "../Pages/FooterPages/Services/Services";
import IssueDetails from "../Pages/IssueDetails";

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
        loader: () => fetch("https://clean-connect-project.vercel.app/latest-issues"),
      },

      {
        path: "/all-issues",
        Component: AllIssues,
        hydrateFallbackElement: <Loading />,
        loader: () => fetch("https://clean-connect-project.vercel.app/issues"),
      },
      {
        path: '/about',
        Component: AboutUs
      },
      {
        path: '/contact',
        Component: Contact
      },
      {
        path: '/privacy',
        Component: PrivacyPolicy
      },
      {
        path: '/terms',
        Component: TermsOfService
      },
      {
        path: '/blog',
        Component: BlogHelp
      },
      {
        path: '/faq',
        Component: FAQ
      },
      {
        path: '/help',
        Component: HelpCenter
      },
      {
        path: '/services',
        Component: Services
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
          <IssueDetails /> 
        ),
        loader: ({ params }) => fetch(`https://clean-connect-project.vercel.app/issues/${params.id}`),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
 {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayouts /></PrivateRoute>,
    children: [
      {
        index: true, 
        element: <DashboardHome />
      },
      {
        path: "my-issues",
        element: <MyIssues />
      },
      {
        path: "add-issue",
        element: <AddIssues />
      },
      {
        path: "my-contributions",
        element: <MyContributions />
      },
      {
        path: "my-profile",
        element: <MyProfile />
      },
      {
      path: "manage-issues",
      element: <AdminRoute><ManageIssues /></AdminRoute>
    },
    {
      path: "manage-contributions",
      element: <AdminRoute><ManageContributions /></AdminRoute>
    }
    ]
  }
]);

export default router;
