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
        className="modal fade"
        id="divpadre"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered border-secondary">
          <div className="modal-content">
            <div className="">
              <button
                type="button"
                className="btn-close float-end my-1 mx-1"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="">
              <Login />
            </div>
            <div className="my-3 mx-1"></div>
            <div className=""></div>
          </div>
        </div>
      </div>
      <a
        className="btn position-absolute top-0 end-0 my-2 mx-5 px-3"
        data-bs-toggle="modal"
        href="#divpadre"
        role="button"
      >
        <i class="fa fa-user"></i> Ingresar
      </a>

      <div
        class="modal fade"
        id="divpadre2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg border-secondary">
          <div class="modal-content">
            <div class="">
              <button
                type="button"
                class="btn-close float-end my-1 mx-1"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="mx-auto">
              <Registro />
            </div>
            <div className="my-3 mx-1"></div>
          </div>
        </div>
      </div>
      {/* <div className="ml-auto">
				{store.estalogueado === true? <a className="btn position-absolute top-0 end-0 my-2 mx-1 px-3" onClick={handleLogout}><i class="fas fa-sign-out-alt"></i></a>  : null}
			</div> */}
    </div>
  );
};
