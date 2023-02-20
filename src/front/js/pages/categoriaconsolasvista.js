import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const VistaCatConsolas = (props) => {
  const { actions } = useContext(Context);
  console.log(props);
  //   const params = useParams();
  //   console.log(params);

  //   useEffect(() => {
  //     actions.todosLosProductos(params.theid);
  //   }, []);

  return (
    <>
      <p className="fst-italic fw-bold fs-1 text-center ">Video Consolas </p>
      <hr />
      <small className=" fs-5 mx-3 ">
        Video Consolas. En TiendaNuestra.com encuentras los mejores celulares al
        mejor precio, directo desde USA hasta la puerta de tu casa.
      </small>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card mx-5 " style={{ width: 250 }}>
            <Link to={"/singleconsolas/" + props.theid} className=" ">
              <img
                src="https://cdn.wallpapersafari.com/32/39/4K3ctN.jpg"
                className="card-img-top"
                width="50"
                height="200"
                alt="..."
              />
            </Link>

            <div className="card-body">
              <h5 className="card-title">Producto</h5>

              <p className="card-text"></p>
              {/* <Link to={"/single/"} className="btn btn-primary mx-5 " style={{ width: 80 }} > Learn </Link> */}
            </div>
            <div className="card-footer d-flex justify-content-between">
              <div className="pricetag d-flex">
                <strong>
                  <p>MONEDA</p>
                </strong>
                &nbsp;
                <strong>
                  <p>PRECIO</p>
                </strong>
                &nbsp;
                <p className="text-muted">-20%</p>
              </div>
              <div>
                <i
                  className="fas fa-shopping-cart mx-1"
                  // onClick={() => actions.addCarrito(item)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="fs-4 text-center text-secondary">
        Más información sobre Video Consolas
      </p>
      <div className="container justify-content-center ">
        <div
          class="accordion accordion-flush border-secondary border border-3 rounded opacity-75"
          id="accordionFlushExample"
        >
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                ¿Cuál es el precio promedio de los productos de la categoría
                Video Consolas ?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                El precio promedio de los productos puede variar en base a su
                calidad, tipo y otras características. El precio promedio de
                estos productos es de U$S 300.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                ¿Qué marcas puedo encontrar en Video Consolas en TiendaNuestra?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body lh-1">
                En TiendaNuestra encontrarás ofertas en las mejores marcas de
                Video Consolas, tales como: <ul className="my-1">● PS4</ul>{" "}
                <ul className="my-1">● XBOX</ul>{" "}
                <ul className="my-1">● Nintendo</ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                ¿Cómo comprar Video Consolas en TiendaNuestra desde Uruguay?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Comprar Video Consolas en TiendaNuestra es muy fácil! Solo debes
                seguir 4 simples pasos:
                <ul className="my-1">
                  1- Selecciona la oferta de Video Consolas que deseas comprar.
                </ul>
                <ul className="my-1">
                  2- Agregala al carrito y finaliza la compra.
                </ul>
                <ul className="my-1">3- Ingresa tus datos.</ul>
                <ul className="my-1">
                  4- Selecciona el método de envío y pago.
                </ul>
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
