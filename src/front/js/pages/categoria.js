import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Productos } from "../component/producto.js";
export const Categoria = (props) => {
  const { store, actions } = useContext(Context)
  const { cat } = useParams();
  console.log(cat);
  return (
    <>
      <small className=" fs-6 d-flex justify-content-center mt-3">
        En TiendaNuestra encuentras l@s mejores {cat}s al mejor
        precio, directo desde USA hasta la puerta de tu casa.
      </small>
      <hr />
      <div className="d-flex container row m-auto">
        {store.productos?.filter(item => {
          if (cat === "books") {
            return item.category.toLowerCase().includes(cat)
          } else {
            return item.keywords.toLowerCase().split(",").includes(cat)
          }
        }).slice(0, 20).map((item, index) => (
          <div style={{ width: "20%" }}>
            <Productos
              nombre={item.name}
              imagen={item.imagenes}
              moneda={item.currency}
              price={item.price}
              sku={item.sku}
            />
          </div>
        ))}
      </div>
      <div className="container">
        Más información sobre {cat}s
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
                {cat} ?
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
                ¿Qué marcas puedo encontrar en {cat} en TiendaNuestra?
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
                {cat}, tales como: <ul className="my-1">● Sony</ul>{" "}
                <ul className="my-1">● Kodak</ul>{" "}
                <ul className="my-1">● Canon</ul>
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
                ¿Cómo comprar {cat}s en TiendaNuestra desde Uruguay?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Comprar productos en TiendaNuestra es muy fácil! Solo debes seguir
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