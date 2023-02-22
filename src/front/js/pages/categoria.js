import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Categoria = (props) => {
  const { actions } = useContext(Context);
  console.log(props);
  //   const params = useParams();
  //   console.log(params);

  //   useEffect(() => {
  //     actions.todosLosProductos(params.theid);
  //   }, []);

  return (
    <>
      <p className="fst-italic fw-bold fs-1 text-center ">Calzados</p>
      <hr />
      <small className=" fs-5 mx-3 ">
        Calzados. En TiendaNuestra.com encuentras los mejores celulares al mejor
        precio, directo desde USA hasta la puerta de tu casa.
      </small>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card mx-5 " style={{ width: 250 }}>
            <Link to={"/single/" + props.theid} className=" ">
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
              <button
                onClick={() => actions.agregarACarrito(item)}
                type="button"
              >
                <i className="fas fa-shopping-cart mx-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="fs-4 text-center text-secondary">
        Más información sobre Calzados
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
                Calzados ?
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
                estos productos es de U$S 76.
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
                ¿Qué marcas puedo encontrar en Calzado en TiendaNuestra?
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
                Calzado, tales como: <ul className="my-1">● Nike</ul>{" "}
                <ul className="my-1">● Adidas</ul>{" "}
                <ul className="my-1">● Puma</ul>
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
                ¿Cómo comprar Calzado en TiendaNuestra desde Uruguay?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Comprar Calzado en TiendaNuestra es muy fácil! Solo debes seguir
                4 simples pasos:
                <ul className="my-1">
                  1- Selecciona la oferta de Calzado que deseas comprar.
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
