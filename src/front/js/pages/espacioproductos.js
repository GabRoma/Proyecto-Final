import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Espacioproductos = (props) => {
  const { actions } = useContext(Context);
  console.log(props);
  //   const params = useParams();
  //   console.log(params);

  //   useEffect(() => {
  //     actions.todosLosProductos(params.theid);
  //   }, []);

  return (
    <>
      <p>Hola</p>
    </>
  );
};

// Single.propTypes = {
//   match: PropTypes.object,
// };
