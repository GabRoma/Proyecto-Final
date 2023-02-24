import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logito.png";
import logo2 from "../../img/logito2.png";
import { AuthComponent } from "./authcomponent.js";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState("");

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
          <form className="search form-inline d-flex justify-content-center me-4" onSubmit={handleSubmit}>
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
                <span className="notificacion" style={{ right: "140px" }}>
                  {store.favoritos.length}
                </span>
              </button>
              <ul className="dropdown-menu">
                {store.favoritos.map((item, index) => (
                  <div className="row" key={index}>
                    <button className="list-group-item btn btn-outline-primary w-75 mx-auto">
                      {item.nombresdecadaproducto} {index.id}{" "}
                      <button
                        className="btn btn-secondary rounded opacity-10 mx-0 "
                        type="button"
                        id="eliminar"
                        onClick={() => actions.eliminarFavorito(item)}
                      >
                        Borrar
                      </button>{" "}
                    </button>
                  </div>
                ))}

                <li key={"f" + store.favoritos.length}>
                  <a
                    className="dropdown-item text-center text-muted"
                    href="/favoritos"
                  >
                    <u>ver todos</u>
                  </a>
                </li>
              </ul>
              <AuthComponent />
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
                {store.carrito.map((item, index) => (
                  <div className="row" key={index}>
                    <button className="list-group-item btn btn-outline-primary w-75 mx-auto">
                      {item.nombresdecadaproducto} {index.id}{" "}
                      <button
                        className="btn btn-secondary rounded opacity-10 mx-0 "
                        type="button"
                        id="eliminar"
                        onClick={() => actions.eliminarDeCarrito(item)}
                      >
                        Borrar
                      </button>{" "}
                    </button>
                  </div>
                ))}
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
        </div>
      </nav>
      <nav className="navbar navbar-light pt-0 border-bottom">
        <div className="container row m-auto navbarhome">
          <div className="d-flex justify-content-center col">
            <div class="dropdown">
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
                  class="far fa-caret-square-down mx-2 my-1"
                  style={{ color: "darkgray" }}
                ></i>
              </Link>
              <ul class="dropdown-menu">
                <li>
                  <Link
                    to={"/resultado/celulares"}
                    class="dropdown-item"
                    type="button"
                  >
                    Celulares
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/resultado/calzados"}
                    class="dropdown-item"
                    type="button"
                  >
                    Calzados
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/resultado/consola"}
                    class="dropdown-item"
                    type="button"
                  >
                    Consolas
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/resultado/camera"}
                    class="dropdown-item"
                    type="button"
                  >
                    Cámaras
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/resultado/laptop"}
                    class="dropdown-item"
                    type="button"
                  >
                    Laptops
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/resultado/lentes"}
                    class="dropdown-item"
                    type="button"
                  >
                    Lentes
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/resultado/ropa"}
                    class="dropdown-item"
                    type="button"
                  >
                    Ropa
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/resultado/reloj"}
                    class="dropdown-item"
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
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Garantía de Entrega
                    </h1>
                  </div>
                  <div class="modal-body">
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
                  <div class="modal-footer justify-content-center">
                    <button
                      type="button"
                      class="btn btn-secondary"
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
