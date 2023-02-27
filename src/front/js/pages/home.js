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
    "iphone",
    "https://static.nationalgeographic.es/files/styles/image_3200/public/mm10052_20221117_399_cropped.jpg?w=1600&h=1600",
    "camera",
    "https://cdn.vox-cdn.com/thumbor/tSmVQUaJiqACklfq0nlxD7wKYy4=/0x0:3000x2000/1400x933/filters:focal(1260x760:1740x1240):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/71333758/jbareham_201022_ply1040_ps5_lead_0001.0.jpg",
    "video games",
    "https://www.latercera.com/resizer/u0k2syMXqh0o3eRNplgMUn5oifQ=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/ESJIB4DMQVBTVJUZN5FS2XCT34.jpg",
    "books",
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
        <div className="d-flex justify-content-center border-bottom mb-2 pb-2 ">
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

  return (
    <div>
      <div className="container">
        <div className="p-5 pt-3 rounded-3 d-flex justify-content-center text-center">
          <div className="container-fluid pt-5 pb-3">
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
      <div className="container d-flex mt-4">
        <h5 className="fw-bolder ms-3 mb-3">Consolas & Videojuegos</h5>{" "}
        <Link
          className="ms-auto"
          style={{ color: "black" }}
          to="/resultado/video games"
        >
          <p className="mb-3" style={{ fontSize: 14 }}>
            Ver todos
          </p>
        </Link>
      </div>
      <div className="d-flex container row m-auto">
        {store.productos
          ?.filter((item) =>
            item.category.toLowerCase().split(",").includes("video games")
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
      <div className="container d-flex mt-5">
        <h5 className="fw-bolder ms-3 mb-3">Libros</h5>{" "}
        <Link
          className="ms-auto"
          style={{ color: "black" }}
          to="/resultado/books"
        >
          <p className="mb-3" style={{ fontSize: 14 }}>
            Ver todos
          </p>
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
