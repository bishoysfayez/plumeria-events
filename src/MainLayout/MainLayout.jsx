import React from "react";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import styles from "./MainLayout.module.css";
function MainLayout() {
  return (
    <>

      <div className="py-4">
      <Outlet />

      </div>
      <div className={`container-fluid ${styles.footerContainer} `}>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
