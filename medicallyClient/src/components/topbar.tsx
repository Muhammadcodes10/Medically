function TopBar() {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            {" "}
            <strong>
              {" "}
              <a href="#">Medico🩺</a>
            </strong>
          </div>
          <ul className="nav-links">
            <li>
              <a target="_blank" className="links">
                About
              </a>
            </li>
            <li>
              <a href="#" className="links">
                Client Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="links">
                Faqs
              </a>
            </li>
            <li>
              <a href="#" className="links">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default TopBar;