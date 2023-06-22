import React, { useEffect } from "react";
import image_1 from "../imgs/1.jpg";
import image_2 from "../imgs/2.jpg";
import image_6 from "../imgs/6.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Portfolio.module.css";

function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  return (
    <>

      <div className="container my-2 py-2">
        <div className="container overlow-hidden">
          <h2
            className={`my-2 ${styles.portfolioSectionTitle} overlow-hidden`}
            data-aos="fade-up"
          >
            Portfolio
          </h2>
        </div>
      </div>
      <div className="row g-2">
        {/* card --1  */}
        <div className="col-sm-12 col-md-4 p-2 overflow-hidden">
          <div className="card p-0" data-aos="fade-down-right">
            <div
              className={`container-fluid overflow-hidden p-0 ${styles.cardImageContainer}`}
            >
              <div className="container-fluid overflow-hidden p-0">
                <img src={image_1} className="card-img-top w-100" alt="..." />
              </div>{" "}
            </div>{" "}
            <div className="card-body">
              <a href="#">
                <h5 className={`${styles.cardTitle}`}>Birthday Party</h5>
              </a>
              <p className={`${styles.cardText}`}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                className={`text-center mx-auto mt-2 mb-4 bg-alert btn ${styles.cardBtn}`}
              >
                Read more..
              </button>
            </div>
          </div>
        </div>

        {/* card --2  */}
        <div className="col-sm-12 col-md-4 p-2 overflow-hidden">
          <div className="card p-0" data-aos="fade-up-left">
            <div
              className={`container-fluid overflow-hidden p-0 ${styles.cardImageContainer}`}
            >
              <img src={image_2} className="card-img-top w-100" alt="..." />
            </div>{" "}
            <div className="card-body">
              <h5 className={`${styles.cardTitle}`}>Engagement Party</h5>

              <p className={`${styles.cardText}`}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                className={`text-center mx-auto mt-2 mb-4 bg-alert btn ${styles.cardBtn}`}
              >
                Read more..
              </button>
            </div>
          </div>
        </div>
        {/* card --3  */}
        <div className="col-sm-12 col-md-4 p-2 overflow-hidden">
          <div className="card p-0" data-aos="fade-right">
            <div
              className={`container-fluid overflow-hidden p-0 ${styles.cardImageContainer}`}
            >
              <img src={image_6} className="card-img-top w-100" alt="..." />
            </div>
            <div className="card-body">
              <a href="#">
                <h5 className={`${styles.cardTitle}`}>Sepcial Events</h5>
              </a>
              <p className={`${styles.cardText}`}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                className={`text-center text-bold mx-auto mt-2 mb-4 bg-alert btn ${styles.cardBtn}`}
              >
                Read more..
              </button>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Portfolio;
