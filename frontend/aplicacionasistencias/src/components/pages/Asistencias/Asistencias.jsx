import React from "react";

export default function Asistencias() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow rounded">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Registro de Asistencia</h2>
              <form>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Ingrese el nombre" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="apellido" placeholder="Ingrese el apellido" />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="grupo" className="form-label">Grupo</label>
                    <input type="text" className="form-control" id="grupo" placeholder="Ej: 3°B" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input type="text" className="form-control" id="id" placeholder="Número de identificación" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label d-block">Asistencia</label>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="asistencia" id="asistio" value="asistio" defaultChecked />
                    <label className="form-check-label" htmlFor="asistio">Asistió</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="asistencia" id="inasistencia" value="inasistencia" />
                    <label className="form-check-label" htmlFor="inasistencia">Inasistencia</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="asistencia" id="justificado" value="justificado" />
                    <label className="form-check-label" htmlFor="justificado">Justificado</label>
                  </div>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">Registrar Asistencia</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
