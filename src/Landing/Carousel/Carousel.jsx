import React, { useEffect } from "react";
import image_1 from "../../imgs/1.jpg";
import image_2 from "../../imgs/2.jpg";
import image_3 from "../../imgs/3.jpg";
import image_4 from "../../imgs/4.jpg";
import image_5 from "../../imgs/5.jpg";
import image_6 from "../../imgs/6.jpg";
import image_12 from "../../imgs/12.jpg";
import AOS from "aos";
import styles from "./Carousel.module.css";

function Caro() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  return (
    <>
      <div className={`${styles.logoTitle} overflow-hidden`}>
        <h1 className="overlow-hidden">Plumeria</h1>
        <h3>for Events</h3>
      </div>
      <div
        id="carouselExampleCaptions"
        className={`mt-1 mb-3 pb-3 h-100 rounded shadow-lg carousel slide w-75 mx-auto p-3 overflow-hidden carousel-fade ${styles.carouselContainer}`}
        data-bs-ride="carousel"
        style={{ maxWidth: "600px", minWidth: "70%", maxHeight: "60%" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image_6} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image_2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image_1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Caro;
