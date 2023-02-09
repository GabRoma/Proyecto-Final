import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export const Registro = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Formik
        initialValues={{
          inputNombre: "",
          inputApellido: "",
          inputCelular: "",
          inputCorreo: "",
          inputConfirmcorreo: "",
          inputContrasena: "",
          inputConfirmcontrasena: "",
        }}
        validationSchema={Yup.object({
          inputNombre: Yup.string()
            .max(15, "Debes introducir 15 carácteres o menos")
            .required("Requerido"),

          inputApellido: Yup.string()
            .max(15, "Debes introducir 15 carácteres o menos")
            .required("Requerido"),

          inputCelular: Yup.string()
            .max(10, "Debes introducir 9 carácteres")
            .required("Requerido"),

          inputCorreo: Yup.string()
            .email("Dirección de correo electrónico inválido")
            .required("Requerido"),

          inputConfirmcorreo: Yup.string()
            .email("Debe coincidir con la dirección de correo electrónico")
            .required("Requerido"),

          inputContrasena: Yup.string().required("Requerido"),

          inputConfirmcontrasena: Yup.string().required("Requerido"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          actions.registro(
            values.inputNombre,
            values.inputApellido,
            values.inputCelular,
            values.inputContrasena,
            values.inputCorreo
          );
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ errors, touched }) => (
          <div className=" mx-auto" style={{ width: 695 }}>
            <div className="card text-center border-secondary border-2  rounded-5">
              <div className="card-header fs-3 fw-bold">REGISTRO</div>
              <div className="card-body">
                <Form className="row g-3" id="formulario">
                  <div className="col-md-3">
                    {/* <label for="inputCity" class="form-label">
                Nombre
              </label> */}
                    <Field
                      type="text"
                      className={
                        "form-control my-3  rounded-5 " +
                        (errors.inputNombre && touched.inputNombre
                          ? "border border-danger border-2 "
                          : "border-secondary border-2")
                      }
                      style={{ height: 50 }}
                      name="inputNombre"
                      placeholder="Nombre"
                    />
                    <span className="text-danger">
                      <ErrorMessage name="inputNombre" />
                    </span>
                  </div>
                  <div className="col-md-4">
                    {/* <label for="inputState" class="form-label">
                Apellido
              </label> */}
                    <Field
                      type="text"
                      className={
                        "form-control my-3  rounded-5 " +
                        (errors.inputApellido && touched.inputApellido
                          ? "border border-danger border-2 "
                          : "border-secondary border-2")
                      }
                      style={{ height: 50 }}
                      name="inputApellido"
                      placeholder="Apellido"
                    />
                    <span className="text-danger">
                      <ErrorMessage name="inputApellido" />
                    </span>
                  </div>
                  <div className="col-md-5">
                    {/* <label for="inputZip" class="form-label">
                Celular
              </label> */}
                    <Field
                      type="text"
                      className={
                        "form-control my-3  rounded-5 " +
                        (errors.inputCelular && touched.inputCelular
                          ? "border border-danger border-2 "
                          : "border-secondary border-2")
                      }
                      style={{ height: 50 }}
                      name="inputCelular"
                      placeholder="Celular"
                    />
                    <span className="text-danger">
                      <ErrorMessage name="inputCelular" />
                    </span>
                  </div>
                  <div className="col-md-6">
                    {/* <label for="inputEmail4" class="form-label">
                Correo
              </label> */}
                    <Field
                      type="email"
                      className={
                        "form-control my-3  rounded-5 " +
                        (errors.inputCorreo && touched.inputCorreo
                          ? "border border-danger border-2 "
                          : "border-secondary border-2")
                      }
                      style={{ height: 50 }}
                      name="inputCorreo"
                      placeholder="Correo electrónico"
                    />
                    <span className="text-danger">
                      <ErrorMessage name="inputCorreo" />
                    </span>
                  </div>
                  <div className="col-md-6">
                    {/* <label for="inputPassword4" class="form-label">
                Confirmacion correo
              </label> */}
                    <Field
                      type="email"
                      className={
                        "form-control my-3  rounded-5 " +
                        (errors.inputConfirmcorreo && touched.inputConfirmcorreo
                          ? "border border-danger border-2 "
                          : "border-secondary border-2")
                      }
                      style={{ height: 50 }}
                      name="inputConfirmcorreo"
                      placeholder="Confirmar correo electrónico"
                    />
                    <span className="text-danger">
                      <ErrorMessage name="inputConfirmcorreo" />
                    </span>
                  </div>
                  <div className="col-md-6">
                    {/* <label for="inputEmail4" class="form-label">
                 Contrasena
              </label> */}
                    <Field
                      type="password"
                      className={
                        "form-control my-3  rounded-5 " +
                        (errors.inputContrasena && touched.inputContrasena
                          ? "border border-danger border-2 "
                          : "border-secondary border-2")
                      }
                      style={{ height: 50 }}
                      name="inputContrasena"
                      placeholder="Contraseña"
                    />
                    <span className="text-danger">
                      <ErrorMessage name="inputContrasena" />
                    </span>
                  </div>
                  <div className="col-md-6">
                    {/* <label for="inputPassword4" class="form-label">
                Confirmar contrasena
              </label> */}
                    <Field
                      type="password"
                      className={
                        "form-control my-3  rounded-5 " +
                        (errors.inputConfirmcontrasena &&
                        touched.inputConfirmcontrasena
                          ? "border border-danger border-2 "
                          : "border-secondary border-2")
                      }
                      style={{ height: 50 }}
                      name="inputConfirmcontrasena"
                      placeholder="Confirmar contraseña"
                    />
                    <span className="text-danger">
                      <ErrorMessage name="inputConfirmcontrasena" />
                    </span>
                  </div>
                  <div className="col-12"></div>
                  <div className="card-footer text-muted">
                    <button
                      type="submit"
                      id="botoncrearcuenta"
                      className="btn btn-dark btn-lg fw-bold mx-5 my-1"
                      style={{ height: 50, width: 200 }}
                    >
                      Crear cuenta
                    </button>
                    <div className="fs-6 fw-lighter">
                      Al hacer click en "Crear cuenta" el usuario acepta los
                      términos y condiciones de uso
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};
