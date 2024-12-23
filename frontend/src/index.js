// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import Layout from "./pages/Layout";
// import Login from "./pages/Login"; 
// import Index from './pages/Index';
// import CreateEvent from './components/common/CreateEvent';
// import ForgetPassword from './pages/ForgetPassword';
// import OTP from './pages/OTP';
// import ViewTasks from './components/common/ViewTasks';
// import EditTask from './components/common/EditTask';
// import ProtectedRoute from './middleware/ProtectedRoute';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/login" element={<Login />} />
//       <Route path="/forget-password" element={<ForgetPassword />} />
//         <Route path="/otp" element={<OTP />} />

//       <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
//       <Route path="/" element={<Index />}/>
//       </Route>
//       <Route path="/create-task" element={<ProtectedRoute><CreateEvent /></ProtectedRoute>} />
//       <Route path="/view-task" element={<ProtectedRoute><ViewTasks /></ProtectedRoute>} />
//       <Route path="/task/edit/:id" element={<ProtectedRoute><EditTask /></ProtectedRoute>} />
//     </>
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//      <RouterProvider router={router} />
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./pages/Layout";
import Login from "./pages/Login"; 
import Index from './pages/Index';
import CreateEvent from './components/common/CreateEvent';
import ForgetPassword from './pages/ForgetPassword';
import OTP from './pages/OTP';
import ViewTasks from './components/common/ViewTasks';
import EditTask from './components/common/EditTask';
import ProtectedRoute from './middleware/ProtectedRoute'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route
       path="/"
       element={
         localStorage.getItem('token') 
           ? <Navigate to="/view-task" />
           : <Navigate to="/login" />
       }
     />
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/otp" element={<OTP />} />

      {/* Protected Routes */}
      {/* <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}> */}
        {/* <Route index element={<Index />} /> */}
        <Route path="/create-task" element={<ProtectedRoute><CreateEvent /></ProtectedRoute>} />
        <Route path="/view-task" element={<ProtectedRoute><ViewTasks /></ProtectedRoute>} />
        <Route path="/task/edit/:id" element={<ProtectedRoute><EditTask /></ProtectedRoute>} />
      {/* </Route> */}

      {/* <Route
        path="/admin/view-task"
        element={<ProtectedRoute adminOnly={true}><ViewTasks /></ProtectedRoute>}
      /> */}

      {/* Fallback Route */}
      {/* <Route path="*" element={<h1>404 - Page Not Found</h1>} /> */}
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
  </React.StrictMode>
);
