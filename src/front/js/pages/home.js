import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Productos } from "../component/producto.js";
import Contact from "../component/contact";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg",
    "Celulares",
    "https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/e5853518-be79-4fcc-afe4-6d2df175de53/el-mejor-calzado-informal-de-nike-para-usar-todos-los-días.jpg",
    "Calzados",
    "https://media.gq.com.mx/photos/61e70ca25def32c5619cef06/4:3/w_712,h_534,c_limit/Lenovo%20Yoga%20Slim%207%20Pro.jpg",
    "Laptops",
    "https://www.apple.com/newsroom/images/product/watch/standard/applewatch_series_3_two_loop_full.jpg.og.jpg?202302031731",
    "Relojes",
  ];

  const previousSlide = () => {
    const lastIndex = images.length - 4;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 4;

    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = images.length - 4;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 4;

    setCurrentIndex(index);
  };

  return (
    <div className="d-flex justify-content-center border-bottom">
      <div className="container">
        <div className="d-flex justify-content-center border-bottom mb-4 pb-4 ">
          <button
            className="carousel-button rounded-circle border-0 me-3"
            onClick={previousSlide}
          >
            <i className="fa fa-arrow-left"> </i>
          </button>
          <button
            className="carousel-button rounded-circle border-0"
            onClick={nextSlide}
          >
            <i className="fa fa-arrow-right"> </i>
          </button>
        </div>
        <div className="carousel d-flex justify-content-center container mb-4">
          <Link to={"/categoria/" + images[currentIndex + 1]} className="wrapRed border-0 mx-3">
            <img src={images[currentIndex]} className="redondo" alt="ERROR" />
            <h4
              className="centered text-light"
              style={{
                left: 518,
              }}
            >

              {images[currentIndex + 1]}
            </h4>
          </Link>
          <Link to={"/categoria/" + images[currentIndex + 3]} className="wrapRed border-0 mx-3">
            <img
              src={images[currentIndex + 2]}
              className="redondo"
              alt="ERROR"
            />
            <h4
              className="centered text-light "
              style={{
                left: 780,
              }}
            >

              {images[currentIndex + 3]}
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};
export const Home = () => {
  const { store, actions } = useContext(Context);
  const [showPopup, setShowPopup] = useState(false);
  const handleTogglePopup = (value) => {
    setShowPopup(value);
  };

  console.log(store.favoritos);
  console.log(store.productos);
  // console.log(store.productos[0]?.title);

  return (
    <div>
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
                <h5 className="m-auto fs-6 " style={{ color: "darkgray" }}> Categorias </h5>
                <i class="far fa-caret-square-down mx-2 my-1" style={{ color: "darkgray" }}></i>
              </Link>
              <ul class="dropdown-menu">
                <li>
                  <Link
                    to={"/categoria/celulares"}
                    class="dropdown-item"
                    type="button"
                  >
                    Celulares
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/categoria/calzados"}
                    class="dropdown-item"
                    type="button"
                  >
                    Calzados
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/categoria/consola"}
                    class="dropdown-item"
                    type="button"
                  >
                    Consolas
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/categoria/Camera"}
                    class="dropdown-item"
                    type="button"
                  >
                    Cámaras
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/categoria/laptop"}
                    class="dropdown-item"
                    type="button"
                  >
                    Laptops
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/categoria/lentes"}
                    class="dropdown-item"
                    type="button"
                  >
                    Lentes
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/categoria/ropa"}
                    class="dropdown-item"
                    type="button"
                  >
                    Ropa
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/categoria/reloj"}
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
              <h5 className="m-0 p-0 fs-6 ">

                Garantía y devoluciones
              </h5>
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
          {/* Termina Modal ------------------------------------------------------------- */}
          {/* <div className="d-flex justify-content-center col">
            <Link to="/">
              <h5 className="m-0 p-0 fs-6"> Garantía y devoluciones </h5>
            </Link>
          </div> */}
          <div className="d-flex justify-content-center col">
            <Link to="/" onClick={() => handleTogglePopup(true)}>
              <h5 className="m-0 p-0 fs-6 "> Contáctanos </h5>
            </Link>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="p-5 pt-3 rounded-3 d-flex justify-content-center text-center">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold"> TiendaNuestra </h1>
            <p
              className="fs-6 m-auto"
              style={{
                width: "450px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla quam
              velit, vulputate eu pharetra nec, mattis ac neque.
            </p>
            <Link
              to={"/espaciodescuento"}
              className="btn bg-dark bg-opacity-75 text-light fs-6 ps-4 pe-4 pt-2 pb-2"
              type="button"
            >
              DESCUENTOS
            </Link>
            <Link
              to={"/espacioproductos"}
              className="m-3 btn btn-light border-2 border-dark fw-bolder text-muted fs-6 ps-4 pe-4 pt-2 pb-2"
              type="button"
            >
              PRODUCTOS
            </Link>
          </div>
        </div>
      </div>
      <Carousel />
      <div className="container">
        <div className="container mt-5 d-flex justify-content-center">
          <h5 className="fw-bolder display-5 mb-5"> Productos destacados! </h5>
        </div>
      </div>
      <div className="container d-flex">
        <h5 className="fw-bolder ms-3"> Camaras </h5> <Link className="ms-auto" style={{ color: "black" }} to="/categoria/camera">
          <p style={{ fontSize: 14 }}>Ver todos</p>
        </Link>
      </div>
      <div className="d-flex container">
        {store.productos?.filter(item => item.keywords.toLowerCase().split(",").includes("camera")).slice(0, 5).map((item, index) => (
          <Productos
            key={index}
            id={index + 1}
            nombre={item.name}
            imagen={item.imagenes}
            moneda={item.currency}
            price={item.price}
            sku={item.sku}
          />
        ))}
      </div>
      <div className="d-flex container">
        {store.productos?.slice(6, 11).map((item, index) => (
          <Productos
            key={index}
            id={index + 1}
            nombre={item.name}
            imagen={item.imagenes}
            moneda={item.currency}
            price={item.price}
            sku={item.sku}
          />
        ))}
      </div>
      <Contact showPopup={showPopup} handleTogglePopup={handleTogglePopup} />
    </div>
  );
};
