//Favoritos

import React, { useState, useEffect, useContext } from "react";
import PropTypes, { number } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Favoritos = (item, sku) => {
  const { store, actions, setStore } = useContext(Context);
  const params = useParams();
  // console.log(props);
  console.log(store.favoritos);
  console.log(item.name);

  useEffect(() => {
    actions.obtenerFavorito();
    // actions.eliminarFav();
  }, []);

  return (
    <div className="jumbotron m-2">
      <div className="title text-center">
        <h1> Favoritos </h1>{" "}
      </div>{" "}
      <div className="d-flex justify-content-center">
        <div>
          {" "}
          {store.favoritos.map((item, index) => {
            return (
              <div className="card w-50 m-auto mb-3" key={index}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.imagenes}
                      className="img-fluid p-1"
                      style={{ height: "100%" }}
                      alt=""
                    />
                  </div>{" "}
                  <div className="col-md-8">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h5 className="card-title">{item.name}</h5>{" "}
                        <i
                          type="button"
                          className="fas fa-trash-alt"
                          onClick={() => {
                            actions.eliminarFavorito(item.producto_sku);
                            setTimeout(() => {
                              window.location.reload();
                            }, 1000);
                          }}
                        ></i>{" "}
                      </div>{" "}
                      <p className="card-text">
                        {item.description.slice(0, 500)}{" "}
                      </p>{" "}
                      <p className="card-text">
                        <small className="text-muted">
                          Tiempo de envío estimado: 15 a 20 dias{" "}
                        </small>{" "}
                      </p>{" "}
                      <div className="d-flex justify-content-between">
                        {/* <p>
                            <u> ver más </u>{" "}
                          </p>{" "} */}
                        <h5>
                          <strong> $ {item.price} </strong>{" "}
                        </h5>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            );
          })}{" "}
        </div>{" "}
      </div>
    </div>
  );
};

Favoritos.propTypes = {
  match: PropTypes.object,
};
