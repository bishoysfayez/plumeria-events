import React, { useEffect } from "react";
import image_1 from "../../src/imgs/1.jpg";
import image_3 from "../../src/imgs/8.jpg";
import image_12 from "../../src//imgs/12.jpg";

import styles from "./About.module.css";
function About() {
  return (
    <>
    <div className="position-relative">
      <div className={`contaier-fluid p-4 ${styles.aboutContianer}`}>
        <div className="contianer w-90">
          <div className="my-4 py-2">
            <div className="overlow-hidden position-relative">
              <h2 className={`my-4 ${styles.aboutSectionTitle} overlow-hidden`}>
                About Us
              </h2>
            </div>
          </div>
          </div>

          <div className="row g-3">
            <div className="col-sm-12 col-md-6 p-2">
              <div
                className={`container-fluid overlow-hidden p-0 position-relative ${styles.imagesFoldContainer}`}
              >
                {/* image  - 1 */}
                <div
                  className={`rounded  ${styles.aboutImageContainer}`}
                >
                  <img src={image_3} className={`img-fluid rounded`} />
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 p-2">
              <h3 className={`${styles.aboutContentTitle} text-center mb-4`}>
                Creating Memorable Events{" "}
                <span className="text-capitlize m-2">
                  {" "}
                  TAILORED TO THE CLIENT
                </span>
              </h3>

              <p className="ms-4 text-start">
                Plumeria designs and executes special occasions shaped to meet
                the client's style and personality. From large, branded
                corporate events to intimate Engagement Parties and everything
                in between, Plumeria team provide unique insights that will make
                your big day unforgettable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
