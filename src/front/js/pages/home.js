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
    "phone",
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
          <Link
            to={"/resultado/" + images[currentIndex + 1]}
            className="wrapRed border-0 mx-3"
          >
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
          <Link
            to={"/resultado/" + images[currentIndex + 3]}
            className="wrapRed border-0 mx-3"
          >
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
              En TiendaNuestra encontraras los productos que buscas, al mejor
              precio, directo desde USA hasta la puerta de tu casa.
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
        <h5 className="fw-bolder ms-3"> Camaras </h5>{" "}
        <Link
          className="ms-auto"
          style={{ color: "black" }}
          to="/resultado/camera"
        >
          <p style={{ fontSize: 14 }}>Ver todos</p>
        </Link>
      </div>
      <div className="d-flex container row m-auto">
        {store.productos
          ?.filter((item) =>
            item.keywords.toLowerCase().split(",").includes("camera")
          )
          .slice(0, 5)
          .map((item) => (
            <div className="d-flex container " style={{ width: "20%" }}>
              <Productos
                nombre={item.name}
                imagen={item.imagenes}
                moneda={item.currency}
                price={item.price}
                sku={item.sku}
              />
            </div>
          ))}
      </div>
      <div className="container d-flex">
        <h5 className="fw-bolder ms-3 mt-5"> Celulares & accesorios</h5>{" "}
        <Link
          className="ms-auto"
          style={{ color: "black" }}
          to="/resultado/apple"
        >
          <p style={{ fontSize: 14 }}>Ver todos</p>
        </Link>
      </div>
      <div className="d-flex container row m-auto">
        {store.productos
          ?.filter(
            (item) =>
              item.keywords.toLowerCase().split(",").includes("phone") ||
              item.keywords.toLowerCase().split(",").includes("apple") ||
              item.keywords.toLowerCase().split(",").includes("tablet")
          )
          .slice(0, 5)
          .map((item) => (
            <div className="d-flex container " style={{ width: "20%" }}>
              <Productos
                nombre={item.name}
                imagen={item.imagenes}
                moneda={item.currency}
                price={item.price}
                sku={item.sku}
              />
            </div>
          ))}
      </div>
      <div className="container d-flex">
        <h5 className="fw-bolder ms-3 mt-5">Libros</h5>{" "}
        <Link
          className="ms-auto"
          style={{ color: "black" }}
          to="/resultado/books"
        >
          <p style={{ fontSize: 14 }}>Ver todos</p>
        </Link>
      </div>
      <div className="d-flex container row m-auto">
        {store.productos
          ?.filter((item) =>
            item.category.toLowerCase().split(",").includes("books")
          )
          .slice(0, 5)
          .map((item) => (
            <div className="d-flex container " style={{ width: "20%" }}>
              <Productos
                nombre={item.name}
                imagen={item.imagenes}
                moneda={item.currency}
                price={item.price}
                sku={item.sku}
              />
            </div>
          ))}
      </div>
      <Contact showPopup={showPopup} handleTogglePopup={handleTogglePopup} />
    </div>
  );
};
