import React from 'react';
import { Footer } from '../../common/Footer/Footer';

export default function Nosotros() {
  return (
    <>
      <section className="container py-5">
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2 className="fw-bold">NUESTRA HISTORIA</h2>
            <p className="mt-3">
              Nuestra historia comenzó con el propósito de transformar la educación mediante el uso de herramientas tecnológicas que permiten un mejor control y seguimiento del entorno escolar. Desde nuestros inicios, nos hemos enfocado en facilitar procesos para docentes y estudiantes.
            </p>
            <p>
              Hoy, nuestra aplicación permite registrar asistencias, conocer medios de transporte y analizar datos socioeconómicos de los estudiantes, aportando a una educación más segura, inclusiva y eficaz.
            </p>
            <button className="btn btn-outline-dark mt-3">Descubre más</button>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://img.freepik.com/foto-gratis/jovenes-amigos-parque_53876-46877.jpg"
              alt="Nuestra historia"
              className="img-fluid rounded"
            />
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6 text-center order-md-2">
            <img
              src="https://img.freepik.com/foto-gratis/amigos-universitarios-compartiendo-buenos-momentos_23-2149300627.jpg"
              alt="Comunidad educativa"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6 order-md-1">
            <h2 className="fw-bold">COMPROMISO CON LA COMUNIDAD</h2>
            <p className="mt-3">
              Nuestra institución trabaja con comunidades locales para entender las necesidades sociales de cada estudiante. Conocer el estrato socioeconómico y el transporte que usan los alumnos nos permite ofrecer soluciones más inclusivas.
            </p>
            <p>
              A través del análisis de datos obtenidos por nuestra app, generamos políticas que mejoran la calidad educativa, fomentan la equidad y fortalecen la conexión con padres y cuidadores.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Misión, Visión, Valores */}
      <section className="py-5 bg-light">
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
  );
}
