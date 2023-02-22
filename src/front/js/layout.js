import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Carrito } from "./pages/carrito";
import { Checkout } from "./pages/checkout";
import { Favoritos } from "./pages/favoritos";
import injectContext from "./store/appContext";
import { Politica } from "./pages/politica";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Aboutus } from "./pages/aboutus";
import { Tos } from "./pages/tos";
import { Brands } from "./pages/brands";
import { Categoria } from "./pages/categoria";
import { Espacioproductos } from "./pages/espacioproductos";
import { Espaciodescuento } from "./pages/espaciodescuento";
import { Espaciocostoytarif } from "./pages/espaciocostoytarif";
import { Espaciooferta } from "./pages/espaciooferta";
//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Aboutus />} path="/aboutus" />
            <Route element={<Tos />} path="/tos" />
            <Route element={<Politica />} path="/politica" />
            <Route element={<Brands />} path="/brands" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Espacioproductos />} path="/espacioproductos" />
            <Route element={<Espaciodescuento />} path="/espaciodescuento" />
            <Route element={<Espaciooferta />} path="/espaciooferta" />
            <Route element={<Espaciocostoytarif />} path="/espaciocostoytarif" />
            <Route element={<Categoria />} path="/categoria/:cat" />
            <Route element={<Carrito />} path="/carrito" />
            <Route element={<Checkout />} path="/checkout" />
            <Route element={<Favoritos />} path="/favoritos" />
            <Route element={<h1> Not found! </h1>} />
          </Routes>{" "}
          <Footer />
        </ScrollToTop>{" "}
      </BrowserRouter>{" "}
    </div>
  );
};

export default injectContext(Layout);
