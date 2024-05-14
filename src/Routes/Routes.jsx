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
import CategoryBooks from "../components/pages/CategoryBooks/CategoryBooks";
import BookDetails from "../components/pages/BookDetails/BookDetails";

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
            loader: ({params})=> fetch(`https://library-management-server-lac.vercel.app/all-books/${params.id}`)
        },
        {
            path: '/book-details/:id',
            element: <PrivateRoutes><BookDetails></BookDetails></PrivateRoutes>,
            loader: ({params})=> fetch(`https://library-management-server-lac.vercel.app/all-books/${params.id}`)
        },
        {
            path: '/add-books',
            element: <PrivateRoutes><AddBooks></AddBooks></PrivateRoutes>
        },
        {
            path: '/borrowed-books',
            element: <PrivateRoutes><BorrowedBooks></BorrowedBooks></PrivateRoutes>
        },
        {
            path: '/category-books/category/:category',
            element: <PrivateRoutes><CategoryBooks></CategoryBooks></PrivateRoutes>,
            loader: ({params})=> fetch(`https://library-management-server-lac.vercel.app/all-books/category/${params.category}`)
        },
      ]
    },
  ]);

  export default router;