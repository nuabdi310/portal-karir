import { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/sefas-logo-plain.png";

function Header() {
  const location = useLocation();

  useEffect(() => {
    const navbar = document.getElementById("navbarNav");

    if (navbar?.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 border-bottom">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/jobs">
                Jobs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/application-status">
                Application Status
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
