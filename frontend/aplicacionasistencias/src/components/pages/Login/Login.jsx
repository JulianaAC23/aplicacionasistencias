import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Asegúrate de importar Link
import axios from "axios";

export function Login() {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (usuario === "admin" && clave === "1234") {
      setError("");
      navigate("/home");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="container mt-3">
      <h2 className="mb-4">Iniciar Sesión</h2>
      <form onSubmit={manejarEnvio} className="card p-4 shadow">
        <div className="mb-3">
          <label className="form-label">Usuario</label>
          <input
            type="text"
            className="form-control"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            required
          />
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">
            Entrar
          </button>
          <Link to="/registro" className="btn btn-outline-secondary">
            Registrarse
          </Link>
        </div>
      </form>
    </div>
  );
}

