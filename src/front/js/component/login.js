import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export const Login = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Formik
        initialValues={{
          inputLogincorreo: "",
          inputLogincontrasena: "",
        }}
        validationSchema={Yup.object().shape({
          inputLogincorreo: Yup.string()
            .email("Dirección de correo electrónico inválido")
            .required("Requerido"),

          inputLogincontrasena: Yup.string().required("Requerido"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          console.log(values.inputLogincorreo);


          actions.inicioLogin(
            values.inputLogincorreo,
            values.inputLogincontrasena
          );
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ errors, touched }) => (
          <div
            className="card mx-auto border-secondary border-secondary border-2  rounded-5"
            style={{ width: 430, height: 480 }}
          >
            <div
              className="card-header container mx-auto"
              style={{ height: 130 }}
            >
              <div className=" fw-bold my-2 fs-3 mx-auto">Inicio de Sesión</div>
              <div
                className="fs-6 my-2 fw-light mx-auto"
                style={{ height: 10 }}
              >
                Ingresa tu correo electrónico, y contraseña para iniciar sesión
              </div>
            </div>
            <Form className="row row-cols-lg-auto g-3 align-items-center my-1">
              <ul
                className="list-group list-group-flush mx-3"
                style={{ height: 200, width:420 }}
              >
                <li className="list-group-item" style={{ height: 130 }}>
                  <div className="col-12">
                    <div
                      className="text-start fs-6 fw-light"
                      style={{ height: 20 }}
                    >
                      Dirección de correo
                    </div>
                    <div className="input-group my-1">
                      <div className="input-group-text">
                        <i className="fa fa-envelope"></i>
                      </div>
                      <Field
                        type="email"
                        className={
                          "form-control rounded-5" +
                          (errors.inputLogincorreo && touched.inputLogincorreo
                            ? "border border-danger border-2 "
                            : "border-secondary border-2")
                        }
                        name="inputLogincorreo"
                        placeholder="email@address.com"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                      />
                      <span className="text-danger d-block mx-2 my-1 ">
                        <ErrorMessage name="inputLogincorreo" />
                      </span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item" style={{ height: 110 }}>
                  {/* <form className="row row-cols-lg-auto g-3 align-items-center my-1" /> */}
                  <div className="col-12" />
                  <div
                    className="text-start fs-6 fw-light "
                    style={{ height: 20 }}
                  >
                    Contraseña
                  </div>
                  <div className="input-group my-1">
                    <div className="input-group-text">
                      <i className="fa fa-lock"></i>
                    </div>
                    <Field
                      type="password"
                      // className="form-control fw-bold "
                      className={
                        "form-control rounded-5 " +
                        (errors.inputLogincontrasena &&
                        touched.inputLogincontrasena
                          ? "border border-danger border-2  "
                          : " border-2")
                      }
                      name="inputLogincontrasena"
                      placeholder="••••••••••••••"
                    />
                    <span className="text-danger mx-2 my-1">
                      <ErrorMessage name="inputLogincontrasena" />
                    </span>
                  </div>
                  <div className=" fw-light text-start text-decoration-underline">
                    ¿Olvidaste tu contraseña?
                  </div>
                </li>
                <li className="list-group-item" style={{ height: 60 }}>
                  {/* <form className="row row-cols-lg-auto g-3 align-items-center my-1" /> */}
                  <div className="col-12" />
                  <div className="container my-2 mx-auto">
                    <button
                      // onClick={enviarDatos}
                      className="btn btn-dark text-center my-2"
                      style={{ width: 350 }}
                      type="submit"
                    >
                      Inicio de Sesión
                    </button>
                    <button
                      className="btn btn-outline-dark text-center"
                      data-bs-target="#divpadre2"
                      data-bs-toggle="modal"
                      style={{ width: 350 }}
                      type="submit"
                    >
                      Crear cuenta
                    </button>
                  </div>
                </li>
              </ul>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};
