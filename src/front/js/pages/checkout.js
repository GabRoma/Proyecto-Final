//checkout

import React, { useState, useEffect, useContext } from "react";
import PropTypes, { number } from "prop-types";
import { Link, useParams, NavLink } from "react-router-dom";
import { Context } from "../store/appContext";
import GooglePayButton from "@google-pay/button-react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export const Checkout = (props, item) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log(store.carrito);
  const [updateUserData, setUpdateUserData] = useState(store.userData);

  useEffect(() => {
    actions.obtenerCarrito();
    actions.getUserData(localStorage.userId);
    actions.sumCarrito();
  }, []);

  return (
    <div className="jumbotron m-2">
      <div className="title text-center">
        <h1> Checkout </h1>{" "}
      </div>{" "}
      <div className="d-flex">
        <div className="d-block w-75 p-1">
          <div className="card mb-3">
            <div className="card-header d-flex justify-content-between">
              <i
                className="fa fa-user-circle my-2"
                style={{
                  fontSize: "xx-large",
                }}
              >
                Usuario{" "}
              </i>{" "}
              <a href="/">
                <i className="fa fa-pen text-muted">
                  <u> editar información </u>{" "}
                </i>{" "}
              </a>{" "}
            </div>{" "}
            <div className="card-body my-2 p-2">
              <p> Email: {store.userData.email} </p>{" "}
              <p> Celular: {store.userData.celular} </p>{" "}
              <p> Dirección: {store.userData.direccion_de_entrega} </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="card p-4 mb-3">
            <div>
              <p> Seleccione una forma de envío </p>{" "}
            </div>{" "}
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="tipoEnvio"
                id="tipoEnvio1"
              />
              <label className="form-check-label" htmlFor="tipoEnvio1">
                Retiro en local{" "}
              </label>{" "}
            </div>{" "}
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="tipoEnvio"
                id="tipoEnvio2"
              />
              <label className="form-check-label" htmlFor="tipoEnvio2">
                Envío a domicilio{" "}
              </label>{" "}
            </div>{" "}
          </div>{" "}
          <div className="card mb-3">
            <div className="card-header d-flex justify-content-between">
              <h5> Detalles del pedido </h5>{" "}
              <a href="/carrito">
                <i className="fa fa-shopping-cart text-muted">
                  <u> ver carrito </u>{" "}
                </i>{" "}
              </a>{" "}
            </div>{" "}
            <div className="card-body">
              <table className="table text-secondary">
                <thead>
                  <tr>
                    <th scope="col"> </th> <th scope="col"> Producto </th>{" "}
                    <th scope="col"> Precio </th>{" "}
                    <th scope="col"> Cantidad </th>{" "}
                  </tr>{" "}
                </thead>{" "}
                <tbody>
                  {" "}
                  {store.carrito.map((item, index) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.imagenes}
                          className="img-fluid"
                          style={{
                            maxWidth: 70,
                            maxHeight: 70,
                          }}
                        />{" "}
                      </td>{" "}
                      <td> {item.name} </td> <td> $ {item.price} </td>{" "}
                      <td> 1 </td>{" "}
                      <td>
                        {" "}
                        {/* <i
                                              type="button"
                                              className="fa fa-solid fa-trash"
                                              onClick={() => actions.quitCarrito(item)}
                                            ></i>{" "} */}{" "}
                      </td>{" "}
                    </tr>
                  ))}{" "}
                </tbody>{" "}
              </table>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="d-block w-25 p-1">
          <div className="card mb-3">
            <div className="card-header">
              <h5> Resumen </h5>{" "}
            </div>{" "}
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <p className="card-text"> Productos: </p>{" "}
                <p className="card-text"> $ {store.subtotal} </p>{" "}
              </div>{" "}
              <div className="d-flex justify-content-between">
                <p className="card-text"> Envío: </p>{" "}
                <p className="card-text"> USD 20 </p>{" "}
              </div>{" "}
              <div className="d-flex justify-content-between">
                <p className="card-text text-muted"> $ </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="card-footer d-flex justify-content-between">
              <h5 className="card-text"> Total: </h5> <h5> $ {store.total} </h5>{" "}
            </div>{" "}
          </div>{" "}
          <div className="card p-4 mb-3">
            <form className="d-block">
              <div className="col-auto">
                <label htmlFor="inputDiscount" className="mb-2">
                  Código de Descuento / Giftcard{" "}
                </label>{" "}
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control"
                    id="inputDiscount"
                    placeholder="TUCÓDIGO"
                    style={{
                      backgroundColor: "#14141414",
                      color: "gray",
                    }}
                  />{" "}
                  <button type="submit" className="btn btn-outline-danger">
                    OK{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
            </form>{" "}
          </div>{" "}
          <div className="card">
            <div className="card-header">
              <p> Seleccione un método de pago </p>{" "}
            </div>{" "}
            <div className="card-body text-center">
              <div className="gp mb-3">
                <GooglePayButton
                  environment="TEST"
                  buttonSizeMode="fill"
                  paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                      {
                        type: "CARD",
                        parameters: {
                          allowedCardNetworks: ["VISA", "MASTERCARD"],
                          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                        },
                        tokenizationSpecification: {
                          type: "PAYMENT_GATEWAY",
                          parameters: {
                            gateway: "example",
                            gatewayMerchantId: "exampleGatewayMerchantId",
                          },
                        },
                      },
                    ],
                    merchantInfo: {
                      merchantId: "12345",
                      merchantName: "TiendaNuestra",
                    },
                    transactionInfo: {
                      totalPriceStatus: "FINAL",
                      totalPriceLabel: "Total",
                      totalPrice: "100",
                      currencyCode: "USD",
                      countryCode: "US",
                    },
                  }}
                  onLoadPaymentData={(paymentData) => {
                    console.log(
                      "TODO: send order to server",
                      paymentData.paymentMethodData
                    );
                    history.push("/confirm");
                  }}
                />{" "}
              </div>{" "}
              <div className="pp">
                <PayPalScriptProvider
                  options={{
                    "client-id":
                      "AWPAObhvjPw_04n3sa25OckhtwDPdpB0LZBmVTz5e7tFD6gNJVLcCPz-je-FXk7gqlMfJ3v6plevoM-T",
                  }}
                >
                  <PayPalButtons
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: "10",
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={async (data, actions) => {
                      const details = await actions.order.capture();
                      const name = details.payer.name.given_name;
                      alert("Transaction completed by " + name);
                    }}
                  />{" "}
                </PayPalScriptProvider>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

Checkout.propTypes = {
  match: PropTypes.object,
};
