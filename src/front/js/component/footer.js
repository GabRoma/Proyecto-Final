import React, { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../component/contact";

export const Footer = () => {
    const [showPopup, setShowPopup] = useState(false);
    const handleTogglePopup = (value) => {
        setShowPopup(value);
    };
    return (
        <>
            <footer className="footer ms-auto py-3 text-center container-fluid border-top mt-5">
                <div className="m-auto d-flex justify-content-center terminos container">
                    <div className="m-auto">
                        <h5 className="mb-3">Necesitas ayuda?</h5>
                        <button className="btn bg-dark bg-opacity-75 text-light fs-6 ps-4 pe-4 pt-2 pb-2" onClick={() => handleTogglePopup(true)}>Contact us</button>

                    </div>
                    <div className="m-auto">
                        <h4 className="fw-bolder">Devoluciones y garantía</h4>
                        <Link to="/tos">
                            <p>Términos de servicio</p>
                        </Link>
                        <Link to="/">
                            <p>Políticas de privacidad</p>
                        </Link>
                    </div>
                    <div className="m-auto">
                        <h4 className="fw-bolder">Información corporativa</h4>
                        <Link to="/aboutus">
                            <p>About Us</p>
                        </Link>
                        <Link to="/brands">
                            <p>Brands</p>
                        </Link>
                    </div>
                    <div className="m-auto">
                        <h4 className="fw-bolder">Devoluciones y garantía</h4>
                        <Link to="/">
                            <p>Términos de servicio</p>
                        </Link>
                        <Link to="/">
                            <p>Políticas de privacidad</p>
                        </Link>
                    </div>
                </div>
            </footer>
            <Contact showPopup={showPopup} handleTogglePopup={handleTogglePopup} />
        </>
    );
};