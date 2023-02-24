import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Single = (item, props) => {
  const { actions, store } = useContext(Context);
  const [added, setAdded] = useState(false);
  const params = useParams();
  console.log(params);

  const agregarItemCarrito = () => {
    actions.agregarACarrito(params.theid);
  };

  // const añadirCarrito = () => {
  //   // let store = getStore();
  //   agregarItemCarrito();
  //   //tenemos que traer el array favoritos
  //   let contenedordeelemento = {}; //necesitamos recorrer el array favorito guardarlo en  contenedordeelemento
  //   contenedordeelemento.nombresdecadaproducto = props.nombre;
  //   contenedordeelemento.id = props.id;

  //   store.carrito = [...store.carrito, contenedordeelemento];
  // };

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
  console.log("XD");
  console.log(store.productos);
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
