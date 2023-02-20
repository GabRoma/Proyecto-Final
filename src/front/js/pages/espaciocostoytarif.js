import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Espaciocostoytarif = (props) => {
  const { actions } = useContext(Context);
  console.log(props);
  //   const params = useParams();
  //   console.log(params);

  //   useEffect(() => {
  //     actions.todosLosProductos(params.theid);
  //   }, []);

  return (
    <>
      <p className="fst-italic fw-bold fs-1 text-center ">Tarifas</p>
      <hr />
      <small className=" fs-5 mx-3 ">
        El envío a Uruguay de tus compras realizadas en Estados Unidos a través
        de TiendaNuestra se cobra de acuerdo al peso del paquete y otros
        servicios.
      </small>
      <hr />
      <div className="container my-2 mx-auto ">
        <small className="text-decoration-underline fs-5 fw-bold mx-3 my-4 ">
          COSTOS DE ENVÍO POR KILO
        </small>
        <div className=" my-2  mx-3 w-50 justify-content-start border-secondary border border-3 rounded opacity-75">
          <table class="table">
            <thead>
              <tr className="bg-secondary opacity-75 text-black ">
                <th scope="col">Desde (kilos) </th>
                <th scope="col">Hasta (kilos) </th>
                <th scope="col">Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0.1 </td>
                <td>3</td>
                <td>U$S 21.99 x kilo</td>
              </tr>
              <tr>
                <td>3.1 </td>
                <td>5 </td>
                <td>30% de descuento = U$S 15.39 x kilo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <small className=" fs-6 mx-3 fw-bold ">
          Consolidación GRATUITA: te permite comprar varios productos en una
          misma orden, viajando todos juntos sin costo, en 1 solo paquete.
        </small>
        <small className="text-decoration-underline fs-5 fw-bold my-4 mx-3 d-flex">
          COSTOS FIJOS POR ORDEN
        </small>
        <small className="mx-3 my-1">
          *Tax Interno: 9.5%: del precio de los productos. Esta tarifa es
          equivalente al impuesto que cargan los productos dentro de USA.
        </small>
        <small className="mx-3 d-flex my-1">
          *Empaque, Manejo y Seguro: Se cobran U$S2.49 por producto, hasta un
          máximo de 3 productos, por concepto de empaque, manejo y seguro de la
          mercadería.
        </small>
        <small className="mx-3 d-flex my-1">
          *Envío a Domicilio (Opcional): el envío a domicilio en todo el país
          tiene un costo de U$S 4.99.
        </small>
        <small className="text-decoration-underline fs-5 fw-bold my-4 mx-3 d-flex">
          EJEMPLO DE COMPRA - CARRITO
        </small>
        <div className="my-2  mx-3 w-50 justify-content-start border-secondary border border-3 rounded opacity-75">
          <table class="table rounded table table-borderless ">
            <thead>
              <tr>
                <th scope="col"> </th>
                <th scope="col">Valor Unitario </th>
                <th scope="col">Valor Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>imagen</td>
                <td> U$S</td>
                <td> U$S</td>
              </tr>
              <tr>
                <td>imagen2</td>
                <td className="mx-5"> U$S</td>
                <td className="mx-5"> U$S</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  {" "}
                  <ul className="d-block">Envío a depósito</ul>
                  <ul className="d-block"> Factura en USA</ul>
                  <ul className="d-block"> Tarifa Tiendamia</ul>
                  <ul className="d-block"> Shipping Internacional</ul>
                  <ul className="d-block"> Envío (1.233 kg)</ul>
                  <ul className="d-block my-3 fw-bold bg-secondary bg-opacity-50 w-0">
                    {" "}
                    Total a pagar
                  </ul>
                </td>
                <td>
                  {" "}
                  <ul className="d-block">GRATIS</ul>
                  <ul className="d-block"> U$S</ul>
                  <ul className="d-block"> U$S</ul>
                  <ul className="d-block"> U$S</ul>
                  <ul className="d-block">U$S</ul>
                  <ul className="d-block my-3 fw-bold bg-secondary bg-opacity-50">
                    U$S
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <small className="mx-3 d-flex my-4">
          *Agregando a tu carrito más de 1 producto optimizas tu orden pagando
          menos. ¡En Tiendamia haces todo en un solo lugar!
        </small>
      </div>
    </>
  );
};

// Single.propTypes = {
//   match: PropTypes.object,
// };
