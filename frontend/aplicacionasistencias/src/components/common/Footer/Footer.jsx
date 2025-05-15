import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto pt-4 pb-3">
      <div className="container">
        <div className="row" style={{"justifyContent": "space-between"}}>
          {/* Información de la Institución */}
          <div className="col-md-4 mb-3">
            <h5>Institución Educativa Educativa</h5>
            <p>
              Promoviendo el aprendizaje y el acceso al conocimiento
              para todos los estudiantes.
            </p>
          </div>
          {/* Redes sociales */}
          <div className="col-md-4 mb-3">
            <h5>Síguenos</h5>
            <Link to="https://www.facebook.com/" className="text-white me-3">
              <img src="../../../../src/assets/img/facebook_fanpages.png" alt="Facebook" style={{"width":"15%"}}/>
            </Link>
            <Link to="https://www.instagram.com/" className="text-white me-3">
              <img src="../../../../src/assets/img/instagram.webp" alt="Instagram" style={{"width":"15%"}}/>
            </Link>
            <Link to="https://x.com/?lang=es" className="text-white">
              <img src="../../../../src/assets/img/x.webp" alt="X" style={{"width":"19%"}}/>
            </Link>
          </div>
        </div>

        <hr className="border-light" />

        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Biblioteca Educativa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
