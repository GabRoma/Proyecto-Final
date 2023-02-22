import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logito.png";
import { Context } from "../store/appContext";
import { AuthComponent } from "./authcomponent";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  function handleLogout() {
    actions.logout();
    window.location.reload(false);
  }

  return (
    <nav className="navbar sticky-top pt-0">
      <div
        className="container-fluid bg-dark bg-opacity-75 text-white text-center m-0 d-flex align-items-center row"
        style={{ height: "25px" }}
      >
        <p className="m-auto" style={{ fontSize: "16px" }}>
          Envío gratis a todas las órdenes mayores a $200 por tiempo limitado!{" "}
        </p>
      </div>
      <div className="container-fluid pt-2 pb-2 d-flex justify-content-center">
        <Link
          to="/"
          className="d-flex align-items-center me-4 text-decoration-none"
        >
          <img src={logo} height="70" />
          <h1 className="tituloprincipal ps-3">TiendaNuestra</h1>
        </Link>
        <form className="search form-inline d-flex justify-content-center me-4">
          <button
            className="searchbtn btn rounded-start rounded-0 border-end-0 border pe-1"
            type="submit"
          >
            <i className="fas fa-search"></i>
          </button>
          <input
            className="searchbar form-control rounded-end rounded-0 border border-start-0 ps-1"
            style={{ width: "600px" }}
            type="search"
            placeholder="Buscar un producto"
            aria-label="Search"
          />
        </form>
        {store.estalogueado === true ? (
          <div className="ml-auto">
            <div className="dropdown d-flex">
              <button
                className="btn p-0 dropdown-toggle me-3"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  className="fas fa-heart"
                  style={{ color: "rgb(224, 24, 24)" }}
                ></i>
                <span className="notificacion" style={{ right: "135px" }}>
                  {store.favoritos.length}
                </span>
              </button>
              <ul className="dropdown-menu">
                {store.favoritos.map((item, index) => {
                  return (
                    <li key={item.id}>
                      <a className="dropdown-item" href="#">
                        {item.name}
                      </a>
                    </li>
                  );
                })}
                <li key={"f" + store.favoritos.length}>
                  <a
                    className="dropdown-item text-center text-muted"
                    href="/favoritos"
                  >
                    <u>ver todos</u>
                  </a>
                </li>
              </ul>
              <div>
                <button className="log btn p-0 mx-4">
                  <i className="fas fa-sign-out-alt" onClick={handleLogout}></i>
                  Salir
                </button>{" "}
              </div>
              <button
                className="cartbtn btn p-0 dropdown-toggle ms-3"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-shopping-cart"></i>
                <span className="notificacion" style={{ right: "-11px" }}>
                  {store.carrito.length}
                </span>
              </button>
              <ul className="listaCarrito dropdown-menu">
                {store.carrito.map((item, index) => {
                  return (
                    <li key={item.id}>
                      <a className="dropdown-item" href="#">
                        {item.name}
                      </a>
                    </li>
                  );
                })}
                <li key={"c" + store.carrito.length}>
                  <a
                    className="dropdown-item text-center text-muted"
                    href="/carrito"
                  >
                    <u>ver carrito</u>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <AuthComponent />
          </div>
        )}
        ;
      </div>
    </nav>
  );
};
