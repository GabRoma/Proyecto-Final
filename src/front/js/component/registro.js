import React from "react";
import { Link } from "react-router-dom";

export const Registro = () => {
  return (
    <>
      <div className="w-50 mx-auto">
        <div className="card text-center border-secondary border-2  rounded-5">
          <div className="card-header fs-3 fw-bold">REGISTRO</div>
          <div className="card-body">
            <form className="row g-3" id="formulario">
              <div>
                <div
                  className="alert alert-danger d-none"
                  id="alert"
                  role="alert"
                >
                  Campos vacíos
                </div>
              </div>
              <div className="col-md-3">
                {/* <label for="inputCity" class="form-label">
                Nombre
              </label> */}
                <input
                  type="text"
                  className="form-control my-3 border-secondary border-2 rounded-5 "
                  style={{ height: 50 }}
                  id="inputNombre"
                  placeholder="Nombre"
                />
              </div>
              <div className="col-md-4">
                {/* <label for="inputState" class="form-label">
                Apellido
              </label> */}
                <input
                  type="text"
                  className="form-control my-3 border-secondary border-2 rounded-5"
                  style={{ height: 50 }}
                  id="inputApellido"
                  placeholder="Apellido"
                />
              </div>
              <div className="col-md-5">
                {/* <label for="inputZip" class="form-label">
                Celular
              </label> */}
                <input
                  type="text"
                  className="form-control my-3 border-secondary border-2  rounded-5"
                  style={{ height: 50 }}
                  id="inputCelular"
                  placeholder="Celular"
                />
              </div>
              <div className="col-md-6">
                {/* <label for="inputEmail4" class="form-label">
                Correo
              </label> */}
                <input
                  type="email"
                  className="form-control my-3 border-secondary border-2  rounded-5"
                  style={{ height: 50 }}
                  id="inputCorreo"
                  placeholder="Correo electrónico"
                />
              </div>
              <div className="col-md-6">
                {/* <label for="inputPassword4" class="form-label">
                Confirmacion correo
              </label> */}
                <input
                  type="email"
                  className="form-control my-3 border-secondary border-2  rounded-5"
                  style={{ height: 50 }}
                  id="inputConfirmcorreo"
                  placeholder="Confirmar correo electrónico"
                />
              </div>
              <div className="col-md-6">
                {/* <label for="inputEmail4" class="form-label">
                 Contrasena
              </label> */}
                <input
                  type="password"
                  className="form-control my-3 border-secondary border-2  rounded-5"
                  style={{ height: 50 }}
                  id="inputContrasena"
                  placeholder="Contraseña"
                />
              </div>
              <div className="col-md-6">
                {/* <label for="inputPassword4" class="form-label">
                Confirmar contrasena
              </label> */}
                <input
                  type="password"
                  className="form-control my-3 border-secondary border-2  rounded-5"
                  style={{ height: 50 }}
                  id="inputConfirmcontrasena"
                  placeholder="Confirmar contraseña"
                />
              </div>
              <div className="col-12"></div>
            </form>
          </div>
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
              Al hacer click en "Crear cuenta" el usuario acepta los términos y
              condiciones de uso
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
