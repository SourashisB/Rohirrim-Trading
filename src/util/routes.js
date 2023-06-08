import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainPage from "../mainPage";
import ErrorPage from "../UI/errorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>,
    },
    {
        path:"*",
        element: <ErrorPage/>
    },
    {
        path:"/login",
        element: <h1>test</h1>
    }
  ]);