//Favoritos

import React, { useState, useEffect, useContext } from "react";
import PropTypes, { number } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Favoritos = (item) => {
  const { store, actions, setStore } = useContext(Context);
  const params = useParams();
  // console.log(props);
  console.log(store.favoritos);
  console.log(item.name);

  useEffect(() => {
    actions.obtenerFavorito();
  }, []);

  return (
    <div className="jumbotron m-2">
      <div className="title text-center">
        <h1> Favoritos </h1>{" "}
      </div>{" "}
      <div className="d-flex">
        <div className="d-block">
          <div>
            {" "}
            {store.favoritos.map((item, index) => {
              return (
                <div className="card w-50 m-auto" key={index}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={item.imagenes} className="img-fluid" alt="" />
                    </div>{" "}
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <h5 className="card-title">{item.name}</h5>{" "}
                          <button>
                            <i
                              className="fa fa-solid fa-trash"
                              onClick={() => actions.eliminarFavorito(item)}
                            ></i>{" "}
                          </button>
                        </div>{" "}
                        <p className="card-text">{item.description} </p>{" "}
                        <p className="card-text">
                          <small className="text-muted">
                            Tiempo de envío estimado: 15 a 20 dias{" "}
                          </small>{" "}
                        </p>{" "}
                        <div className="d-flex justify-content-between">
                          <p>
                            <u> ver más </u>{" "}
                          </p>{" "}
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
        </div>{" "}
      </div>{" "}
    </div>
  );
};

Favoritos.propTypes = {
  match: PropTypes.object,
};
