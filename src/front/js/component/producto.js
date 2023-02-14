import React, { useContext } from "react"; // tenemos que importar lo del usecontext como lo de la store, porque si la store estaba en flux e importamos el usecontext y eso, con lo de chr, planets y vehicles hacemos lo mismo. al sacar de flux elementos de usa el use context y todos sus pasos detras
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Productos = () => {
  const { actions } = useContext(Context);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card mx-5 w-50">
            <Link to={"/single/"} className=" ">
              <img
                src="https://th.bing.com/th/id/R.53ef7741e96c229809e26e09a64df0f6?rik=xQcRBT9x8pp6hA&pid=ImgRaw&r=0"
                className="card-img-top"
                width="50"
                height="200"
                alt="..."
              />
            </Link>

            <div className="card-body">
              <h5 className="card-title">Nombre de producto</h5>
              <p className="card-text">Descripcion</p>
              <p className="card-text">$95 $119 -20%</p>
              {/* <Link to={"/single/"} className="btn btn-primary mx-5 " style={{ width: 80 }} > Learn </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//btn btn-primary btn-sm ms-2
