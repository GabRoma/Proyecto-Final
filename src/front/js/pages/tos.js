import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Tos = () => {
  return (
    <div className="container w-50">
      <h1 className="text-center my-5"> Terms of Service </h1>
      <ol>
        <li>
          <p>
            Política de privacidad: Entendemos la importancia de su privacidad y nos comprometemos a protegerla. Para obtener más información sobre cómo recopilamos, usamos y protegemos su información personal, consulte nuestra Política de Privacidad.
          </p>
        </li>
        <li><p>
          Propiedad intelectual: Todos los contenidos, incluidos el diseño, las imágenes, el software y los textos, son propiedad exclusiva de TiendaNuestra y están protegidos por las leyes de propiedad intelectual. No se permite la reproducción, distribución o modificación de ninguno de estos contenidos sin el consentimiento previo por escrito de TiendaNuestra.</p>
        </li>
        <li><p>
          Compras en línea: Al realizar una compra en línea, usted acepta que los productos y servicios adquiridos son solo para su uso personal y no para fines comerciales. Todos los precios están sujetos a cambios sin previo aviso.</p>
        </li>
        <li><p>Envío y entrega: TiendaNuestra se esfuerza por brindar un servicio de envío y entrega rápido y confiable. Sin embargo, no nos hacemos responsables de los retrasos en la entrega que puedan ser causados por factores fuera de nuestro control.</p></li>
        <li><p>Devoluciones y reembolsos: Aceptamos devoluciones y reembolsos en productos dañados o defectuosos, o en casos donde se haya recibido un producto equivocado. Para obtener más información sobre nuestras políticas de devolución y reembolso, consulte nuestra Política de Devoluciones y Reembolsos.</p></li>
        <li><p>Uso del sitio web: Al usar este sitio web, acepta no usarlo para fines ilegales o inapropiados. También acepta no interferir con el funcionamiento normal del sitio web o intentar acceder a áreas no autorizadas del sitio web.</p></li>
        <li><p>Modificaciones de los términos y condiciones: Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento sin previo aviso. Por favor, revise regularmente esta página para obtener la versión más actualizada de los términos y condiciones de uso.</p></li>
      </ol>
    </div>
  );
};
