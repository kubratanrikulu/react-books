import navRoutes from "./navRoutes";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
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
            
              <div className="navbar-nav">
              {navRoutes.map((route, index) => (
                <a
                  className="nav-link"
                  key={index}
                  onClick={() => {
                    navigate(route.path);
                  }}
                >
                  {route.label}
                </a>
              ))}
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
