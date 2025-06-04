import { useAuth } from "../../../context/AuthProvider";
import Figure_1 from "../../../assets/img/Figure_1.png";
import Figure_2 from "../../../assets/img/Figure_2.png";
import Figure_3 from "../../../assets/img/Figure_3.png";

export function Dashboard() {
  let { user } = useAuth();

  return (
    <div className="wrapper">
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
          </li>
        </ul>
      </nav>

      {/* Sidebar */}
      <aside className="main-sidebar bg-danger elevation-4">
        <div className="sidebar">
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column">
              <li className="nav-item">
                <a href="/admin/dashboard" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>Dashboard</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>


      {/* Contenido principal */}
      <div className="content-wrapper p-4">
        <div className="content-header">
          <div className="container-fluid">
            <h1 className="m-0">Bienvenido al Dashboard {user.username}</h1>
          </div>
        </div>

        {/* Tarjetas resumen */}
        <section className="content">
          <div className="container-fluid">
            <div className="row text-center mb-4">
              <div className="col-md-3">
                <div className="card bg-primary text-white">
                  <div className="card-body">
                    <h3>25</h3>
                    <p>Estudiantes</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-warning text-white">
                  <div className="card-body">
                    <h3>21</h3>
                    <p>Presentes</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-success text-white">
                  <div className="card-body">
                    <h3>4</h3>
                    <p>Ausentes</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-info text-white">
                  <div className="card-body">
                    <h3>21</h3>
                    <p>Llegadas Tarde</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gráficos inferiores */}
            <div className="row">
              <div className="col-md-4">
                <div className="card h-100">
                  <div className="card-header text-center">
                    <strong>Estado - Últimos 7 días</strong>
                  </div>
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <img
                      src={Figure_1}
                      alt="grafico1"
                      className="img-fluid d-block mx-auto"
                      style={{ maxHeight: "250px", objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100">
                  <div className="card-header text-center">
                    <strong>Medio de Transporte</strong>
                  </div>
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <img
                      src={Figure_2}
                      alt="grafico2"
                      className="img-fluid d-block mx-auto"
                      style={{ maxHeight: "250px", objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100">
                  <div className="card-header text-center">
                    <strong>Estado / Transporte</strong>
                  </div>
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <img
                      src={Figure_3}
                      alt="grafico3"
                      className="img-fluid d-block mx-auto"
                      style={{ maxHeight: "250px", objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
            </div>


          </div>
        </section>
      </div>
    </div>
  );
}

