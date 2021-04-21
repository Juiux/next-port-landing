import user from "./img/user.jpeg";

function Header() {
  return (
    <section>
      <nav
        className="navbar navbar-dark fixed-top"
        id="#navb"
        style={{ backgroundColor: "#222" }}
      >
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center w-100">
            <p className="m-0 ps-2 font-monospace">IrvanMA's Lair</p>
            <img src={user} alt="" width="35" />
          </div>
        </div>
      </nav>
      <nav className="sidebar font-monospace ps-3 pe-3">
        <a className="btn btn-lg btn-dark" href="#home">
          Home
        </a>
        <a className="btn btn-lg btn-dark" href="https://t.me/lapprealm">
          Channel
        </a>
        <a
          className="btn btn-lg btn-dark"
          href="https://github.com/irvanmalik48"
        >
          Github
        </a>
      </nav>
    </section>
  );
}

export default Header;
