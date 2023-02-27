import React, { useContext } from "react"; // tenemos que importar lo del usecontext como lo de la store, porque si la store estaba en flux e importamos el usecontext y eso, con lo de chr, planets y vehicles hacemos lo mismo. al sacar de flux elementos de usa el use context y todos sus pasos detras
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Productos = (props) => {
  const { actions } = useContext(Context);
  return (
    <>
      <div className="card mb-3 p-1" style={{ width: 250, height: 440 }}>
        <Link
          to={"/single/" + props.sku}
          style={{ textDecoration: "none", color: "darkgrey" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "330px",
            }}
          >
            <img
              src={props.imagen}
              className=""
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
              }}
              alt="product image"
            />
          </div>
          <div className="px-2">
            <h5 className="mb-4">{props.nombre.slice(0, 50)}</h5>
          </div>
        </Link>
        <div style={{ position: "absolute", bottom: "0", width: "100%" }}>
          <div className="d-flex justify-content-between card-text mb-2">
            <strong className="px-2 fs-5">
              {props.moneda} {props.price}
            </strong>
            <div>
              <i
                className="fas fa-shopping-cart me-3"
                onClick={() => actions.addCarrito(props)}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
