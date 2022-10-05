import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar = (props) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"
        style={{ backgroundColor: "#313131" }}
      >
        <div className="container-fluid">
          <img
            src={logo}
            alt=""
            style={{ width: "2rem", marginRight: "0.5rem" }}
          />
          <Link className="navbar-brand" to="/">
            Newsflix
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link effect"
                  aria-current="page"
                  to="/business"
                  
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link effect"
                  aria-current="page"
                  to="/entertainment"
                  
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link effect"
                  aria-current="page"
                  to="/health"
                  
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link effect"
                  aria-current="page"
                  to="/science"
                  
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link effect"
                  aria-current="page"
                  to="/sports"
                  
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link effect"
                  aria-current="page"
                  to="/technology"
                  
                >
                  Technology
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
              <Link
                onClick={() => {
                  props.setQ(inputValue);
                }}
                to={`/search/${inputValue}`}
                className="btn btn-danger"
              >
                Search
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
