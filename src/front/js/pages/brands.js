import React, { useState } from "react";

export const Brands = () => {
  return (
    <>
      <div
        className="container d-flex justify-content-center"
        style={{ marginTop: "10%" }}
      >
        <div className="me-2">
          <img
            src="https://www.sony.net/top/2017/img/icon/top-og.jpg"
            className="brandsimg"
            style={{ width: 150, height: 150, objectFit: "cover" }}
            alt="ERROR"
          />
        </div>
        <div className="me-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/84/Eastman_Kodak_Company_logo_%282016%29.svg"
            className="brandsimg"
            style={{ width: 150, height: 150, objectFit: "cover" }}
            alt="ERROR"
          />
        </div>
        <div className="me-2">
          <img
            src="https://s7test3.scene7.com/is/image/SIEPDC/playstation-family-logo?$native$"
            className="brandsimg"
            style={{ width: 150, height: 150, objectFit: "cover" }}
            alt="ERROR"
          />
        </div>
        <div className="me-2">
          <img
            src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/others_3/H2x1_NintendoLogo_Red.png"
            className="brandsimg"
            style={{ width: 150, height: 150, objectFit: "cover" }}
            alt="ERROR"
          />
        </div>
        <div className="me-2">
          <img
            src="https://soundvet.com/wp-content/uploads/2016/04/canon-logo-red.png"
            className="brandsimg"
            style={{ width: 150, height: 150, objectFit: "cover" }}
            alt="ERROR"
          />
        </div>
      </div>
    </>
  );
};
