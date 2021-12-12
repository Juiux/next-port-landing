import { NextPage } from "next";
import DefaultLayout from "@layouts/default";
import Waves from "@components/waves";

const Jadwal: NextPage = (): JSX.Element => {
  return (
    <DefaultLayout
      title="Jadwal Mata Kuliah IF Unsri 3 REG"
      description="Duh."
      tag={undefined}
      date={undefined}
    >
      <article className="bg-info text-dark pt-5 pb-5">
        <div className="container">
          <p className="display-5 mb-0 mt-5 text-center">Jadwal Mata Kuliah</p>
          <p className="lead mb-3 mt-0 text-center">IF Unsri 3 REG.</p>
        </div>
      </article>
      <Waves />
      <article className="container card px-4 pt-2 pb-4 floatcard">
        <p className="h4 mb-4 text-center mt-3">Description</p>
        <blockquote>Apes together strong.</blockquote>
        <p className="m-0 p-0">
          This is a webpage containing list of daily lectures from my prod. I
          don&apos;t know why but I have a tendency to actually make stuffs like
          this.
        </p>
      </article>
      <section className="container mt-3 mb-5 card floatcard-no-mt px-4 pb-4">
        <p className="h4 mb-4 mt-4 text-center">The List</p>
        <h2>Senin</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <s>Algoritma dan Pemrograman III (08:00 - 10:30) </s>(finished)
          </li>
          <li className="list-group-item">
            <s>Pemrograman Web II (10:30 - 13:30)</s> (finished)
          </li>
        </ul>
        <h2>Selasa</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <s>Praktikum Struktur Data (08:00 - 10:30) </s>(finished)
          </li>
          <li className="list-group-item">
            <s>Probabilitas dan Statistika (10:30 - 13:30)</s> (finished)
          </li>
          <li className="list-group-item">
            Praktikum Algoritma dan Pemrograman III (13:30 - 15:30){" "}
            <a href="https://elearning211.unsri.ac.id/mod/attendance/view.php?id=154065">
              (to attendance)
            </a>
          </li>
        </ul>
        <h2>Rabu</h2>
        <ul className="list-group">
          <li className="list-group-item">Basis Data (08:00 - 10:30)</li>
          <li className="list-group-item">
            Praktikum Basis Data (10:30 - 13:30)
          </li>
          <li className="list-group-item">
            <s>Struktur Diskrit II (13:30 - 15:30)</s> (finished)
          </li>
        </ul>
        <h2>Kamis</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <s>Struktur Data (10:30 - 13:30) </s>(finished)
          </li>
        </ul>
        <h2>Jum&apos;at</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <s>Sistem Informasi (13:30 - selesai) </s>(finished)
          </li>
        </ul>
      </section>
    </DefaultLayout>
  );
};

export default Jadwal;
