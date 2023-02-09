import React from "react";
import logo from "../../img/logito.png";
export const Aboutus = () => {
    return (
        <div className="d-flex row justify-content-center align-item-center ">
            <div style={{ width: "50%", textAlign: "center" }}>
                <img
                    className="mt-0"
                    src={logo}
                    alt="Company Logo"
                    style={{ width: "450px", margin: "30px 0" }}
                />
                <h1 style={{ fontWeight: "bold" }}>About Us</h1>
                <p style={{ fontSize: "20px", lineHeight: "1.5" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    interdum, mi eu feugiat dictum, sapien est bibendum justo, id
                    scelerisque quam est vel justo. Sed eget odio euismod, gravida diam
                    id, tempor sapien. Aliquam erat volutpat.
                </p>
                <p style={{ fontSize: "20px", lineHeight: "1.5" }}>
                    Nunc auctor nunc velit, eget facilisis quam molestie non. Praesent
                    pharetra, elit vel fringilla bibendum, tortor magna tempor velit, vel
                    molestie ipsum diam eu nibh.
                </p>
            </div>
        </div>
    );
};
