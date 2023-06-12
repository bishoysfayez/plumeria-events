import React, { useEffect } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import axios from 'axios';
import styles from "./Contact.module.css";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  return (
    <>
      <div className="container my-4 py-2">
        <div className="container overlow-hidden" data-aos="fade-up">
          <h2
            className={`my-2 ${styles.contactSectionTitle} overlow-hidden`}
            data-aos="fade-up"
          >
            contact Us
          </h2>
        </div>
      </div>
      <div>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "email required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            } else if (!values.name) {
              errors.name = "name required";
            } else if (!values.message) {
              errors.message = " message Required";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              axios({
                method: "POST",
                url: "https://formspree.io/f/xrgvngzq",
                data: values,
              })
                .then(function (res) {
                  console.log(res);
                  alert("Successfully signed up!");
                })
                .catch(function (res) {
                  console.log(res);
                });

              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="form-group">
              <Field
                data-aos="fade-left"
                type="text"
                name="name"
                placeholder="Your Name"
                id="first_name"
                class="bg-white-50 border form-control w-75 mx-auto"
              />

              <br />
              <Field
                data-aos="fade-left"
                type="email"
                name="email"
                placeholder="e-mail"
                id="first_name"
                class="bg-white-50 border form-control w-75 mx-auto"
              />
              <br />
              <Field
                data-aos="fade-left"
                as="textarea"
                name="message"
                id="message"
                rows="4"
                className="form-control w-75 mx-auto"
                placeholder="Write your message here..."
              />
              <br />

              <div className="container w-75">
                <ErrorMessage
                  data-aos="fade-left"
                  name="name"
                  component="div"
                  className="text-white bg-danger mx-auto my-3 w-50"
                />
                <ErrorMessage
                  data-aos="fade-left"
                  name="email"
                  component="div"
                  className="text-white bg-danger mx-auto my-3 w-50"
                />
                <ErrorMessage
                  data-aos="fade-left"
                  name="message"
                  component="div"
                  className="text-white bg-danger mx-auto my-3 w-50"
                />
              </div>
              <button
                data-aos="fade-left"
                type="submit"
                disabled={isSubmitting}
                className="text-center mx-auto btn btn-info"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
