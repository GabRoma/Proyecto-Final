//checkout

import React, { useState, useEffect, useContext } from "react";
import PropTypes, { number } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Checkout = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="jumbotron m-2">
      <div className="title text-center">
        <h1>Checkout</h1>
      </div>
    </div>
  );
};

Checkout.propTypes = {
  match: PropTypes.object,
};
