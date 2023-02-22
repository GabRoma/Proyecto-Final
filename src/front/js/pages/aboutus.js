import React from "react";
import logo from "../../img/logito.png";
export const Aboutus = () => {
    return (
        <div className="d-flex row justify-content-center align-item-center mt-3">
            <div style={{ width: "50%", textAlign: "center" }}>
                <h1 style={{ fontWeight: "bold" }}>About Us</h1>
                <img
                    className="mt-0"
                    src={logo}
                    alt="Company Logo"
                    style={{ width: "300px", margin: "30px 0" }}
                />
                <h3 style={{ fontWeight: "500" }}>¿Quiénes somos?</h3>
                <p style={{ fontSize: "20px", lineHeight: "1.5" }}>
                    TiendaNuestra es un eCommerce que se especializa en proveer a los clientes en Uruguay acceso a una amplia variedad de productos que se encuentran en Amazon, una de las plataformas de comercio electrónico más grandes del mundo.
                    La empresa se encarga de seleccionar cuidadosamente los productos más populares y demandados por los consumidores uruguayos, y los lista en su sitio web. Los clientes pueden navegar por una amplia gama de categorías de productos, desde electrónica y ropa hasta artículos de hogar y jardín, y hacer sus compras en línea a través de la plataforma de TiendaNuestra.
                </p>
                <h3 style={{ fontWeight: "500" }}>¿Cómo funciona?</h3>
                <p style={{ fontSize: "20px", lineHeight: "1.5" }}>
                    Una vez que se realiza el pedido, TiendaNuestra se encarga de todo el proceso de envío y entrega del producto. Los clientes pueden elegir entre varias opciones de envío, y la empresa trabaja con los mejores proveedores de logística y mensajería para asegurarse de que los productos lleguen a su destino en perfectas condiciones y en el plazo prometido.
                </p>
                <h3 style={{ fontWeight: "500" }}>Soporte técnico</h3>
                <p style={{ fontSize: "20px", lineHeight: "1.5" }}>
                    TiendaNuestra ofrece a los clientes un servicio al cliente excepcional, con representantes disponibles para responder cualquier pregunta o inquietud que puedan tener. La empresa se enorgullece de proporcionar una experiencia de compra segura y conveniente, con precios competitivos y una selección de productos de alta calidad.
                </p>
            </div>
        </div>
    );
};
