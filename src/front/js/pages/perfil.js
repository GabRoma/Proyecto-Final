//Perfil de Usuario

import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, NavLink } from "react-router-dom";
import { Context } from "../store/appContext";

export const Perfil = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <>
      <div className="jumbotron w-75 m-auto">
        <div className="title text-center">
          <h1> Mi Cuenta </h1>{" "}
        </div>{" "}
        <div className="card mb-3">
          <div className="card-header d-flex justify-content-between">
            <i
              className="fa fa-user-circle my-2"
              style={{ fontSize: "xx-large" }}
            >
              Usuario
            </i>
            <a href="/">
              <i className="fa fa-pen text-muted">
                <u>editar información</u>
              </i>
            </a>
          </div>
          <div className="card-body my-2 p-2">
            <p>Email:</p>
            <p>Celular:</p>
            <p>Dirección:</p>
          </div>
        </div>
      </div>
      <div className="card-table border border-light rounded w-75 m-auto">
        <div className="card-header">
          <h5>Mis Compras</h5>
        </div>
        <div className="card-body">
          <table className="table text-secondary">
            <thead>
              <tr>
                <th scope="col">Orden #</th>
                <th scope="col">Fecha</th>
                <th scope="col">Costo</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0000</td>
                <td>15/02/23</td>
                <td>$0000</td>
                <td>Entregado</td>
              </tr>
              <tr>
                <td>0001</td>
                <td>16/02/23</td>
                <td>$0000</td>
                <td>En camino</td>
              </tr>
              <tr>
                <td>0002</td>
                <td>17/02/23</td>
                <td>$0000</td>
                <td>En depósito</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
