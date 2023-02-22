import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Single = () => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  const product = store.productos?.find((item) => item.sku.includes(theid));
  console.log("XD")
  console.log(store.productos);
  return (
    <>
      <div className="d-flex container">
        {product && (
          <div className="d-flex">
            <img
              src={product.imagenes}
              alt={product.name}
              style={{ maxWidth: "50%", maxHeight: "100%" }}
            />
            div
            <h5>{product.name}</h5>
            <p>{product.description}</p>
            <p>
              <strong>USD {product.price}</strong>
            </p>
            <button onClick={() => actions.addCarrito(product)}>Add to Cart</button>
          </div>
        )}
      </div>
    </>
  );
};