import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { Login } from "../component/login";
import { Registro } from "../component/registro";

import { useNavigate } from "react-router-dom";

export const AuthComponent = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  function handleLogout() {
    actions.logout(); //cerrar la sesiono
    navigate("/");
    window.location.reload(false);
  } //usamos navigate para redireccionar

  return (
    <div>
      {store.estalogueado === true ? (
        <div>
          <button className="log btn p-0 mx-4">
            <i className="fas fa-sign-out-alt" onClick={handleLogout}></i>
            Salir
          </button>{" "}
        </div>
      ) : (
        <div>
          <div
            className="modal"
            id="divpadre"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered border-secondary">
              <div className="modal-content">
                <div>
                  <button
                    type="button"
                    className="btn-close m-3 d-flex ms-auto"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    style={{ width: "3.5px", height: "3.5px" }}
                  ></button>
                </div>
                <div>
                  <Login />
                </div>
                <div className="my-3 mx-1"></div>
              </div>
            </div>
          </div>
          <a
            className="btn"
            data-bs-toggle="modal"
            href="#divpadre"
            role="button"
          >
            <button className="log btn p-0">
              <i className="far fa-user"></i>Ingresar
            </button>{" "}
          </a>

          <div
            className="modal fade"
            id="divpadre2"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel2"
            tabIndex="1"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg border-secondary">
              <div className="modal-content">
                <button
                  type="button"
                  className="btn-close m-3 me-4 d-flex ms-auto"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  style={{ width: "3.5px", height: "3.5px" }}
                ></button>
                <div className="mx-auto">
                  <Registro />
                </div>
                <div className="my-3 mx-1"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
