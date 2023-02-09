import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { Login } from "../component/login";
import { Registro } from "../component/registro";

// import {useNavigate} from "react-router-dom"

export const AuthComponent = () => {
  const { store, actions } = useContext(Context);
  // const navigate = useNavigate()

  // function handleLogout() {
  // 	actions.logout()//cerrar la sesiono
  // 	navigate("/")}//usamos navigate para redireccionar

  return (
    <div>
      <div
        className="modal"
        id="divpadre"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered border-secondary">
          <div className="modal-content">
            <div>
              <button
                type="button"
                className="btn-close m-3 d-flex ms-auto"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ width: '3.5px', height: '3.5px' }}
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
        <button className="btn p-0"><i className="far fa-user"></i>Ingresar</button>      </a>

      <div
        className="modal fade"
        id="divpadre2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="1"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg border-secondary">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close m-3 me-4 d-flex ms-auto"
              data-bs-dismiss="modal"
              aria-label="Close"
              style={{ width: '3.5px', height: '3.5px' }}
            ></button>
            <div className="mx-auto">
              <Registro />
            </div>
            <div className="my-3 mx-1"></div>
          </div>
        </div>
      </div>
      {/* <div className="ml-auto">
				{store.estalogueado === true? <a className="btn position-absolute top-0 end-0 my-2 mx-1 px-3" onClick={handleLogout}><i className="fas fa-sign-out-alt"></i></a>  : null}
			</div> */}
    </div>
  );
};
