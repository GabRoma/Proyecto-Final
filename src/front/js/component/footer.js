import React, { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../component/contact";
import { DarkModeToggle } from "./darkmode.js";

export const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleTogglePopup = (value) => {
    setShowPopup(value);
  };
  return (
    <>
      <footer className="footer ms-auto py-3 text-center container-fluid border-top mt-5 py-5">
        <div className="m-auto d-flex justify-content-center terminos container">
          <div className="m-auto">
            <h5 className="mb-3"> Necesitas ayuda ? </h5>
            <button
              className="btn bg-dark bg-opacity-75 text-light fs-6 ps-4 pe-4 pt-2 pb-2"
              onClick={() => handleTogglePopup(true)}
            >
              Contact us
            </button>
          </div>
          <div className="m-auto">
            <h4 className="fw-bolder"> Devoluciones y garantía </h4>
            <Link to="/tos">
              <p className="ftext1"> Términos de servicio </p>
            </Link>
            <Link to="/politica">
              <p className="ftext2"> Políticas de privacidad </p>
            </Link>
          </div>
          <div className="m-auto">
            <h4 className="fw-bolder"> Información corporativa </h4>
            <Link to="/aboutus">
              <p className="ftext3"> About Us </p>
            </Link>
            <Link to="/brands">
              <p className="ftext4"> Brands </p>
            </Link>
          </div>
          <div className="m-auto">
            <h4 className="fw-bolder"> Devoluciones y garantía </h4>
            <Link to="/compromiso">
              <p className="ftext5"> Nuestro Compromiso </p>
            </Link>
            <Link to="/">
              <p className="ftext6"> Misión y Visión</p>
            </Link>
          </div>
          <DarkModeToggle />
        </div>
        <Contact showPopup={showPopup} handleTogglePopup={handleTogglePopup} />
        <div className="container mt-5">
          <p>            Métodos de pago{" "}</p>
          <p className="text-center mx-3 fw-bold">
            <img
              src="https://www.sacfcu.org/wp-content/uploads/Visa-Logo.png"
              height="30"
              className="ms-3"
            ></img>
            <img
              src="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_rev_92px_2x.png"
              height="30"
              className="ms-3"
            ></img>
            <img
              src="https://logospng.org/download/diners-club-international/logo-diners-club-international-icon-1536.png"
              height="30"
              className="ms-3"
            ></img>
            <img
              src="https://logolook.net/wp-content/uploads/2022/06/American-Express-Emblem.png"

              height="30"
              className="ms-3"
            ></img>
            <img
              src="https://logolook.net/wp-content/uploads/2021/06/Paypal-Logo-2007.png"

              height="30"
              className="ms-3"
            ></img>
            <img
              src="https://miestadodecuenta.net/wp-content/uploads/2020/07/Estado-de-Cuenta-Prex-Sobre-la-Tarjeta-Prex-App-y-MÁS.png"

              height="30"
              className="ms-3"
            ></img>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Pay_Logo_%282020%29.svg/1280px-Google_Pay_Logo_%282020%29.svg.png"

              height="30"
              className="ms-3"
            ></img>
          </p>
        </div>
      </footer>
    </>
  );
};
