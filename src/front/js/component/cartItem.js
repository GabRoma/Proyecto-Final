//Item de carrito

import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import CartAmountToggle from "../component/amount";

export const CartItem = (item) => {
  const { store, actions, setStore } = useContext(Context);
  const params = useParams();

  const [amount, setAmount] = useState(1);
  const [theprice, setPrice] = useState(item.price);
  const stock = 1000;

  const setDecrease = () => {
    let amountAux = amount - 1;
    let priceAux = item.price * amountAux;
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
    setPrice(priceAux);
    actions.actualizarCarrito({ amountAux, priceAux, id: item.sku });
  };

  const setIncrease = () => {
    let amountAux = amount + 1;
    let priceAux = item.price * amountAux;
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
    setPrice(priceAux);
    actions.actualizarCarrito({ amountAux, priceAux, id: item.sku });
  };

  return (
    <div className="card" key={item.sku}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.url} className="img-fluid rounded-start" alt="" />
        </div>{" "}
        <div className="col-md-8">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title"> {item.name} </h5>{" "}
              <i
                className="fa fa-solid fa-trash"
                onClick={() => actions.quitCarrito(item)}
              ></i>{" "}
            </div>{" "}
            <p className="card-text">
              This is a wider card with supporting text below as a natural lead
              - in to additional content.This content is a little bit longer.{" "}
            </p>{" "}
            <p className="card-text">
              <small className="text-muted">
                Tiempo de envío estimado: {item.shipping}{" "}
              </small>{" "}
            </p>{" "}
            <div className="d-flex justify-content-between">
              <CartAmountToggle
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
              />{" "}
              <p>
                <strong> $ {theprice} </strong>{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

CartItem.propTypes = {
  match: PropTypes.object,
};
