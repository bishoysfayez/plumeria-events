import React, { useState } from "react";
import image_1 from "../../imgs/1.jpg";
import image_2 from "../../imgs/2.jpg";
import image_3 from "../../imgs/3.jpg";
import image_4 from "../../imgs/4.jpg";
import image_5 from "../../imgs/5.jpg";
import image_6 from "../../imgs/6.jpg";
import image_7 from "../../imgs/7.jpg";
import image_8 from "../../imgs/8.jpg";
import image_9 from "../../imgs/9.jpg";
import image_10 from "../../imgs/10.jpg";
import image_11 from "../../imgs/11.jpg";
import image_12 from "../../imgs/12.jpg";
import PhotoGallery from "./GalleryCarousel/PhotoGallery.jsx";
import Masony, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "./GalleryStack.module.css";
import Masonry from "react-responsive-masonry";
import NavbarNoScroller from "../../NavbarNoScroller/NavbarNoScroller";

function GalleryStack() {
  let [isShowing, setShowing] = useState(false);
  let [currentIndex, setCurrentIndex] = useState(0);
  let [currentImageSrc, setCurrentImageSrc] = useState("")

  let imagesList = [
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6,
    image_7,
    image_8,
    image_9,
    image_10,
    image_11,
    image_12,
  ];

  // function to show image as a full size

  const showImage = (imageIndex, imageSrc) => {
    setCurrentIndex(imageIndex);
    setShowing(true);
    setCurrentImageSrc(imageSrc)
    console.log(imageSrc)
  };
  const masonryOptions = {
    fitWidth: false,
    columnWidth: 700,
    gutter: 10,
    itemSelector: ".photo-item",
  };

  return (
    <>
    


    <div
        className={`container-fluid position-fixed pb-4 pt-0 px-0 ${styles.navbarFixedContainer}`}
      >
        <NavbarNoScroller />
      </div>

      <div className="container mx-auto mt-4 p-2">
        <Masonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          className={`${styles.photoList} row`}
          elementType={"div"}
          options={masonryOptions}
          diableImagesLoaded={false}
          updateOneachImageLoad={false}
        >
          {imagesList.map((image, index) => (
            <div
              className={`${styles.photoItem} col-md-4`}
              onClick={() => {
                showImage(index, image);
                console.log(index);
              }}
              key={index}
            >
              <img src={image} className={`img-fluid`} alt="" srcset="" />
              <div className={`container-fluid ${styles.dimedShadow} bg-dark`}></div>

            </div>
          ))}
        </Masonry>
      </div>
      {isShowing && <div className={`container-fluid ${styles.imageShowCotainer}`} onClick={()=>{
        setShowing(false);
      }}>
        <PhotoGallery imgSrc={currentImageSrc} imgId={currentIndex} />
      </div> }


    </>
  );
}

export default GalleryStack;
