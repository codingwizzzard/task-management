import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate("/login"); // Redirect to login page 
  };
  return (
    <header className="theme-main-menu menu-overlay menu-style-one bg-white bottom-line fixed-top">
      <div className="inner-content gap-one">
        <div className="top-header position-relative">
          <div className="d-flex align-items-center justify-content-between">
            {/* Logout Button */}
            <div className="right-widget ms-auto order-lg-3">
              <ul className="d-flex align-items-center style-none">
                <li>
                  <button onClick={handleLogout} className="btn-one btn-sm me-5">
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Navigation */}
            <nav className="navbar navbar-expand-lg p0 order-lg-2">
              <button 
                className=" d-block d-lg-none" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
              >
                <span />
              </button>
              
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav align-items-lg-center">
                  <li className="d-block d-lg-none">
                    <div className="logo">
                      <Link to="/" className="d-block active">
                        <img src="images/logo/logo_01.svg" alt="logo" />
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-primary" to="/">
                      Task Management Dashboard
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
