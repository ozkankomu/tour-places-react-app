import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarr">
      <div className="contact">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <div id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
                <a
                  className="nav-link"
                  href="https://github.com/ozkankomu"
                  target="_blanked"
                >
                  About
                </a>
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/ozkankomu/"
                  target="_blanked"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
