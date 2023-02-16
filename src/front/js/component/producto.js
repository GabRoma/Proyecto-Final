import React, { useContext } from "react"; // tenemos que importar lo del usecontext como lo de la store, porque si la store estaba en flux e importamos el usecontext y eso, con lo de chr, planets y vehicles hacemos lo mismo. al sacar de flux elementos de usa el use context y todos sus pasos detras
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Productos = (props, nombre, imagen, precio, moneda) => {
  const { store, actions } = useContext(Context);
  console.log(props.nombre);
  // console.log(precio);

  // if (props.id < 2) {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card mx-5 " style={{ width: 250 }}>
            <Link to={"/single/"} className=" ">
              <img
                src={props.imagen}
                className="card-img-top"
                width="50"
                height="200"
                alt="..."
              />
            </Link>

            <div className="card-body">
              <h5 className="card-title">{props.nombre}</h5>

              <p className="card-text"></p>
              {/* <Link to={"/single/"} className="btn btn-primary mx-5 " style={{ width: 80 }} > Learn </Link> */}
            </div>
            <div className="card-footer d-flex justify-content-between">
              <div className="pricetag d-flex">
                <strong>
                  <p>{props.moneda}</p>
                </strong>
                &nbsp;
                <strong>
                  <p>{props.precio}</p>
                </strong>
                &nbsp;
                <p className="text-muted">-20%</p>
              </div>
              <div>
                <i
                  className="fas fa-shopping-cart mx-1"
                  // onClick={() => actions.addCarrito(item)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  // } else {
  //   <div></div>;
  // }
};

//btn btn-primary btn-sm ms-2
