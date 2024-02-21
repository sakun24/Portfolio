import "./header.css";
const Header = () => {
  return (
    <header id="header">
      <div className="containter">
        <nav>
          <h2>Roth Sakun</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="header_text">
          <p>Web Developer , Mobile Developer</p>
          <br />
          <h1>Hello! I am ROTH SAKUN</h1>
          <p>
            From SETEC Institute,
            <br />
            Management Information System
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
