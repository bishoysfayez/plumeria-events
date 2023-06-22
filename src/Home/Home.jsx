import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import Portfolio from "../Portfolio/Portfolio.jsx";
import Caro from "../Carousel/Carousel.jsx";
import styles from "./Home.module.css";
import { Element } from "react-scroll";

function Home() {
  return (
    <>
          <div
        className={`container-fluid position-fixed pb-4 pt-0 px-0 ${styles.navbarFixedContainer}`}
      >
        <Navbar />
      </div>
      <div
        className={`${styles.carouselContainer} container-fluid mx-0 w-100 my-4 text-center`}
        id="scrollToHome"
      >
        <Caro />
      </div>
      <div className="container mx-auto my-4 p-4 text-center">
        <Element id="scrollToPortfolio" name="scrollToPortfolio">
          <Portfolio />
        </Element>
      </div>
      <div
        className={`mx-auto my-4 text-center ${styles.aboutContainer}`}
        id="scrollToAbout"
      >
        <About />
      </div>
      <div
        className="container mx-auto my-4 p-4 text-center"
        id="scrolltoContact"
      >
        <Contact />
      </div>
    </>
  );
}

export default Home;
