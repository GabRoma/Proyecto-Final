//carrito

import React, { useState, useEffect, useContext } from "react";
import PropTypes, { number } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import CartAmountToggle from "../component/amount";
import { CartItem } from "../component/cartItem";

export const Carrito = (props) => {
  const { store, actions, setStore } = useContext(Context);
  const params = useParams();

  return (
    <div className="jumbotron m-2">
      <div className="title text-center">
        <h1> Carrito </h1>{" "}
      </div>{" "}
      <div className="d-flex">
        <div className="d-block w-50">
          <div className="conteiner w-50">
            <h5> Tu pedido </h5>{" "}
          </div>{" "}
          <div>
            {" "}
            {store.carrito.map((item, index) => {
              return <CartItem key={item.id} {...item} />;
            })}{" "}
          </div>{" "}
        </div>{" "}
        <div className="d-block w-50">
          <div className="conteiner w-50 ms-2">
            <h5> Resumen </h5>{" "}
          </div>{" "}
          <div className="card m-2">
            <div className="card-body">
              <p className="card-text"> Productos: </p>{" "}
              {/* <ul>
                            {" "}
                            {store.carrito.map((item, index) => (
                              <li key={index}>
                                Nombre: {item.name} - Cantidad: {item.amount} - Precio: ${" "}
                                {item.price} - Subtotal: $ {item.price * item.quantity}{" "}
                              </li>
                            ))}{" "}
                          </ul>{" "} */}{" "}
              <p className="card-text text-muted"> Descuentos: </p>{" "}
              <div className="mt-5 mb-5">
                <h5 className="card-text"> Total: $ {store.total} </h5>{" "}
              </div>{" "}
              <a href="/checkout" className="btn btn-dark w-100">
                Proceder al pago{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

Carrito.propTypes = {
  match: PropTypes.object,
};
