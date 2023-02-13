import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

// function getList() {
//     try {
//         fetch(
//                 "https://api.rainforestapi.com/request?api_key=699D0A7132274B978BBF1E9E6DD054D4&type=search&amazon_domain=amazon.com&search_term=celular", {
//                     method: "GET",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                 }
//             )
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log(data);
//             });
//         //
//     } catch (e) {
//         console.log(e);
//     }
// }
// getList();
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
            <i className="fa fa-arrow-left"> </i>{" "}
          </button>{" "}
          <button
            className="carousel-button rounded-circle border-0"
            onClick={nextSlide}
          >
            <i className="fa fa-arrow-right"> </i>{" "}
          </button>{" "}
        </div>{" "}
        <div className="carousel d-flex justify-content-center container mb-4">
          <button className="wrapRed border-0 me-3">
            <img src={images[currentIndex]} className="redondo" alt="ERROR" />
            <h4
              className="centered text-light"
              style={{
                left: 518,
              }}
            >
              {" "}
              {images[currentIndex + 1]}{" "}
            </h4>{" "}
          </button>{" "}
          <button className="wrapRed border-0">
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
              {" "}
              {images[currentIndex + 3]}{" "}
            </h4>{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <nav className="navbar navbar-light pt-0 border-bottom">
        <div className="container row m-auto navbarhome">
          <div className="d-flex justify-content-center col">
            <Link to="/">
              <h5 className="m-0 p-0 fs-6"> Producto </h5>{" "}
            </Link>{" "}
          </div>{" "}
          <div className="d-flex justify-content-center col">
            <Link to="/">
              <h5 className="m-0 p-0 fs-6"> Categorias </h5>{" "}
            </Link>{" "}
          </div>{" "}
          <div className="d-flex justify-content-center col">
            <Link to="/">
              <h5 className="m-0 p-0 fs-6"> OFERTAS </h5>{" "}
            </Link>{" "}
          </div>{" "}
          <div className="d-flex justify-content-center col">
            <Link to="/">
              <h5 className="m-0 p-0 fs-6"> Costos y tarifas </h5>{" "}
            </Link>{" "}
          </div>{" "}
          <div className="d-flex justify-content-center col">
            <Link to="/">
              <h5 className="m-0 p-0 fs-6"> Outlet </h5>{" "}
            </Link>{" "}
          </div>{" "}
          <div className="d-flex justify-content-center col">
            <Link to="/">
              <h5 className="m-0 p-0 fs-6"> Garantía y devoluciones </h5>{" "}
            </Link>{" "}
          </div>{" "}
          <div className="d-flex justify-content-center col">
            <Link to="/">
              <h5 className="m-0 p-0 fs-6"> Contáctanos </h5>{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </nav>{" "}
      <div className="container">
        <div className="p-5 pt-3 rounded-3 d-flex justify-content-center text-center">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold"> TiendaNuestra </h1>{" "}
            <p
              className="fs-6 m-auto"
              style={{
                width: "450px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla quam
              velit, vulputate eu pharetra nec, mattis ac neque.{" "}
            </p>{" "}
            <button
              className="btn bg-dark bg-opacity-75 text-light fs-6 ps-4 pe-4 pt-2 pb-2"
              type="button"
            >
              DESCUENTOS{" "}
            </button>{" "}
            <button
              className="m-3 btn btn-light border-2 border-dark fw-bolder text-muted fs-6 ps-4 pe-4 pt-2 pb-2"
              type="button"
            >
              PRODUCTOS{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <Carousel />
      <div className="container">
        <div className="container my-5 d-flex">
          <h5 className="fw-bolder ms-5"> Productos destacados! </h5>{" "}
          <Link
            className="ms-auto"
            style={{
              color: "black",
            }}
            to="/"
          >
            <p
              style={{
                fontSize: 14,
              }}
            >
              {" "}
              Ver todos{" "}
            </p>{" "}
          </Link>{" "}
        </div>{" "}
        <div className="carousel d-flex justify-content-center container mb-4">
          <button className="border-0 me-3">
            {" "}
            {/* <img src= className="redondo" alt="ERROR" /> */}{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
