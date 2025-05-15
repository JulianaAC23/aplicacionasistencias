import { Link } from "react-router-dom";
import { Footer } from "../../common/Footer/Footer";
import "./Home.css";

export function Home() {
  return (
    <>
      {/* Hero */}
      <header className="hero-section">
        <div className="container">
          <h1 className="display-4 fw-bold">
            Bienvenidos a Nuestra Institución
          </h1>
          <p className="lead">
            Formando estudiantes con valores, conocimiento y futuro.
          </p>
        </div>
      </header>

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

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>¿Eres docente?</h2>
          <p className="mb-4">
            Ingresa al sistema para registrar la asistencia de tus estudiantes.
          </p>
          <Link to="">Ir al registro de asistencia</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}