import { Link } from "react-router-dom";

const Navbar=()=>{

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
    <Link className="navbar-brand" to="/">Placeholder Inicio</
    Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Solicitar Prestamo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Ver prestamos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Ver hisorial</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Estados de prestamos prueba p</Link>
        </li>
        <li className="nav-item">
            <a  class="text-dark">
                <i class="fas fa-envelope fa-2x"></i>
                <span class="badge rounded-pill badge-notification bg-danger">9</span>
            </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
};

export default Navbar;