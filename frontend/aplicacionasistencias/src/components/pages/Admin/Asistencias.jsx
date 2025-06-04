import { useAuth } from "../../../context/AuthProvider";
import { useState } from "react";

export default function Asistencias() {
  const { user } = useAuth();

  // Lista de estudiantes simulada
  const estudiantes = [
    { id: 1, nombre: "Juan Pérez", identificacion: "123456" },
    { id: 2, nombre: "María López", identificacion: "234567" },
    { id: 3, nombre: "Carlos Gómez", identificacion: "345678" }
  ];

  // Estado para guardar selecciones
  const [asistencias, setAsistencias] = useState({});

  const handleChange = (id, field, value) => {
    setAsistencias((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Asistencias registradas:", asistencias);
    alert("Asistencias registradas exitosamente");
    // Aquí puedes hacer POST a tu backend
  };

  return (
    <div className="container py-5">
      <div className="bg-white shadow p-4 rounded-4 border border-light">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-dark">Registro de Asistencia</h2>
          <hr className="border-3 rounded-pill border-danger" />
        </div>

        <div className="d-flex justify-content-between mb-3">
          <p><strong>Docente:</strong> {user.username}</p>
          <div>
            <p><strong>Grupo:</strong> __________</p>
            <p><strong>Horario:</strong> __________</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead className="table-secondary text-center">
                <tr>
                  <th>Nombre</th>
                  <th>Identificación</th>
                  <th>Asistencia</th>
                  <th>Medio de Transporte</th>
                  <th>Estrato</th>
                </tr>
              </thead>
              <tbody>
                {estudiantes.map((estudiante) => (
                  <tr key={estudiante.id}>
                    <td>{estudiante.nombre}</td>
                    <td>{estudiante.identificacion}</td>
                        <td className="text-center">
                        <select
                          className="form-select"
                          value={asistencias[estudiante.id]?.asistencia || ""}
                          onChange={(e) => handleChange(estudiante.id, "asistencia", e.target.value)}
                        >
                          <option value="">Seleccione</option>
                          <option value="asistio">Asistió</option>
                          <option value="inasistencia">Inasistencia</option>
                          <option value="justificado">Justificado</option>
                        </select>
                      </td>


                    <td className="text-center">
                      {["moto", "bus", "metro", "pie", "bicicleta", "carro"].map((medio) => (
                        <div className="form-check form-check-inline gap-2" key={medio}>
                          <input
                            className="form-check-input"
                            type="radio"
                            name={`transporte-${estudiante.id}`}
                            value={medio}
                            checked={asistencias[estudiante.id]?.transporte === medio}
                            onChange={() => handleChange(estudiante.id, "transporte", medio)}
                          />
                          <label className="form-check-label">
                            {medio}
                          </label>
                        </div>
                      ))}
                    </td>
                    <td className="text-center">
                      {[1, 2, 3, 4, 5, 6].map((nivel) => (
                        <div className="form-check form-check-inline" key={nivel}>
                          <input
                            className="form-check-input"
                            type="radio"
                            name={`estrato-${estudiante.id}`}
                            value={nivel}
                            checked={asistencias[estudiante.id]?.estrato === String(nivel)}
                            onChange={() => handleChange(estudiante.id, "estrato", String(nivel))}
                          />
                          <label className="form-check-label">{nivel}</label>
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-lg btn-danger px-5 fw-bold">
              Registrar Asistencias
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


