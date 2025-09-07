import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto pt-4 pb-3">
      <div className="container">
        <div className="row" style={{ justifyContent: "space-between" }}>
          {/* Información de la Institución */}
          <div className="col-md-4 mb-3">
            <h5>Institución Educativa Educativa</h5>
            <p>
              Nuestra plataforma de gestión educativa permite un seguimiento detallado de la asistencia estudiantil, facilitando la intervención oportuna y mejorando el rendimiento académico.
              <br /><br />
              También recopilamos información sobre los medios de transporte utilizados por los estudiantes.
            </p>
          </div>

          {/* Líneas de Atención */}
          <div className="col-md-4 mb-3">
            <h4>Líneas de Atención</h4>
            <p>
              Medellín: 0000000000<br /><br />
              Pereira: 1111111111<br /><br />
              Cali: 2222222222<br /><br />
              Bogotá: 3333333333
            </p>
          </div>

          {/* Redes Sociales y Políticas */}
          <div className="col-md-4 mb-3">
            <h5>Síguenos</h5>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <img src="/img/facebook.webp" alt="Facebook" style={{ width: "15%" }} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <img src="/img/instagram.webp" alt="Instagram" style={{ width: "15%" }} />
            </a>
            <a href="https://x.com/?lang=es" target="_blank" rel="noopener noreferrer" className="text-white">
              <img src="/img/x.webp" alt="X" style={{ width: "19%" }} />
            </a>

            <h5 className="mt-4">Políticas</h5>
            {/* Este es un ejemplo de ruta interna */}
            <p>
              <Link to="/politica-privacidad" className="text-white">
                Política de Privacidad
              </Link>
              <br />
              <Link to="/politica-accesibilidad" className="text-white">
                Política de Accesibilidad
              </Link>
            </p>
          </div>
        </div>

        <hr className="border-light" />

        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Educativa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}





