import React, { useEffect } from "react";
import image_1 from "../../src/imgs/1.jpg";
import image_3 from "../../src/imgs/8.jpg";
import image_12 from "../../src//imgs/12.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./About.module.css";
function About() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div className="container my-4 py-2">
      <div className="container overlow-hidden">
        <h2 className={`my-2 ${styles.aboutSectionTitle} overlow-hidden`} data-aos="fade-up">About Us</h2>

      </div>
      </div>



        <div className="row g-3">
          <div className="col-sm-12 col-md-6 p-2">
            <div
              className={`container-fluid overlow-hidden position-relative w-100 ${styles.imagesFoldContainer}`}
            >
              {/* image  - 1 */}
              <div
                className={`rounded position-absolute ${styles.aboutImageContainer}`}
                data-aos="fade-right"
              >
                <img src={image_3} className={`img-fluid rounded`} />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 p-2" data-aos="fade-left">
            <p className="ms-4 text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus totam dolores, eius excepturi vero maiores eveniet ea assumenda possimus eos hic quisquam ullam, nobis, molestiae iste! Delectus eaque ullam non consequuntur, sunt optio, eum labore iusto ad quis nobis assumenda amet vitae asperiores harum. Perspiciatis, ut fugit, aliquam nobis non voluptates ad accusamus voluptatem illum corrupti fuga eaque, itaque ab error nemo sequi qui excepturi quam corporis voluptatum? Nesciunt sequi id ipsam natus nulla ad vero itaque, deserunt excepturi quisquam veritatis nam error nobis tenetur, quaerat voluptatum incidunt impedit nisi voluptates repellat modi dicta? Nostrum quo inventore non fugit obcaecati.
            </p>
        </div>
        </div>


      {/*     
      <div className="flex flex-row gap-16 mt-4">
        <div className="grid grid-cols-3 gap-4 basis-1/2">


          <div
            className="bg-red-600 mx-auto rounded-lg overflow-hidden"
            data-aos="fade-right"
          >
            <img src={image_12} className="h-full" />
          </div>
          <div
            className="bg-red-600 mx-auto col-span-2 rounded-lg overflow-hidden"
            data-aos="fade-right"
          >
            {" "}
            <img className="h-300 " src={image_3} />
          </div>
        </div>

        <div className="flex flex-col basis-1/2">
          <div className="mt-0 mb-4">
            <h3
              className="h3 text-4xl text-green-700 text-center mt-0 mb-4 mx-auto"
              data-aos="fade-down"
            >
              Just ready for Happiness !
            </h3>
          </div>
          <div>
            <p className="text-lg" data-aos="fade-right">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
              corporis ab harum quas dicta ut quis nihil dolorem magnam quasi
              unde explicabo earum, excepturi pariatur tempore voluptatem ea.
              Voluptate, obcaecati ipsum accusamus eos placeat nihil aliquid
              dignissimos ut ipsam nemo.
            </p>
            <p className="text-lg" data-aos="fade-right">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
              corporis ab harum quas dicta ut quis nihil dolorem magnam quasi
              unde explicabo earum, excepturi pariatur tempore voluptatem ea.
              Voluptate, obcaecati ipsum accusamus eos placeat nihil aliquid
              dignissimos ut ipsam nemo.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default About;
