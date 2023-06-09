import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import AppliedJob from './Components/AppliedJob/AppliedJob';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import JobDetails from './Components/JobDetails/JobDetails';
import ViewDetails from './Components/ViewDetails/ViewDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        // loader: ()=> fetch(`/Data.json`),
      },
      {
        path: "statistics",
        element: <Statistics/>,
      },
      {
        path: "appliedJob",
        element: <AppliedJob/>,
      },
      
      {
        path: "blog",
        element: <Blog/>,
      },
      {
        path: "jobDetails/:jobId",
        element: <JobDetails/>,
        loader: () => fetch(`/Data.json`)
      },
      {
        path: "viewDetails/:viewId",
        element: <ViewDetails/>,
        loader: () => fetch(`/Data.json`)
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
