//el coso para poner cuántos productos querés
import React from "react";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle d-flex">
        <button
          className="decrease btn btn-outline-danger"
          onClick={() => setDecrease()}
        >
          <i className="fa fa-minus"> </i>{" "}
        </button>{" "}
        <div
          className="text-center border border-dark rounded"
          style={{
            width: 40,
          }}
        >
          <strong> {amount} </strong>{" "}
        </div>{" "}
        <button
          className="increase btn btn-outline-success"
          onClick={() => setIncrease()}
        >
          <i className="fa fa-plus"> </i>{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};

export default CartAmountToggle;
