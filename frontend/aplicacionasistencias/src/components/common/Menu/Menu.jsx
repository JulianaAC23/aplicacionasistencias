import { Link } from "react-router-dom";
import { Login } from "../../pages/Login/Login";
export function Menu() {
  return (
    <div>
      {/*<!-- Navbar -->*/}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/home" style={{ margin: "0px" }}>
            <img
              src="../../../../src/assets/img/Logo.png"
              alt=""
              style={{ width: "13%", borderRadius: "50%", marginRight: "2%" }}
            />
            Institución Educativa
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/login">
                  Iniciar sesion
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Asistencias
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
