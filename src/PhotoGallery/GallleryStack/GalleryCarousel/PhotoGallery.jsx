import React, { useEffect, useState } from "react";
import styles from "./PhotoGallery.module.css";

function PhotoGallery(props) {
  let { imgSrc, imgId } = props;

  // detect key press
  useEffect(() => {
    document.addEventListener("keypress", detectPressedKey, true);
  }, []);

  const detectPressedKey = (e) => {
    console.log(e.key);
  };

  const onClickNext = () => {
    // if (index + 1 === imagesList.length) {
    //   setIndex(0);
    // } else {
    //   setIndex(index + 1);
    // }
    console.log("hiii");
  };
  const onClickPrevious = () => {
    // if (index - 1 === -1) {
    //   setIndex(imagesList.length - 1);
    // } else {
    //   setIndex(index - 1);
    // }
    console.log("hiii");
  };

  return (
    <div className="my-4 p-4 position-relative">
      <img
        className="img-fluid rounded mx-auto d-block"
        src={`${imgSrc}`}
        style={{ maxHeight: "80vh", maxWidth: "80vw" }}
      />
      <br />
      {/* <div className={`${styles.btnContainerPrev} d-flex flex-row mx-auto`}>
        <button style={{ fontSize: "18px" }} onClick={onClickPrevious}>
          <i class="bi bi-caret-left"></i>
        </button>
      </div>
      <div className={`${styles.btnContainerNext} d-flex flex-row mx-auto`}>
        <button
          style={{ "margin-left": "5px", fontSize: "18px" }}
          onClick={onClickNext}
        >
          <i class="bi bi-caret-right"></i>
        </button>
      </div> */}
    </div>
  );
}

export default PhotoGallery;
