import "./App.css";
import React from "react";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


import Home from "./Home/Home";
import Gallery from "./Gallery/Gallery.jsx";
import MainLayout from "./MainLayout/MainLayout";
import GalleryStack from "./PhotoGallery/GallleryStack/GalleryStack";
import Contact from "./Contact/Contact";
import NavbarNoScroller from "./NavbarNoScroller/NavbarNoScroller";

function App() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/photoGallery", element: <GalleryStack />},
        { path: "/contact", element: <> <NavbarNoScroller/> <Contact /></>},

        { path: "*", element: <Home /> }
      ]
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
  ]);
  return (
    <>
      <React.StrictMode>
        
        <RouterProvider router={routers}>
        </RouterProvider>
      </React.StrictMode>
    </>
  );
}

export default App;
