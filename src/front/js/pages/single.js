import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Single = (item) => {
  const { actions } = useContext(Context);
  const [added, setAdded] = useState(false);
  const params = useParams();
  console.log(params);

  const agregarItemCarrito = () => {
    actions.agregarACarrito(params.theid, storage.getItem("userId"));
  };

  useEffect(() => {
    actions.todosLosProductos(params.theid);
  }, []);

  const toggleTexto = () => {
    setAdded(!added);
  };

  function toggleClick() {
    actions.addCarrito(item);
    toggleTexto();
  }

  const product = store.productos?.find((item) => item.sku.includes(theid));
  console.log("XD");
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

            <h5>{product.name}</h5>
            <p>{product.description}</p>
            <p>
              <strong>USD {product.price}</strong>
            </p>
            <button
              onClick={() => actions.addFavorito(item)}
              type="button"
              class="btn btn-outline-danger mx-1"
            >
              <i class="fa fa-heart h-100 w-100"></i>
            </button>
            <button
              onClick={() => {
                toggleClick();
                agregarItemCarrito();
              }}
              className="btn btn-dark w-100 my-1 fw-bold float-start"
              type="button"
            >
              {" "}
              {added ? (
                <i className="fas fa-shopping-cart mx-1">Eliminar Carrito</i>
              ) : (
                <i className="fas fa-shopping-cart mx-1">Agregar Carrito</i>
              )}
            </button>
          </div>
        )}
      </div>
    </>
  );
};
