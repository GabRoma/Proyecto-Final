import React from "react";
import { Link } from "react-router-dom";
import { Login } from "../component/login";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div
        className="modal fade"
        id="divpadre"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="">
              <button
                type="button"
                className="btn-close float-end my-1 mx-1"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="">
              <Login />
            </div>
            <div className="my-2 mx-1"></div>
            <div class="">
              {/* <button
                class="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Open second modal
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <a
        class="btn btn-primary position-absolute top-0 end-0 my-2 mx-5 px-3"
        data-bs-toggle="modal"
        href="#divpadre"
        role="button"
      >
        ingresar
      </a>
    </nav>
  );
};
