import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Single = (item, props) => {
  const { actions, store } = useContext(Context);
  const [added, setAdded] = useState(false);
  const params = useParams();
  console.log(params);

  const agregarItemCarrito = () => {
    actions.agregarACarrito(params.theid, localStorage.getItem("userId"));
  };

  const agregarItemFavoritos = () => {
    actions.agregarFavorito(params.theid, localStorage.getItem("userId"));
  };

  useEffect(() => {
    actions.todosLosProductos(params.theid);
  }, []);

  const toggleTexto = () => {
    setAdded(!added);
  };

  function toggleClick() {
    actions.agregarACarrito(item);
    toggleTexto();
  }

  const product = store.productos?.find((item) =>
    item.sku.includes(params.theid)
  );
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
              <strong className="fs-2 d-block">USD {product.price}</strong>
              <button
                onClick={() => {
                  toggleClick();
                  if (added) {
                    actions.eliminarDeCarrito(product.sku);
                    window.location.reload();
                  } else {
                    agregarItemCarrito();
                  }
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
              <button
                onClick={() => agregarItemFavoritos()}
                type="button"
                class="btn btn-outline-danger mx-1 w-100"
              >
                <i class="fa fa-heart h-100 w-100"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
