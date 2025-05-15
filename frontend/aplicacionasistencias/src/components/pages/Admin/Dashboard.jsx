// src/pages/Admin/Dashboard.jsx
export function Dashboard() {
  return (
    <div className="wrapper">
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#">
              <i className="fas fa-bars"></i>
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="/" className="nav-link">Inicio</a>
          </li>
        </ul>
      </nav>

      {/* Sidebar */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="/admin/dashboard" className="brand-link">
          <span className="brand-text font-weight-light">Panel Administrativo</span>
        </a>
        <div className="sidebar">
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column">
              <li className="nav-item">
                <a href="/admin/dashboard" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>Dashboard</p>
                </a>
              </li>
              {/* Aquí puedes agregar más enlaces */}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Contenido principal */}
      <div className="content-wrapper p-4">
        <div className="content-header">
          <div className="container-fluid">
            <h1 className="m-0">Bienvenido al Dashboard</h1>
          </div>
        </div>

        {/* Cards */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>120</h3>
                    <p>Estudiantes Registrados</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-user-graduate"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-6">
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>85%</h3>
                    <p>Asistencias del Día</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-6">
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>3</h3>
                    <p>Medios de Transporte Usados</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-bus-alt"></i>
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