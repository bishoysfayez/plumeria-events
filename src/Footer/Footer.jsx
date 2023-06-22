import React from "react";
import styles from './Footer.module.css'

function Footer() {
  return (
    <>
      <footer className={`${styles.footer} border-top`}>
        <div className="mx-auto mt-2 mb-0 p-1 text-center w-100">
        
        <a
            href="/"
            className="mb-3 mx-auto text-center text-muted text-decoration-none"
          >
           Developed By: Bishoy Saeed
          </a>

          <span className="text-center text-muted"> 2023 - <a target="_blank" href="mailto:bishoysfayez@gmail.com">bishoysfayez@gmail.com</a> </span>
        </div>


      </footer>
    </>
  );
}

export default Footer;
