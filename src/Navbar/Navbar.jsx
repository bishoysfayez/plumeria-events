import React from "react";
import styles from "./Navbar.module.css";
import logo from '../imgs/logo.jpg'
function Navbar() {
  return (
    <>
      <nav
        className={`${styles.navbarContainer} container-fluid navbar navbar-expand-lg bg-body-tertiary`}
      >
        <div className="container-fluid d-flex flex-row align-items-between">
          <a
            href="https://www.facebook.com/profile.php?id=100069960634867"
            className="flex items-center navbar-brand"
          >
            <span className={`${styles.logoTitle}`}>
              <span className={`${styles.logoContainer} container inline`}>
                {/* <i
                  className={`bi bi-flower1  ${styles.materialSymbolsOutlined}`}
                ></i> */}

              </span>
              <img src={logo} className={`rounded-circle mr-1 px-2 ${styles.logoImage}`} alt="" srcset="" />
              Plumeria
            </span>
          </a>

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
                <a
                  className={`nav-link active ${styles.navbarLink}`}
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles.navbarLink}`} href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${styles.navbarLink} `}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gallery
                </a>
                <ul className={`dropdown-menu ${styles.dropdownNavbar}`}>
                  <li>
                    <a className={`dropdown-item`} href="#">
                      <i class="bi bi-camera-video"></i>Videos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i class="bi bi-images"></i>Photos
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i class="bi bi-facebook"></i> Our Facebook Page{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles.navbarLink}`}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
