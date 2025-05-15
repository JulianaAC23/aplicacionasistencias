import React from 'react'
import { Footer } from '../../common/Footer/Footer';

export default function Nosotros() {
  return (
    <>
      <div className="w3-row-padding" id="about">
        <div className="w3-col l4 12">
          <h3>🏫 Nosotros</h3>
          <br />
          <h6><strong> Descubre las Estadisticas sobre Asistencias y Medios de Transporte</strong><br />
            Nuestra Institución Educativa está comprometida con la formación integral de sus estudiantes, promoviendo valores, conocimiento y responsabilidad. Como parte de nuestra evolución tecnológica, hemos desarrollado una aplicación moderna y eficiente que permite a los docentes registrar de manera rápida y precisa la asistencia diaria de los estudiantes, así como el medio de transporte que utilizan para llegar a la institución.

            Esta herramienta no solo optimiza el control académico y administrativo, sino que también mejora la seguridad y el seguimiento de cada estudiante, brindando información útil para padres, docentes y directivos. Con esta iniciativa, reafirmamos nuestro compromiso con la innovación educativa y el bienestar de nuestra comunidad escolar.
          </h6>
        </div>
        <div className="w3-col l8 12">
          {/* <!-- Image of location/map --> */}
          <img src="https://img.freepik.com/foto-gratis/jovenes-amigos-parque_53876-46877.jpg" className="w3-image w3-greyscale" style={{ "width": "100%" }} />
        </div>
      </div>

       {/* Información */}
      <section className="py-5 info-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <h4>Misión</h4>
              <p>
                Brindar una educación integral que prepare a nuestros alumnos
                para enfrentar los retos del mañana.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h4>Visión</h4>
              <p>
                Ser una institución reconocida por su excelencia académica y
                compromiso con la comunidad.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h4>Valores</h4>
              <p>
                Respeto, responsabilidad, solidaridad y compromiso con la
                educación.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
