import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <div className="card mx-auto" style={{ width: 430, height: 480 }}>
        <div class="card-header" style={{ height: 130 }}>
          <div className=" fw-bold my-2 fs-3 mx-auto">Inicio de Sesión</div>
          <div className="fs-6 my-2 fw-light mx-auto" style={{ height: 10 }}>
            Ingresa tu correo electrónico, y contraseña para iniciar sesión
          </div>
        </div>
        <ul className="list-group list-group-flush" style={{ height: 260 }}>
          <li className="list-group-item" style={{ height: 130 }}>
            <form className="row row-cols-lg-auto g-3 align-items-center my-1" />
            <div className="col-12">
              {/* <label
                className="visually-hidden"
                for="inlineFormInputGroupUsername"
              >
                Username
              </label> */}
              <div className="text-start fs-6 fw-light" style={{ height: 20 }}>
                Dirección de correo
              </div>
              <div className="input-group my-1">
                <div className="input-group-text">
                  <i class="fa fa-envelope"></i>
                </div>
                <input
                  type="email"
                  className="form-control"
                  id="inlineFormInputGroupUsername"
                  placeholder="email@address.com"
                />
              </div>
            </div>
          </li>
          <li className="list-group-item" style={{ height: 110 }}>
            <form className="row row-cols-lg-auto g-3 align-items-center my-1" />
            <div className="col-12" />
            {/* <label
              className="visually-hidden"
              for="inlineFormInputGroupUsername"
            >
              Username
            </label> */}
            <div className="text-start fs-6 fw-light " style={{ height: 20 }}>
              Contraseña
            </div>
            <div className="input-group my-1">
              <div className="input-group-text">
                <i class="fa fa-lock"></i>
              </div>
              <input
                type="text"
                className="form-control fw-bold "
                id="inlineFormInputGroupUsername"
                placeholder="••••••••••••••"
              />
            </div>
            <div className=" fw-light text-start text-decoration-underline">
              ¿Olvidaste tu contraseña?
            </div>
          </li>
          <li className="list-group-item" style={{ height: 60 }}>
            <form className="row row-cols-lg-auto g-3 align-items-center my-1" />
            <div className="col-12" />
            {/* <label
                className="visually-hidden"
                for="inlineFormInputGroupUsername"
              >
                Username
              </label> */}
            <div className="container my-2">
              <button
                class="btn btn-dark text-center my-2"
                style={{ width: 380 }}
                type="button"
              >
                Inicio de Sesión
              </button>
              <button
                class="btn btn-outline-dark text-center"
                style={{ width: 380 }}
                type="button"
              >
                Crear cuenta
              </button>
            </div>
          </li>
        </ul>
        {/* <div className="card-footer my-4 " style={{ height: 80 }}>
          <button
            class="btn btn-outline-dark text-center"
            style={{ width: 380 }}
            type="button"
          >
            Crear cuenta
          </button>
        </div> */}
      </div>
    </>
  );
};
