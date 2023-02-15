//checkout

import React, { useState, useEffect, useContext } from "react";
import PropTypes, { number } from "prop-types";
import { Link, useParams, NavLink } from "react-router-dom";
import { Context } from "../store/appContext";

export const Checkout = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="jumbotron m-2">
      <div className="title text-center">
        <h1> Checkout </h1>{" "}
      </div>{" "}
      <div className="d-flex">
        <div className="d-block w-75 p-1">
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
          <div className="card p-4 mb-3">
            <div>
              <p>Seleccione una forma de envío</p>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="tipoEnvio"
                id="tipoEnvio1"
              />
              <label class="form-check-label" for="tipoEnvio1">
                Retiro en local
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="tipoEnvio"
                id="tipoEnvio2"
              />
              <label class="form-check-label" for="tipoEnvio2">
                Envío a domicilio
              </label>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-header d-flex justify-content-between">
              <h5> Detalles del pedido </h5>{" "}
              <a href="/carrito">
                <i className="fa fa-shopping-cart text-muted">
                  <u>ver carrito</u>
                </i>
              </a>
            </div>{" "}
            <div className="card-body">
              <table class="table text-secondary">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {store.carrito.map((item, index) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.url}
                          className="img-fluid"
                          style={{ maxWidth: 70, maxHeight: 70 }}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>$ {item.price}</td>
                      <td>{item.quantity}</td>
                      <td>$ {item.subtotal}</td>
                      <td>
                        {" "}
                        <i
                          className="fa fa-solid fa-trash"
                          onClick={() => actions.quitCarrito(item)}
                        ></i>{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>{" "}
        </div>{" "}
        <div className="d-block w-25 p-1">
          <div className="card mb-3">
            <div className="card-header">
              <h5> Resumen </h5>{" "}
            </div>{" "}
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <p className="card-text">Productos:</p>{" "}
                <p className="card-text">$ {store.subtotal}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="card-text">Envío:</p>{" "}
                <p className="card-text">$ </p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="card-text text-muted">Descuentos:</p>{" "}
                <p className="card-text text-muted">$ </p>
              </div>
            </div>{" "}
            <div className="card-footer d-flex justify-content-between">
              <h5 className="card-text"> Total:</h5>
              <h5> $ {store.total} </h5>{" "}
            </div>{" "}
          </div>{" "}
          <div className="card p-4 mb-3">
            <form class="d-block">
              <div class="col-auto">
                <label for="inputDiscount" className="mb-2">
                  Código de Descuento/Giftcard
                </label>
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control"
                    id="inputDiscount"
                    placeholder="TUCÓDIGO"
                    style={{ backgroundColor: "#14141414", color: "gray" }}
                  />
                  <button type="submit" class="btn btn-outline-danger">
                    OK
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="card">
            <div className="card-body">
              <p>Seleccione un método de pago</p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="tipoPago"
                  id="tipoPago1"
                />
                <label className="form-check-label" for="tipoPago1">
                  <i className="fab fa-cc-paypal">PayPal</i>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="tipoPago"
                  id="tipoPago2"
                />
                <label className="form-check-label" for="tipoPago2">
                  <i className="fas fa-handshake">MercadoPago</i>
                </label>
              </div>
            </div>
            <div className="card-footer">
              <button className="btn btn-dark w-100">Completar compra</button>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

Checkout.propTypes = {
  match: PropTypes.object,
};
