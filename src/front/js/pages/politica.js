import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Politica = () => {
    return (
        <div className="container w-50">
            <h1 >Política de Privacidad</h1>
            <p >En TiendaNuestra, nos comprometemos a proteger su privacidad. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos su información personal cuando utiliza nuestro sitio web.</p>
            <p className="fw-bolder text-center">Información que recopilamos</p>
            <p >Cuando utiliza nuestro sitio web, podemos recopilar información personal que usted nos proporciona directamente, como su nombre, dirección, número de teléfono y dirección de correo electrónico. También podemos recopilar información automáticamente a través de cookies u otras tecnologías de seguimiento cuando visita nuestro sitio web, como información sobre su dirección IP, su tipo de navegador, su sistema operativo y su actividad en nuestro sitio web.</p>
            <p className="fw-bolder text-center">Uso de la información</p>
            <p className="fw-bolder mb-1 fst-italic">
                Podemos usar la información que recopilamos para los siguientes fines:
            </p>
            <ul>
                <li>Procesamiento de pedidos y envío de productos.</li>
                <li>Comunicarnos con usted sobre su pedido o sobre nuestros productos y servicios.</li>
                <li>Proporcionarle información sobre promociones, descuentos y ofertas especiales.</li>
                <li>Mejorar nuestro sitio web y nuestros productos y servicios.</li>
                <li>Detectar y prevenir fraudes y actividades ilegales.</li>
            </ul>
            <p className="fw-bolder text-center">Seguridad de la información</p>
            <p >
                Nos tomamos en serio la seguridad de su información personal y utilizamos medidas de seguridad razonables para protegerla contra el acceso no autorizado, la divulgación o la modificación. Sin embargo, no podemos garantizar que la transmisión de información a través de Internet sea completamente segura.
            </p>
            <p className="fw-bolder text-center">Divulgación de información a terceros</p>
            <p className="fw-bolder mb-1 fst-italic">
                No compartimos su información personal con terceros, excepto en los siguientes casos:
            </p>
            <ul>
                <li>Para procesar y enviar pedidos.</li>
                <li>Con proveedores de servicios externos que nos ayudan a proporcionar nuestros productos y servicios, como servicios de envío o servicios de marketing.</li>
                <li>En respuesta a una solicitud legal o una orden judicial.</li>
            </ul>

            <p className="fw-bolder text-center">Cambios en esta política</p>
            <p >
                Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento sin previo aviso. Le recomendamos que revise regularmente esta política para obtener la versión más actualizada.
            </p>
            <p className="fw-bolder text-center">Preguntas y comentarios</p>
            <p >
                Si tiene alguna pregunta o comentario sobre esta Política de Privacidad, no dude en ponerse en contacto con nosotros a través de nuestro formulario de contacto en línea.
            </p>
        </div >
    );
};
