import React from 'react'

export default function Contacto() {
  return (
    <>
         <div className="w3-container" id="contact">
            <h2>Contáctanos</h2>
            <p>Comunicate con nosotros para cualquier información.</p>
            <i className="fa fa-map-marker w3-text-red" style={{"width":"30px"}}></i> Medellín, Colombia<br />
            <i className="fa fa-phone w3-text-red" style={{"width":"30px"}}></i> Phone: +57 3333333333<br />
            <i className="fa fa-envelope w3-text-red" style={{"width":"30px"}}> </i> Email: mail@mail.com<br />
            <form>
            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Nombre" required name="Name" /></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Correo" required name="Email" /></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Mensaje" required name="Message" /></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Numero celular" required name="Phone" /></p>
            <p><input className="form-check-input" type="checkbox" id="aceptoPolitica" required />
              <label className="form-check-label" htmlFor="aceptoPolitica">
                He leído y acepto la {" "}
                <a href="" target= "_blank" rel="noopener noreferrer">
                  Política de Tratamiento y Protección de Datos Personales 
                </a>
              </label>
            </p>
            <p><button className="w3-button w3-black w3-padding-large" type="submit">Enviar</button></p>
            </form>
        </div>
    </>
  )
}
