import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto pt-4 pb-3">
      <div className="container">
        <div className="row" style={{ "justifyContent": "space-between" }}>
          {/* Información de la Institución */}
          <div className="col-md-4 mb-3">
            <h5>Institución Educativa Educativa</h5>
            <p>
              Nuestra plataforma de gestión educativa permite un seguimiento detallado de la asistencia estudiantil, facilitando la intervención oportuna y mejorando el rendimiento académico. Con herramientas intuitivas y accesibles, docentes y directivos pueden monitorear la permanencia escolar de forma eficiente.
              <br /><br />
              Además del control de asistencia, recopilamos y analizamos información sobre los medios de transporte utilizados por los estudiantes. Esto nos ayuda a comprender mejor sus trayectos diarios y proponer soluciones para una movilidad más segura y eficiente.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h4>Líneas de Atención</h4>
            <p>
              Medellín: 0000000000
              <hr />
              Pereira: 1111111111
              <hr />
              Cali: 2222222222
              <hr />
              Bogotá: 3333333333
            </p>
          </div>
          {/* Redes sociales */}
          <div className="col-md-4 mb-3">
            <h5>Síguenos</h5>
            <Link to="https://www.facebook.com/" className="text-white me-3">
              <img src="../../../../src/assets/img/facebook_fanpages.png" alt="Facebook" style={{ "width": "15%" }} />
            </Link>
            <Link to="https://www.instagram.com/" className="text-white me-3">
              <img src="../../../../src/assets/img/instagram.webp" alt="Instagram" style={{ "width": "15%" }} />
            </Link>
            <Link to="https://x.com/?lang=es" className="text-white">
              <img src="../../../../src/assets/img/x.webp" alt="X" style={{ "width": "19%" }} />
            </Link>
            <h5>Politícas</h5>
            <p>
              <strong>Política de Privacidad:</strong>
              <br />
              Respetamos la privacidad de nuestros usuarios. Toda la información recolectada sobre estudiantes, incluyendo datos de asistencia, transporte y estrato socioeconómico, será tratada de forma confidencial y usada únicamente para fines educativos y administrativos autorizados.
            </p>
            <p>
              <strong>Política de Accesibilidad:</strong>
              <br />
              Nos comprometemos a ofrecer una plataforma accesible para todos los usuarios, sin importar su nivel tecnológico o condición socioeconómica.
            </p>
          </div>
        </div>

        <hr className="border-light" />

        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()}  Educativa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
