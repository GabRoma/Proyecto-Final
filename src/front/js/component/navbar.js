import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logito.png";
import { AuthComponent } from "./authcomponent.js";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState("");

  function handleLogout() {
    actions.logout();
    window.location.reload(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const encodedSearchTerm = encodeURIComponent(searchTerm.toLowerCase());
    window.location.href = `/resultado/${encodedSearchTerm}`;
  }

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
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
          <form
            className="search form-inline d-flex justify-content-center me-4"
            onSubmit={handleSubmit}
          >
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
              value={searchTerm}
              onChange={handleChange}
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
                  <span
                    className="notificacion"
                    style={{ right: "183px", top: "-10px" }}
                  >
                    {store.favoritos.length}
                  </span>
                </button>
                <ul className="dropdown-menu">
                  {store.favoritos.map((item) => {
                    return (
                      <li
                        className="dropdown-menu-item d-flex justify-content-between p-2"
                        key={"fav" + item.id}
                      >
                        {item.name}
                        <i
                          className="far fa-times-circle"
                          onClick={() => actions.eliminarFavorito(item)}
                        />
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
                <button
                  className="cartbtn btn p-0 dropdown-toggle mx-3"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i
                    className="fas fa-shopping-cart"
                    style={{ color: "darkgoldenrod" }}
                  ></i>
                  <span
                    className="notificacion"
                    style={{ right: "130px", top: "-10px" }}
                  >
                    {store.carrito.length}
                  </span>
                </button>
                <ul className="listaCarrito dropdown-menu">
                  {store.carrito.map((item) => {
                    return (
                      <li
                        className="dropdown-menu-item d-flex justify-content-between p-2"
                        key={"prod" + item.id}
                      >
                        {item.name}
                        <i
                          className="far fa-times-circle"
                          onClick={() => actions.eliminarDeCarrito(item)}
                        />
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
                <button
                  className="btn p-0 ms-3"
                  style={{ color: "gray" }}
                  onClick={() => (window.location.href = "/perfil")}
                >
                  <i className="fa fa-user-circle"></i>
                </button>
                <button className="log btn p-0 mx-4" style={{ color: "gray" }}>
                  <i className="fas fa-sign-out-alt" onClick={handleLogout}></i>
                  Salir
                </button>{" "}
              </div>
            </div>
          ) : (
            <div>
              <AuthComponent />
            </div>
          )}
        </div>
      </nav>
      <nav className="navbar navbar-light pt-0 border-bottom">
        <div className="container row m-auto navbarhome">
          <div className="d-flex justify-content-center col">
            <div className="dropdown">
              <Link
                to="/"
                className="btn dropdown-toggle d-flex"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="m-auto fs-6 " style={{ color: "darkgray" }}>
                  {" "}
                  Categorias{" "}
                </h5>
                <i
                  className="far fa-caret-square-down mx-2 my-1"
                  style={{ color: "darkgray" }}
                ></i>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to={"/resultado/celulares"}
                    className="dropdown-item"
                    type="button"
                  >
                    Celulares
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/resultado/calzados"}
                    className="dropdown-item"
                    type="button"
                  >
                    Calzados
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/resultado/consola"}
                    className="dropdown-item"
                    type="button"
                  >
                    Consolas
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/resultado/camera"}
                    className="dropdown-item"
                    type="button"
                  >
                    Cámaras
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/resultado/laptop"}
                    className="dropdown-item"
                    type="button"
                  >
                    Laptops
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/resultado/lentes"}
                    className="dropdown-item"
                    type="button"
                  >
                    Lentes
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/resultado/ropa"}
                    className="dropdown-item"
                    type="button"
                  >
                    Ropa
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/resultado/reloj"}
                    className="dropdown-item"
                    type="button"
                  >
                    Relojes
                  </Link>
                </li>
              </ul>
            </div>
            {/* Termina Dropdown ----------------------------------------------------------- */}
          </div>
          <div className="d-flex justify-content-center col">
            <Link to={"/espaciooferta"}>
              <h5 className="m-0 p-0 fs-6 "> OFERTAS </h5>
            </Link>
          </div>
          <div className="d-flex justify-content-center col">
            <Link to="/espaciocostoytarif">
              <h5 className="m-0 p-0 fs-6 "> Costos y tarifas </h5>
            </Link>
          </div>
          {/* Modal ---------------------------------------------------------- */}
          <div className="d-flex justify-content-center col">
            <Link to="/" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <h5 className="m-0 p-0 fs-6 ">Garantía y devoluciones</h5>
            </Link>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Garantía de Entrega
                    </h1>
                  </div>
                  <div className="modal-body">
                    <small className="fs-5 fw-bold">
                      Aseguramos la entrega de tu orden:
                    </small>
                    <small className="fs-5 d-block ">
                      Si tu pedido no llega luego de 60 días de realizada la
                      orden, te devolvemos tu dinero.
                    </small>
                    <small className="fs-5">
                      *La garantía de entrega no aplica en caso de que el
                      producto quede retenido en Aduana por razones ajenas a
                      TiendaNuestra
                    </small>
                  </div>
                  <div className="modal-footer justify-content-center">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center col">
            <Link to="/" onClick={() => handleTogglePopup(true)}>
              <h5 className="m-0 p-0 fs-6 "> Contáctanos </h5>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
