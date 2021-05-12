export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container">
        <a className="navbar-brand m-0 p-0" href="/">
          IrvanMA's Lair
        </a>
        <button
          className="navbar-toggler p-0"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <p className="btn btn-dark shadow-0 m-0 p-2">. . .</p>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mt-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
