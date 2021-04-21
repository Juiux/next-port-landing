function Jumbotron() {
  return (
    <section className="content bg-dark mt-5">
      <div className="pt-5 pb-5 text-center jbt">
        <div className="container">
          <p className="display-4 mb-3 mt-5">
            Hello! I'm <span style={{ color: "#d0e4ff" }}>Irvan</span>!
          </p>
          <p className="lead text-muted mb-5">
            Do what you want and do it well.
          </p>
        </div>
      </div>
    </section>
  );
}

function Content() {
  return (
    <section className="content">
      <div className="container">
        <div className="row gy-3 mt-1">
          <div className="col-sm-6 d-flex">
            <div className="card rounded-3 bg-dark hover-shadow flex-fill">
              <div className="card-body font-monospace p-4">
                <p className="text-center font-weight-bold m-0 mb-3">
                  Personal Info
                </p>
                <p className="mb-0">
                  Name: Irvan Malik Azantha
                  <br />
                  Nationality: Indonesia
                  <br />
                  Age: 18
                  <br />
                  Gender: Men
                  <br />
                  Religion: Islam
                  <br />
                  Hobbies:
                  <br /> - Coding
                  <br /> - Singing
                  <br /> - Playing Guitar
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card rounded-3 bg-dark hover-shadow">
              <div className="card-body font-monospace p-4">
                <p className="text-center font-weight-bold m-0 mb-3">
                  Academic Qualifications
                </p>
                <p className="mb-0">
                  - SD Negeri 58 Palembang
                  <br />
                  <span className="text-muted">&gt; (Elementary School)</span>
                  <br /> - SMP Negeri 4 Palembang
                  <br />
                  <span className="text-muted">&gt; (Junior Highschool)</span>
                  <br /> - SMA Negeri 18 Palembang
                  <br />
                  <span className="text-muted">&gt; (Senior Highschool)</span>
                  <br /> - Universitas Sriwijaya
                  <br /> | Informatics Bachelor (CSE)
                  <br />
                  <span className="text-muted">&gt; (University)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-3 mt-2">
          <div className="col-sm-12">
            <div className="card rounded-3 bg-dark hover-shadow">
              <div className="card-body font-monospace p-4">
                <p className="text-center font-weight-bold m-0 mb-3">Profile</p>
                <p className="mb-0">
                  - Diligent, hardworking, and responsive problem solver.
                  <br /> - Enjoys working with team and always encourages them
                  for better results.
                  <br /> - Open minded and always seeks for new ideas.
                  <br /> - Interactive and highly talkative.
                  <br /> - Militaristic leadership traits.
                  <br /> - Adheres to and implements the KISS principle.
                  <br /> - Jack of all trades,{" "}
                  <span style={{ color: "#d0e4ff" }}>master of all</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-3 mt-1">
          <div className="col-sm-12">
            <div className="card rounded-3 bg-dark hover-shadow">
              <div className="card-body font-monospace p-4">
                <p className="text-center font-weight-bold m-0 mb-3">Skills</p>
                <p className="mb-0">
                  <span style={{ color: "#d0e4ff" }}>Programming</span>: Java,
                  C/C++, Go, Python, Kotlin, Object-Oriented Programming,
                  Functional Programming.
                  <br />
                  <span className="text-center">---</span>
                  <br />
                  <span style={{ color: "#d0e4ff" }}>Web Development</span>:
                  HTML, CSS, JavaScript, Apache, Nginx, JSON, jQuery, Node.js,
                  React, PHP, TypeScript, Angular, CodeIgniter, Laravel,
                  WebAssembly, Bootstrap.
                  <br />
                  <span className="text-center">---</span>
                  <br />
                  <span style={{ color: "#d0e4ff" }}>Database</span>: MySQL,
                  PostgreSQL, MongoDB, Redis, Firebase.
                  <br />
                  <span className="text-center">---</span>
                  <br />
                  <span style={{ color: "#d0e4ff" }}>Media Editing</span>:
                  Inkscape, Kdenlive, FL Studio
                  <br />
                  <span className="text-center">---</span>
                  <br />
                  <span style={{ color: "#d0e4ff" }}>Others</span>: GNU/Linux,
                  Git, Docker, Demographics Research and Analysis, Social
                  Engineering.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 d-flex">
            <div className="card rounded-3 bg-dark hover-shadow flex-fill">
              <div className="card-body font-monospace p-4">
                <p className="text-center font-weight-bold m-0 mb-3">
                  Organizations
                </p>
                <p className="mb-0">
                  <span style={{ color: "#d0e4ff" }}>
                    Himpunan Mahasiswa Informatika (HMIF)
                  </span>
                  <br />| Staf Dinas Akademik Divisi PTI{" "}
                  <span className="text-muted">(2021 - now)</span>
                  <br />
                  <span className="text-center">---</span>
                  <br />
                  <span style={{ color: "#d0e4ff" }}>GNU/Weeb</span>
                  <br />| Moderator{" "}
                  <span className="text-muted">(2021 - now)</span>
                  <br />
                  <span className="text-center">---</span>
                  <br />
                  <span style={{ color: "#d0e4ff" }}>Freestoria</span>
                  <br />| Resigned{" "}
                  <span className="text-muted">(2020 - 2021)</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 d-flex">
            <div className="card rounded-3 bg-dark hover-shadow flex-fill">
              <div className="card-body font-monospace p-4">
                <p className="text-center font-weight-bold m-0 mb-3">
                  Projects
                </p>
                <p className="mb-0">
                  <span style={{ color: "#d0e4ff" }}>uwuman</span>
                  <br /> | Pacman wrapper with similar to apt commands. Targeted
                  for Ubuntu users moving to Arch or Arch-based Linux
                  distribution.
                  <br />
                  <span className="text-center">---</span>
                  <br />
                  <span style={{ color: "#d0e4ff" }}>Lappbot</span>{" "}
                  <span className="text-muted">
                    (Currently on a frozen phase)
                  </span>
                  <br /> | A Telegram userbot which can ease your way of using
                  and managing Telegram groups, channels, and/or chats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Content, Jumbotron };
