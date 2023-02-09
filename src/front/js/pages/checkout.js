//checkout

import React, { useState, useEffect, useContext } from "react";
import PropTypes, { number } from "prop-types";
import { Link, useParams, NavLink } from "react-router-dom";
import { Context } from "../store/appContext";
import { CartItem } from "../component/cartItem";

export const Checkout = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="jumbotron m-2">
      <div className="title text-center">
        <h1> Checkout </h1>{" "}
      </div>{" "}
      <div className="d-flex">
        <div className="d-block w-50 p-2">
          <div className="conteiner w-50">
            <h5> Tu orden </h5>{" "}
          </div>{" "}
          <div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Producto</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {store.carrito.map((item, index) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.url} className="img-fluid mw-10 mh-10" />
                    </td>
                    <td>{item.name}</td>
                    <td>$ {item.price}</td>
                    <td>{item.quantity}</td>
                    <td>$ {item.subtotal}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th scoope="row">Descuentos</th>
                </tr>
                <tr>
                  <th scoope="row">Envío</th>
                </tr>
                <tr>
                  <th scoope="row">Total</th>
                </tr>
              </tfoot>
            </table>
          </div>{" "}
          <div className="card">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Retiro en local
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Envío a domicilio
              </label>
            </div>
          </div>
        </div>{" "}
        <div className="d-block w-50 p-2">
          <div className="conteiner w-50">
            <h5> Datos de Envío </h5>{" "}
          </div>{" "}
          <div className="card p-2">
            <div className="card-header d-flex justify-content-between">
              <i
                className="fa fa-user-circle my-2"
                style={{ fontSize: "xx-large" }}
              >
                Usuario
              </i>
              <i class="fa fa-pen text-muted">Editar información</i>
            </div>
            <div className="card-body my-2">
              <p>Email:</p>
              <p>Celular:</p>
              <p>Dirección:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Checkout.propTypes = {
  match: PropTypes.object,
};
