import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { clearAuth, getRole, apiFetch } from "./utils/api";
import {Navbar, Container,Nav} from "react-bootstrap";


function Header() {
  const role = getRole();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      if (role === "user") {
        await apiFetch("/user/logout", { method: "POST", auth: true });
      } else if (role === "vendor") {
        await apiFetch("/vendor/logout", { method: "POST", auth: true });
      } else if (role === "admin") {
        try {
          await apiFetch("/admin/logout", { method: "POST", auth: true });
        } catch (_) {}
      }
    } catch (_) {
      /* ignore */
    }
    clearAuth();
    navigate("/user/login");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          E-Commerce
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/user/login">
            User
          </Nav.Link>
          <Nav.Link as={Link} to="/vendor/login">
            Vendor
          </Nav.Link>
          <Nav.Link as={Link} to="/admin/login">
            Admin
          </Nav.Link>
        </Nav>
        {role && (
          <Nav>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>

    //header old
    // <header>
    //   <div className="px-3 py-2 text-bg-dark border-bottom">
    //     <div className="container">
    //       <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
    //         <Link
    //           to="/"
    //           className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
    //         >
    //           <span className="fw-bold">MyApp</span>
    //         </Link>

    //         <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
    //           <li>
    //             <Link
    //               to="/"
    //               className="nav-link text-secondary d-flex flex-column align-items-center"
    //             >
    //               <i className="bi bi-house-door d-block mx-auto mb-1"></i>
    //               Home
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/dashboard"
    //               className="nav-link text-white d-flex flex-column align-items-center"
    //             >
    //               <i className="bi bi-speedometer2 d-block mx-auto mb-1"></i>
    //               Dashboard
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/posts"
    //               className="nav-link text-white d-flex flex-column align-items-center"
    //             >
    //               <i className="bi bi-file-earmark-text d-block mx-auto mb-1"></i>
    //               Posts
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/customers"
    //               className="nav-link text-white d-flex flex-column align-items-center"
    //             >
    //               <i className="bi bi-people d-block mx-auto mb-1"></i>
    //               Customers
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="px-3 py-2 border-bottom mb-3">
    //     <div className="container d-flex flex-wrap justify-content-center">
    //       <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
    //         <input
    //           type="search"
    //           className="form-control"
    //           placeholder="Search..."
    //           aria-label="Search"
    //         />
    //       </form>

    //       <div className="text-end">
    //         <Link to="/login" className="btn btn-light text-dark me-2">
    //           <i className="bi bi-box-arrow-in-right me-1"></i> Login
    //         </Link>
    //         <Link to="/signup" className="btn btn-primary">
    //           <i className="bi bi-person-plus me-1"></i> Sign-up
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
}

export default Header;
