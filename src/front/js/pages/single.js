import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Single = () => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  const product = store.productos?.find((item) => item.sku.includes(theid));
  return (
    <>
      <div className="d-flex container mt-4">
        {product && (
          <div className="d-flex">
            <img
              src={product.imagenes}
              alt={product.name}
              style={{ maxWidth: "40%", maxHeight: "100%" }}
            />
            <div className="mt-3 ms-3">
              <h5 style={{ fontSize: 25 }}>{product.name.slice(0, 69)}...</h5>
              <p>{product.description.slice(0, 900)}...</p>
              <p>
                <strong>USD {product.price}</strong>
              </p>
              <button onClick={() => actions.addCarrito(product)}>Add to Cart</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};