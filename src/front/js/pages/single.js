import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Single = (item) => {
  const { actions } = useContext(Context);
  const [added, setAdded] = useState(false);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    actions.todosLosProductos(params.theid);
  }, []);

  const toggleTexto = () => {
    setAdded(!added);
  };

  function toggleClick() {
    actions.addCarrito(item);
    toggleTexto();
  }

  return (
    <>
      <div class=" mb-3 mx-auto" style={{ width: 800, height: 500 }}>
        <div class="row g-0">
          <div class="col-md-6 mx-auto w-50">
            <div class="text-center">
              <img
                src={props.imagen}
                class="my-5 mx-3 float-center rounded"
                alt="..."
                width="350"
                height="350"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="card-body my-4">
              <h5 class="card-title card-title fw-bold fs-4 text-start my-0">
                {props.nombre}{" "}
                <button
                  onClick={() => actions.addFavorito(item)}
                  type="button"
                  class="btn btn-outline-danger mx-1"
                >
                  <i class="fa fa-heart h-100 w-100"></i>
                </button>
              </h5>
              <p class="card-text fw-light fs-5 text-start my-0">Categoría</p>
              <div className="pricetag d-flex">
                <h5>
                  <strong>{props.moneda}</strong>
                </h5>
                &nbsp; &nbsp;
                <s>
                  <h5>{props.peso}</h5>
                </s>
                &nbsp; &nbsp;
                <h5 className="text-muted">-20%</h5>
              </div>
              <div
                className="conteiner fs-6 fw-bold"
                style={{ height: 80, width: 300 }}
              >
                <div>
                  <small className="text-secondary">Descripción: </small>
                  <small>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Doloremque, officiis itaque, officia voluptatum ullam.
                    </p>
                  </small>
                </div>
                <div>
                  <button
                    onClick={() => {
                      toggleClick();
                    }}
                    className="btn btn-dark w-100 my-1 fw-bold float-start"
                    type="button"
                  >
                    {" "}
                    {added ? (
                      <i className="fas fa-shopping-cart mx-1">
                        Eliminar Carrito
                      </i>
                    ) : (
                      <i className="fas fa-shopping-cart mx-1">
                        Agregar Carrito
                      </i>
                    )}
                  </button>
                </div>
                <div className="data-list d-block">
                  <small className="text-secondary">
                    {" "}
                    <i class="fa fa-circle mx-1 my-0"></i>Disponible
                  </small>
                  <br></br>
                  <small className="text-secondary ">
                    {" "}
                    Tiempo de envío estimado: 2-3 semanas
                  </small>
                  <br></br>
                  <small className="my-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </small>
                  <br></br>
                  <small>
                    <i class="fa fa-check"></i> Lorem ipsum dolor sit amet{" "}
                  </small>
                  <br></br>
                  <small>
                    <i class="fa fa-check"></i> Corporis expedita, fuga eaque
                    fugit nam{" "}
                  </small>
                  <br></br>
                  <small>
                    <i class="fa fa-check"></i> Praesentium assumenda nostrum
                    dolorem{" "}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
