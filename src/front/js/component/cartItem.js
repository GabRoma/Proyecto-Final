//Item de carrito

import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import CartAmountToggle from "../component/amount";

export const CartItem = (item) => {
  const { store, actions } = useContext(Context);
  console.log(store.carrito);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async () => {
    await onDelete(item.producto_sku);
    setIsDeleted(true);
  };
  // const eliminarItemCarrito = () => {
  //   actions.eliminarDeCarrito(params.theid, storage.getItem("userId"));
  // };

  const [amount, setAmount] = useState(1);
  const [theprice, setPrice] = useState(item.price);
  const stock = 1000;

  const setDecrease = () => {
    let amountAux = amount - 1;
    let priceAux = item.price * amountAux;
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
    setPrice(priceAux);
    actions.actualizarCarrito({
      amountAux,
      priceAux,
      id: item.sku,
    });
  };

  const setIncrease = () => {
    let amountAux = amount + 1;
    let priceAux = item.price * amountAux;
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
    setPrice(priceAux);
    actions.actualizarCarrito({
      amountAux,
      priceAux,
      id: item.sku,
    });
  };

  return (
    <div className="card border border-light mb-2" key={item.id}>
      <div className="row g-0">
        <div className="col-md-4 m-auto">
          <img
            src={item.imagenes}
            className="img-fluid p-1 ps-2 d-flex align-item-center"
            alt=""
          />
        </div>{" "}
        <div className="col-md-8">
          <div className="card-body pb-1">
            <h4>{item.name}</h4>
            <p style={{ color: "gray" }} className="card-text">
              {item.description.slice(0, 150)}{" "}
            </p>{" "}
            <p className="card-text">
              <small className="text-muted">
                Tiempo de entrega estimado: 15 a 20 dias{" "}
              </small>{" "}
            </p>{" "}
            <div className="d-flex justify-content-between ">
              <button
                className="border-0"
                style={{ background: "transparent" }}
                onClick={() => {
                  actions.eliminarDeCarrito(item.producto_sku);
                  setTimeout(() => {
                    window.location.reload();
                  }, 1000);
                }}
              >
                <i
                  class="fas fa-trash-alt"
                  style={{ color: "red", background: "transparent" }}
                ></i>
              </button>
              <CartAmountToggle
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
              />{" "}
              <p>
                <strong> $ {item.price} </strong>{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
