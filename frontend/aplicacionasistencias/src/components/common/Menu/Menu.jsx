import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthProvider";

export function Menu() {
  let { user, logout } = useAuth();

  console.log("info user", user);

  // Puedes definir una imagen por defecto si el usuario no tiene una
  const defaultProfileImage = "https://via.placeholder.com/40";

  return (
    <div>
      {/*<!-- Navbar -->*/}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/home" style={{ margin: "0px" }}>
            <img
              src="/img/logo1-removebg-preview.png"
              alt=""
              style={{ width: "16%", borderRadius: "50%", marginRight: "2%" }}
            />
            Gestión Educativa
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
                  Iniciar sesión
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">
                  Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nosotros">
                  Nosotros
                </Link>
              </li>

              {/* Mostrar imagen de perfil si hay usuario */}
              {user ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle d-flex align-items-center"
                    href="#"
                    id="perfilDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={user.fotoPerfil || defaultProfileImage}
                      alt="Perfil"
                      className="rounded-circle"
                      style={{ width: "40px", height: "40px", objectFit: "cover" }}
                    />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="perfilDropdown">
                    <li>
                      <button className="dropdown-item" onClick={logout}>
                        Cerrar sesión
                      </button>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

