import { GetStaticProps, NextPage } from "next";
import Default from "../components/default";
import { CardEduSelectables } from "../components/selectables";
import { eduData } from "../misc/edu";

const Edu: NextPage = ({ allEduData }: any) => {
  return (
    <Default title="Jadwal Kuliah" desc="-" tag={undefined} date={undefined}>
      <p className="mt-12 text-center text-3xl font-bold">
        Jadwal Kuliah IF 4 REG B
      </p>
      <p className="mt-0 text-center text-nord-light-accent dark:text-nord-dark-accent">
        Apes together strong.
      </p>
      <div className="postcard flex flex-col">
        <h1>Daftar Jadwal Mata Kuliah</h1>
        <blockquote>
          <p>
            Kemungkinan 50:50 ada yang berganti jam dan hari selain dari yang
            dijadwalkan.
          </p>
        </blockquote>
        <h2>Senin</h2>
        <EduSelectable data={allEduData} day="Senin" />
        <h2>Selasa</h2>
        <EduSelectable data={allEduData} day="Selasa" />
        <h2>Rabu</h2>
        <EduSelectable data={allEduData} day="Rabu" />
        <h2>Kamis</h2>
        <EduSelectable data={allEduData} day="Kamis" />
        <h2>Jum&apos;at</h2>
        <EduSelectable data={allEduData} day="Jum'at" />
      </div>
    </Default>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allEduData = eduData.sort((a: any, b: any) => {
    return a["time"] > b["time"] ? 1 : -1;
  });
  return {
    props: {
      allEduData,
    },
  };
};

function EduSelectable(props: any) {
  return (
    <div className="mx-5 my-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {props.data
        .filter((e: any) => e.day == props.day && e.mkstat == "ongoing")
        .map(({ title, day, time, lect, href, mkstat }: any, index: any) => {
          return (
            <div className="w-full cursor-pointer self-stretch" key={index}>
              <CardEduSelectables
                title={title}
                time={time}
                day={day}
                lect={lect}
                href={href}
                mkstat={mkstat}
              />
            </div>
          );
        })}
    </div>
  );
}

export default Edu;
