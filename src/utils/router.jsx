import { createBrowserRouter, Outlet } from "react-router-dom";
import React from "react";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const router = createBrowserRouter([
  { path: "/", element: 
    <>
        <Navbar />
            <div style={{ width: "100%", minHeight: "90vh", padding: "2rem" }}>
                <Outlet />
            </div>
        <Footer />
    </>, 
    children: [
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
    ]
  }, 
]);

export default router;