import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Single = (item) => {
  const { actions } = useContext(Context);
  const [added, setAdded] = useState(false);

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
                src="https://th.bing.com/th/id/R.19b8a5afcb2dcfde3fa4416ac9dac690?rik=WHZDE7e7q5nTQA&riu=http%3a%2f%2ffactorydirectcraft.com%2fimages%2fdimg.png&ehk=OZAn9gvkv%2bQFDnAtm7ApCzdKMY%2fXIfMbmHraB5s8i%2fI%3d&risl=&pid=ImgRaw&r=0"
                class="my-5 mx-3 float-center rounded"
                alt="..."
                width="350"
                height="350"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="card-body my-4">
              <h5 class="card-title card-title fw-bold fs-4 text-start mx-1">
                Nombre de producto{" "}
                <button
                  onClick={() => actions.addFavorito(item)}
                  type="button"
                  class="btn btn-outline-danger mx-1"
                >
                  <i class="fa fa-heart h-100 w-100"></i>
                </button>
              </h5>
              <p class="card-text fw-light fs-5 text-start mx-1">Categoría</p>
              <h5 class="card-text mx-1 text-dark fw-bolder fs-2">
                $95 $119 -20%
              </h5>

              <p class="card-text mx-1">
                <small class="text-muted">
                  <i class="fa fa-star mx-1"></i>
                  <i class="fa fa-star mx-1"></i>
                  <i class="fa fa-star mx-1"></i>
                  <i class="fa fa-star mx-1"></i>
                  <i class="fa fa-star mx-1"></i>
                </small>
              </p>

              <div
                className="card rounded fs-6 fw-bold"
                style={{ height: 80, width: 300 }}
              >
                <small className=" text-secondary mx-2 my-2 ">
                  Descripción:{" "}
                </small>

                <button
                  onClick={() => {
                    toggleClick();
                  }}
                  class="btn btn-dark my-5 fw-bold float-start"
                  style={{ height: 90, width: 290 }}
                  type="button"
                >
                  {" "}
                  {added ? (
                    <i class="fas fa-shopping-cart mx-1">Eliminar Carrito</i>
                  ) : (
                    <i class="fas fa-shopping-cart mx-1">Agregar Carrito</i>
                  )}
                </button>

                <small className="text-secondary">
                  {" "}
                  <i class="fa fa-circle mx-1 my-0"></i>Disponible
                </small>

                <small className="text-secondary ">
                  {" "}
                  Tiempo de envío estimado: 2-3 semanas
                </small>

                <small className="my-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </small>
                <small>
                  <i class="fa fa-check"></i> Lorem ipsum dolor sit amet{" "}
                </small>
                <small>
                  <i class="fa fa-check"></i> Corporis expedita, fuga eaque
                  fugit nam{" "}
                </small>
                <small>
                  <i class="fa fa-check"></i> Praesentium assumenda nostrum
                  dolorem{" "}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Single.propTypes = {
//   match: PropTypes.object,
// };
