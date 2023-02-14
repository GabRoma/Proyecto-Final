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
      <div class="card  mx-auto" style={{ height: 600 }}>
        <div class="row g-0 mx-auto">
          <div class="col-md-4 mx-auto my-4">
            <img
              src="https://th.bing.com/th/id/R.19b8a5afcb2dcfde3fa4416ac9dac690?rik=WHZDE7e7q5nTQA&riu=http%3a%2f%2ffactorydirectcraft.com%2fimages%2fdimg.png&ehk=OZAn9gvkv%2bQFDnAtm7ApCzdKMY%2fXIfMbmHraB5s8i%2fI%3d&risl=&pid=ImgRaw&r=0"
              class="img-fluid p-2 mx-1"
              width="900"
              height="1000"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body row d-block  ">
              <h4 class="card-title fw-bold fs-3 text-start mx-5">
                Nombre de producto{" "}
                <button
                  onClick={() => actions.addFavorito(item)}
                  type="button"
                  class="btn btn-outline-danger mx-1"
                >
                  <i class="fa fa-heart h-100 w-100"></i>
                </button>
              </h4>

              <p class="card-text mx-5 text-secondary">Descripción mínima</p>

              <h5 class="card-text mx-5 text-dark fw-bolder fs-2">
                $95 $119 -20%
              </h5>

              <p class="card-text mx-5">
                <small class="text-muted">
                  <i class="fa fa-star mx-1"></i>
                  <i class="fa fa-star mx-1"></i>
                  <i class="fa fa-star mx-1"></i>
                  <i class="fa fa-star mx-1"></i>
                  <i class="fa fa-star mx-1"></i>
                </small>
              </p>

              <div className="card  mx-5" style={{ height: 80, width: 300 }}>
                <div className="card-body">
                  <small className=" text-dark">Color</small>

                  <a
                    class="text-dark float-end my-2 text-decoration-underline fw-bold"
                    data-bs-toggle="collapse"
                    href="#multiCollapseExample1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Cambiar
                  </a>

                  <small className="text-secondary fw-bold d-block fs-6">
                    Negro
                  </small>

                  <div class="col">
                    <div
                      class="collapse multi-collapse "
                      id="multiCollapseExample1"
                      style={{ height: 90, width: 200 }}
                    >
                      <div class=" card-body mx-5 ">
                        <div class="form-check">
                          <input
                            class="form-check-input position-absolute top-100 start-0 translate-middle mx-3 my-3"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label position-absolute top-100 start-0 translate-middle mx-5 my-3 "
                            for="flexRadioDefault1"
                          >
                            Negro
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input position-absolute top-100 start-0 translate-middle mx-3 my-5"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label position-absolute top-100 start-0 translate-middle mx-5 my-5 "
                            for="flexRadioDefault1"
                          >
                            Negro
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    toggleClick();
                  }}
                  class="btn btn-dark my-3 fw-bold float-start"
                  style={{ height: 100, width: 290 }}
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
                  <i class="fa fa-circle mx-1"></i>Disponible
                </small>

                <small className="text-secondary ">
                  {" "}
                  Tiempo de envío estimado: 2-3 semanas
                </small>

                <small className="my-2">
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
