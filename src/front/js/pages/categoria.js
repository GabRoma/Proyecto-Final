import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Productos } from "../component/producto.js";
export const Categoria = (props) => {
  const { store, actions } = useContext(Context);
  const { cat } = useParams();
  return (
    <>
      <small className=" fs-6 d-flex justify-content-center mt-3">
        En TiendaNuestra encuentras l@s mejores {cat}s al mejor precio, directo
        desde USA hasta la puerta de tu casa.
      </small>
      <hr />
      <div className="d-flex container row m-auto">
        {store.productos
          ?.filter((item) => {
            if (item.category.toLowerCase().includes(cat)) {
              return item.category.toLowerCase().includes(cat);
            } else {
              return item.keywords.toLowerCase().split(",").includes(cat);
            }
          })
          .slice(0, 20)
          .map((item, index) => (
            <div className="mb-3" style={{ width: "20%" }}>
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
          className="accordion accordion-flush border-secondary border border-3 rounded opacity-75"
          id="accordionFlushExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                ¿Qué marcas puedo encontrar en TiendaNuestra?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body lh-1">
                En TiendaNuestra encontrarás ofertas en las mejores marcas,
                tales como: <ul className="my-1">● Sony</ul>{" "}
                <ul className="my-1">● Kodak</ul>{" "}
                <ul className="my-1">● Apple</ul>
                <ul className="my-1">● Stanley</ul>
                <ul className="my-1">● Samsung</ul>
                <ul className="my-1">● Nintendo</ul>
                <ul className="my-1">● Y muchísimas más!</ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                ¿Cómo comprar preductos en TiendaNuestra desde Uruguay?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Comprar productos en TiendaNuestra es muy fácil! Solo debes
                seguir 4 simples pasos:
                <ul className="my-1">
                  1- Selecciona la oferta del producto que deseas comprar.
                </ul>
                <ul className="my-1">
                  2- La agregas al carrito, selecciona el método de envío y
                  pago.
                </ul>
                <ul className="my-1">
                  3- Ingresa tus datos, y finalizas la compra.
                </ul>
                <ul className="my-1">
                  4- Ahora solo queda esperar recibir tu increíble pedido, en
                  poco tiempo!
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
