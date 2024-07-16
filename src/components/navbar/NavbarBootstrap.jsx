import { Link } from "react-router-dom";
/* import "./Navbar.css"; */

function Navegacion() {
  return (
    <>
      <nav
        className="navbar navbar-expand-md bg-dark border-bottom border-body sticky-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <span className="navbar-brand romaara-nav">Mi Tienda</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-md-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-disabled="true"
                  to="/register"
                >
                  Registrarse
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Ingresar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*       <section>
        <Outlet />
      </section> */}
    </>
  );
}

export default Navegacion;
