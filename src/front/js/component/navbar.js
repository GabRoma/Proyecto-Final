import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logito.png";
import logo2 from "../../img/logito2.png"
import { AuthComponent } from "./authcomponent.js"

export const Navbar = () => {
  return (
    <nav className="navbar sticky-top pt-0">
      <div className="container-fluid bg-dark bg-opacity-75 text-white text-center m-0 d-flex align-items-center row" style={{ height: "25px" }}>
        <p className="m-auto" style={{ fontSize: "16px" }}>Envío gratis a todas las órdenes mayores a $200 por tiempo limitado! </p>
      </div>
      <div className="container-fluid pt-2 pb-2 d-flex justify-content-center" style={{ backgroundColor: "rgb(243,244,245)" }}>
        <Link to="/" className="d-flex align-items-center me-4">
          <img src={logo} height="70" />
          <img className="ps-3" src={logo2} height="40" />
        </Link>
        <form className="form-inline d-flex justify-content-center me-4">
          <button className="btn bg-white rounded-start rounded-0 border-end-0 border border-dark pe-1" type="submit"><i className="fas fa-search"></i></button>
          <input className="form-control rounded-end rounded-0 border border-start-0 border-dark ps-1" style={{ width: "600px" }} type="search" placeholder="Buscar un producto" aria-label="Search" />
        </form>
        <div className="ml-auto">
          <div className="dropdown d-flex">
            <button className="btn p-0 dropdown-toggle me-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fas fa-heart" style={{ color: "rgb(224, 24, 24)" }}></i>
              <span className="notificacion" style={{ right: '140px' }}>0</span>
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#"></a></li>
              <li><a className="dropdown-item" href="#"></a></li>
              <li><a className="dropdown-item" href="#"></a></li>
            </ul>
            <AuthComponent />
            <button className="btn p-0 dropdown-toggle ms-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fas fa-shopping-cart"></i>
              <span className="notificacion" style={{ right: '-11px' }}>0</span>
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#"></a></li>
              <li><a className="dropdown-item" href="#"></a></li>
              <li><a className="dropdown-item" href="#"></a></li>
            </ul>
          </div>


        </div>
      </div>
    </nav >
  );
};
