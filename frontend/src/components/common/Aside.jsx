import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Aside = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <aside className="dash-aside-navbar border-end">
      <div className="position-relative">
        <div className="logo d-md-block d-lg-flex align-items-center justify-content-center plr bottom-line pb-35">
          <Link to="/" className="text-decoration-none">
            <span className="fw-bold fs-4 text-primary">MATRIX.</span>
          </Link>
          <button className="close-btn d-block d-md-none position-absolute end-0">
            <i className="bi bi-x-circle text-white"></i>
          </button>
        </div>
        <nav className="dasboard-main-nav pt-30 pb-30 bottom-line">
          <ul className="style-none">
            <li>
              <div className="nav-title">Tasks</div>
            </li>
            <li>
              <Link
                to={"/view-task"}
                className={`d-flex w-100 align-items-center ${
                  location.pathname === "/view-task" ? "active" : ""
                }`}
              >
                <i className="bi bi-list-task me-2"></i>
                <span>My Tasks</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/create-task"}
                className={`d-flex w-100 align-items-center ${
                  location.pathname === "/create-task" ? "active" : ""
                }`}
              >
                <i className="bi bi-plus-circle me-2"></i>
                <span>Add New Tasks</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Aside;
