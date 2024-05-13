import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/pages/Home/Home/Home";
import ErrorPage from "../components/pages/ErrorPage";
import Register from "../components/pages/Register/Register";
import Login from "../components/pages/Login/Login";
import AllBooks from "../components/pages/AllBooks/AllBooks";
import AddBooks from "../components/pages/AddBooks/AddBooks";
import BorrowedBooks from "../components/pages/BorrowedBooks/BorrowedBooks";
import PrivateRoutes from "./PrivateRoutes";
import UpdateBook from "../components/pages/AllBooks/UpdateBook";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/all-books',
            element: <PrivateRoutes><AllBooks></AllBooks></PrivateRoutes>
        },
        {
            path: '/update-book/:id',
            element: <PrivateRoutes><UpdateBook></UpdateBook></PrivateRoutes>,
            loader: ({params})=> fetch(`http://localhost:5000/all-books/${params.id}`)
        },
        {
            path: '/add-books',
            element: <PrivateRoutes><AddBooks></AddBooks></PrivateRoutes>
        },
        {
            path: '/borrowed-books',
            element: <PrivateRoutes><BorrowedBooks></BorrowedBooks></PrivateRoutes>
        },
      ]
    },
  ]);

  export default router;