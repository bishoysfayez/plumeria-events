import React from "react";
import styles from "./NavbarNoScroller.module.css";
import logo from "../imgs/logo.jpg";

function NavbarNoScroller() {
  return (
    <>
      <nav
        className={`${styles.navbarContainer} container-fluid navbar navbar-expand-lg bg-body-tertiary `}
      >
        <div
          className={`${styles.navbarContainerDiv} container-fluid d-flex flex-row align-items-between  `}
        >
          <a
            href={"/"}
            className={`${styles.navbarLogoLink} flex items-center navbar-brand`}
          >
            <span className={`${styles.logoTitle}`}>
              <span
                className={`${styles.logoContainer} container inline`}
              ></span>
              <img
                src={logo}
                className={`rounded-circle mr-1 px-2 ${styles.logoImage}`}
                alt=""
                srcset=""
              />
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
                  href={"/"}
                  className={`nav-link active ${styles.navbarLink}`}
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={` active nav-link ${styles.navbarLink}`}
                  offset={-80}
                  spy={true}
                  smooth={true}
                  duration={1000}
                  href={"scrollToPortfolio"}
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={` active nav-link ${styles.navbarLink}`}
                  href={"scrollToAbout"}
                >
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${styles.navbarLink} `}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="#"
                >
                  Gallery
                </a>
                <ul className={`dropdown-menu ${styles.dropdownNavbar}`}>
                  <li>
                    <a className="dropdown-item" href={"/photoGallery"}>
                      <i class="bi bi-images"></i>Photos
                    </a>
                  </li>

                  <li>
                    <a className={`dropdown-item`} href="#">
                      <i class="bi bi-camera-video"></i>Videos
                    </a>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.facebook.com/profile.php?id=100069960634867"
                    >
                      <i class="bi bi-facebook"></i> Our Facebook Page{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  href={"/contact"}
                  className={`nav-link ${styles.navbarLink}`}
                >
                  Contact
                </a>
              </li>

              <li className="ms-3">
                <a
                  className="text-muted"
                  href="https://www.instagram.com/plumeria_for_events/?hl=en"
                >
                  <i class="bi bi-twitter"></i>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-muted"
                  href="https://www.instagram.com/plumeria_for_events/?hl=en"
                >
                  <i class="bi bi-instagram"></i>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-muted"
                  href="https://www.facebook.com/profile.php?id=100069960634867"
                >
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarNoScroller;
