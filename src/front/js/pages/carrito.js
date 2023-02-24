//carrito

import React, { useState, useEffect, useContext } from "react";
import PropTypes, { number } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import CartAmountToggle from "../component/amount";
import { CartItem } from "../component/cartItem";

export const Carrito = () => {
  const { store, actions, setStore } = useContext(Context);
  const params = useParams();
  console.log(store.carrito);

  useEffect(() => {
    actions.obtenerCarrito();
  }, []);

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
              return <CartItem key={index} {...item} />;
            })}{" "}
          </div>{" "}
        </div>{" "}
        <div className="d-block w-50">
          <div className="conteiner w-50 ms-2">
            <h5> Resumen </h5>{" "}
          </div>{" "}
          <div className="card m-2">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <p className="card-text">Productos:</p>{" "}
                <p className="card-text">$ {store.subtotal}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="card-text text-muted">Descuentos:</p>{" "}
                <p className="card-text text-muted">$ </p>
              </div>
              <div className="d-flex justify-content-between mt-5">
                <h5 className="card-text"> Total:</h5>
                <h5> $ {store.total} </h5>{" "}
              </div>{" "}
              <p className="card-text">
                <small className="text-muted">
                  Los cargos extra por envío y los cupones son aplicados al
                  momento de realizar el pago.
                </small>
              </p>
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
