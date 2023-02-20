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
      <div className="container">
        <p className="fst-italic fw-bold fs-1 text-center ">Tarifas</p>
        <hr />
        <small className=" fs-5 mx-auto d-flex justify-content-center">
          El envío a Uruguay de tus compras realizadas en Estados Unidos a través
          de TiendaNuestra se cobra de acuerdo al peso del paquete y otros
          servicios.
        </small>
        <hr />
        <div className="container my-2 mx-auto">
          <small className="text-decoration-underline fs-5 fw-bold mx-auto my-4 ">
            COSTOS DE ENVÍO POR KILO
          </small>
          <div className=" my-2  mx-auto w-50  bg-secondary border-dark border border-3 rounded opacity-75">
            <table class="table my-0">
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
                <tr className="border-0">
                  <td>3.1 </td>
                  <td>5 </td>
                  <td>30% de descuento = U$S 15.39 x kilo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <small className=" fs-6 mx-auto fw-bold ">
            Consolidación GRATUITA: te permite comprar varios productos en una
            misma orden, viajando todos juntos sin costo, en 1 solo paquete.
          </small>
          <small className="text-decoration-underline fs-5 fw-bold my-4 mx-auto d-flex">
            COSTOS FIJOS POR ORDEN
          </small>
          <small className="mx-auto my-1">
            *Tax Interno: 9.5%: del precio de los productos. Esta tarifa es
            equivalente al impuesto que cargan los productos dentro de USA.
          </small>
          <small className="mx-auto d-flex my-1">
            *Empaque, Manejo y Seguro: Se cobran U$S2.49 por producto, hasta un
            máximo de 3 productos, por concepto de empaque, manejo y seguro de la
            mercadería.
          </small>
          <small className="mx-auto d-flex my-1">
            *Envío a Domicilio (Opcional): el envío a domicilio en todo el país
            tiene un costo de U$S 4.99.
          </small>
          <small className="text-decoration-underline fs-5 fw-bold my-4 mx-auto d-flex">
            EJEMPLO DE COMPRA - CARRITO
          </small>
          <div className="my-2  mx-auto w-50  bg-secondary border-dark border border-3 rounded opacity-75">
            <table class="table rounded">
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Costo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nike Men's Giannis Immortality</td>
                  <td> 70.69 U$S</td>
                </tr>
                <tr>
                  <td>Apple MagSafe Charger - Wirele...</td>
                  <td> 34.00 U$S</td>

                </tr>
                <tr>
                  <td >Envío a depósito</td>
                  <td >GRATIS</td>

                </tr>
                <tr>
                  <td > Factura en USA</td>
                  <td > 104.69 U$S</td>

                </tr>
                <tr>
                  <td > Tarifa TiendaNuestra (9%)</td>
                  <td > 9.42 U$S</td>

                </tr>
                <tr>
                  <td > Envío (1.497 kg)</td>
                  <td > 32.92 U$S</td>

                </tr>
                <tr>
                  <td className="p-2 fw-bold bg-secondary bg-opacity-50">Total a pagar:</td>
                  <td>147.03</td>
                </tr>
              </tbody>
            </table>
          </div>
          <small className="d-flex my-4 justify-content-center">
            *Agregando a tu carrito más de 1 producto optimizas tu orden pagando
            menos. ¡En TiendaNuestra haces todo en un solo lugar!
          </small>
        </div>
      </div>
    </>
  );
};

// Single.propTypes = {
//   match: PropTypes.object,
// };
