import React, { useState } from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = ({ showPopup, handleTogglePopup }) => {
  const contactUsSchema = Yup.object().shape({
    name: Yup.string().required("Nombre inválido"),
    email: Yup.string()
      .email("Email inválido")
      .required("Es obligatio ingresar un Email"),
    message: Yup.string().required("Se requiere un mensaje"),
  });

  return (
    <>
      {showPopup && (
        <div className="popup-overlay" style={{ zIndex: "1100" }}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={contactUsSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                handleTogglePopup(false);
              }, 500);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="card bg-dark text-white p-4">
                <div className="popup-content">
                  <div className="d-flex">
                    <h3 className="pt-3 ms-2">Contact Us</h3>

                    <button
                      type="button"
                      className="ms-auto btn text-white mt-0 me-0 d-flex"
                      onClick={() => handleTogglePopup(false)}
                    >
                      X
                    </button>
                  </div>
                  <Field
                    type="text"
                    name="name"
                    className="rounded border-1 border-light p-1 mt-3"
                    placeholder="Name"
                    style={{ backgroundColor: "#14141414", color: "white" }}
                  />
                  <ErrorMessage name="name" />
                  <Field
                    type="email"
                    name="email"
                    className="rounded border-1 border-light p-1 mt-3"
                    placeholder="Email"
                    style={{ backgroundColor: "#14141414", color: "white" }}
                  />
                  <ErrorMessage className="mt-0" name="email" />
                  <Field
                    className="rounded border-1 border-light mt-3"
                    as="textarea"
                    name="message"
                    placeholder="Message"
                    style={{ backgroundColor: "#14141414", color: "white" }}
                  />
                  <ErrorMessage name="message" />
                  <button
                    className="btn bg-secondary bg-opacity-75 text-light mt-5"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
};

export default Contact;
