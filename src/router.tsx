import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { PageNotFound } from "./components/PageNotFound";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { PublicRoute } from "./components/PublicRoute";
import { Login } from "./pages/Auth/Login";
import { Users } from "./pages/Users";
import { Students } from "./pages/Students";
import { Grade } from "./pages/Grade";
import { Subjects } from "./pages/Subjects";
import { Class } from "./pages/Class";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "*",
        element: <PageNotFound />,
      },

      {
        path: "/sign-in",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },

      {
        path: "/",
        element: <div><a href="/sign-in">Login</a></div>,
        errorElement: <PageNotFound />,
      },
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <App />
          </ProtectedRoute>
        ),
        errorElement: <PageNotFound />,
        children: [
          {
            path: "/dashboard",
            element: <div>Dashboard</div>,
          },

          {
            path: "/settings",
            element: <div>Settings</div>,
          },
          {
            path: "/students",
            element: <Students />,
          },
          {
            path: "/grade",
            element: <Grade />,
          },
          {
            path: "/class",
            element: <Class />,
          },
          {
            path: "/subjects",
            element: <Subjects />,
          },
          {
            path: "/users",
            element: <Users />,
          },
        ],
      },
      {
        path: "/new-password",
        element: (
          <ProtectedRoute>
            <div>new password</div>
          </ProtectedRoute>
        ),
      },
      {
        path: "/spaces/create",
        element: (
          <ProtectedRoute>
            <div>/spaces/create</div>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
