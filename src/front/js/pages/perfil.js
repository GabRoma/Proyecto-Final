// Perfil de Usuario

import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, NavLink } from "react-router-dom";
import { Context } from "../store/appContext";

export const Perfil = (user) => {
  const { store, actions } = useContext(Context);
  const [editing, setEditing] = useState(false);
  const [updateUserData, setUpdateUserData] = useState({});

  const handleEditClick = () => {
    setEditing(true);
    // setUpdateUserData(userData);
  };

  const handleSaveClick = () => {
    setEditing(false);
    // setUpdateUserData(userData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdateUserData({ ...updateUserData, [name]: value });
  };

  useEffect(() => actions.getUserData(localStorage.userId), []);

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
              {store.userData.name}
            </i>
            {editing ? (
              <i className="fa fa-save" onClick={handleSaveClick}>
                Guardar
              </i>
            ) : (
              <i className="fa fa-pen text-muted" onClick={handleEditClick}>
                <u>editar información</u>
              </i>
            )}
          </div>
          {editing ? (
            <div className="card-body my-2 p-2 d-block">
              <>
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  name="name"
                  value={updateUserData.name}
                  onChange={handleInputChange}
                  style={{
                    backgroundColor: "transparent",
                    borderTop: "none",
                    borderRight: "none",
                    borderLeft: "none",
                    borderBottom: "1",
                    borderColor: "gray",
                  }}
                />
                <br></br>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={updateUserData.email}
                  onChange={handleInputChange}
                  style={{
                    backgroundColor: "transparent",
                    borderTop: "none",
                    borderRight: "none",
                    borderLeft: "none",
                    borderBottom: "1",
                    borderColor: "gray",
                  }}
                />
                <br></br>
                <label htmlFor="direccion_de_entrega">Address:</label>
                <input
                  type="text"
                  name="direccion_de_entrega"
                  value={updateUserData.direccion_de_entrega}
                  onChange={handleInputChange}
                  style={{
                    backgroundColor: "transparent",
                    borderTop: "none",
                    borderRight: "none",
                    borderLeft: "none",
                    borderBottom: "1",
                    borderColor: "gray",
                  }}
                />
                <br></br>
                <label htmlFor="celular">Teléfono:</label>
                <input
                  type="tel"
                  name="celular"
                  value={updateUserData.celular}
                  onChange={handleInputChange}
                  style={{
                    backgroundColor: "transparent",
                    borderTop: "none",
                    borderRight: "none",
                    borderLeft: "none",
                    borderBottom: "1",
                    borderColor: "gray",
                  }}
                />
              </>
            </div>
          ) : (
            <div className="card-body my-2 p-2">
              <p>
                Nombre completo:{" "}
                {store.userData.name + " " + store.userData.apellido}
              </p>
              <p>Correo: {store.userData.email}</p>
              <p>Teléfono: {store.userData.celular}</p>
              <p>Dirección: {store.userData.direccion_de_entrega}</p>
            </div>
          )}
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
