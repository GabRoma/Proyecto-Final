//carrito

import React, { useState, useEffect, useContext } from "react";
import PropTypes, { number } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Carrito = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="jumbotron m-2">
      <div className="title text-center">
        <h1>Carrito</h1>
      </div>
      <div className="d-flex">
        <div className="d-block w-50">
          <div className="conteiner w-50">
            <h5>Tu pedido</h5>
          </div>
          <div>
            {store.carrito.map((item, index) => {
              return (
                <div className="card" key={item.id}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={item.url}
                        className="img-fluid rounded-start"
                        alt=""
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <h5 className="card-title">{item.name}</h5>
                          <i
                            className="fa fa-solid fa-trash"
                            onClick={() => actions.quitCarrito(item)}
                          ></i>
                        </div>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Tiempo de envío estimado: {item.shipping}
                          </small>
                        </p>
                        <div className="d-flex justify-content-between">
                          <input type="number" min="1" defaultValue="1"></input>
                          <p>
                            <strong>{item.price}</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="d-block w-50">
          <div className="conteiner w-50 ms-2">
            <h5>Resumen</h5>
          </div>
          <div className="card m-2">
            {/* <div className="card-header">Resumen del pedido</div> */}
            <div className="card-body">
              <p className="card-text">Productos:</p>
              <p className="card-text">Descuentos:</p>
              <h5 className="card-title">Total:</h5>
              <a href="#" className="btn btn-dark">
                Proceder al pago
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Carrito.propTypes = {
  match: PropTypes.object,
};
