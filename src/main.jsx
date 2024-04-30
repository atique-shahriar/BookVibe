import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import BookDetails from './components/BookDetails/BookDetails';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PageToRead from './components/PageToRead/PageToRead';
import Privacy from './components/Privacy/Privacy';
import Root from './components/Root/Root';
import './index.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pageToRead",
        element: <PageToRead></PageToRead>,
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("books.json"),
      },
      {
        path: "/privacy",
        element: <Privacy></Privacy>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },

    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
