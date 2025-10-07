import React from "react";
import { Link } from "react-router-dom";


function Bigheader(){
    return(
        <header>
       <div className="px-3 py-2 text-bg-dark border-bottom">
        <div className="container">
           <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <span className="fw-bold">MyApp</span>
            </Link>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <Link
                  to="/"
                  className="nav-link text-secondary d-flex flex-column align-items-center"
                >
                  <i className="bi bi-house-door d-block mx-auto mb-1"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="nav-link text-white d-flex flex-column align-items-center"
                >
                  <i className="bi bi-speedometer2 d-block mx-auto mb-1"></i>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/posts"
                  className="nav-link text-white d-flex flex-column align-items-center"
                >
                  <i className="bi bi-file-earmark-text d-block mx-auto mb-1"></i>
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  to="/customers"
                  className="nav-link text-white d-flex flex-column align-items-center"
                >
                  <i className="bi bi-people d-block mx-auto mb-1"></i>
                  Customers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-3 py-2 border-bottom mb-3">
        <div className="container d-flex flex-wrap justify-content-center">
          <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <Link to="/login" className="btn btn-light text-dark me-2">
              <i className="bi bi-box-arrow-in-right me-1"></i> Login
            </Link>
            <Link to="/signup" className="btn btn-primary">
              <i className="bi bi-person-plus me-1"></i> Sign-up
            </Link>
          </div>
        </div>
      </div>
    </header>
    )
}

export default Bigheader;