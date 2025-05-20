import React from 'react';
import './Contacto.css';
import { Footer } from '../../common/Footer/Footer';

export default function Contacto() {
  return (
    <>
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contáctanos</h2>
        <p>Comunicate con nosotros para cualquier información.</p>
        <form>
          <div className="name-group">
            <input type="text" placeholder="Nombre" required name="Nombre" />
            <input type="text" placeholder="Apellidos" required name="Apellidos" />
          </div>

          <input type="text" placeholder="Número celular" required name="Celular" />
          <input type="email" placeholder="Correo" required name="Correo" />

          <select required>
            <option value="" disabled selected>Seleccione sede</option>
            <option value="medellin">Medellín</option>
            <option value="cali">Cali</option>
            <option value="bogota">Bogotá</option>
            <option value="pereira">Nueva sede Pereira</option>
            
            {/* más opciones */}
          </select>

          <select required>
            <option value="" disabled selected>Seleccione programa</option>
            <option value="programa1">Programa 1</option>
            <option value="programa2">Programa 2</option>
            {/* más opciones */}
          </select>

          <p className="policy-text">
            Política de Tratamiento y Protección de Datos Personales
          </p>

          <label className="checkbox-container">
            <input type="checkbox" required />
            <span className="checkmark"></span>
            He leído y acepto la Política de Tratamiento y Protección de Datos Personales.
          </label>

          <button type="submit" className="btn-submit">Enviar</button>
        </form>
      </div>

      <div className="contact-info">
        <h3>Nuestras sedes</h3>
        <div className="sede">
          <h4>Medellín</h4>
          <p>Calle 0 #00-00, Pabellón del Agua</p>
        </div>
        <div className="sede">
          <h4>Cali</h4>
          <p>Calle 1 #11-11</p>
        </div>
        <div className="sede">
          <h4>Nueva sede Pereira</h4>
          <p>Carrera 2 #22-22</p>
        </div>
        <div className="sede">
          <h4>Bogotá</h4>
          <p>Carrera 33 #33-33</p>
        </div>
        {/* Más sedes con iconos similares */}
      </div>
    </div>
    <br /><br />
    <Footer />
    </>
  );
}



