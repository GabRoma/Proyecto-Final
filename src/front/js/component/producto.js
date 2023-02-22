import React, { useContext } from "react"; // tenemos que importar lo del usecontext como lo de la store, porque si la store estaba en flux e importamos el usecontext y eso, con lo de chr, planets y vehicles hacemos lo mismo. al sacar de flux elementos de usa el use context y todos sus pasos detras
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Productos = (props, nombre, imagen, precio, moneda) => {
  console.log(props.nombre);
  // console.log(precio);

  // if (props.id < 2) {
  return (
    <>
      <Link to={"/single/" + props.sku} style={{ textDecoration: "none", color: "darkgrey" }}>
        <div className="card ms-3 mb-5" style={{ width: 250, height: 440 }}>
          <img src={props.imagen} className="my-auto" style={{ maxWidth: "300px", maxHeight: "300px" }} alt="product image" />
          <div className="px-2">
            <h5 className="mb-4"> {props.nombre.slice(0, 50)} </h5>
            <div className="d-flex justify-content-between card-text">
              <strong className="fs-5 mb-2">

                {props.moneda} {props.price}
              </strong>
              <div>
                <i
                  className="fas fa-shopping-cart mx-1"
                // onClick={() => actions.addCarrito(item)}
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

//btn btn-primary btn-sm ms-2
