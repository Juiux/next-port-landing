import { GetStaticProps, NextPage } from "next";
import Default from "../components/default";
import { CardEduSelectables } from "../components/selectables";
import { getSortedPostsData } from "../lib";
import { eduData } from "../misc/edu";

const Edu: NextPage = ({ allPostsData, allEduData }: any) => {
  return (
    <Default
      title="Jadwal Kuliah"
      desc="-"
      tag={undefined}
      date={undefined}
      allPostsData={allPostsData}
    >
      <p className="text-3xl text-center font-bold mt-12">
        Jadwal Kuliah IF 4 REG B
      </p>
      <p className="text-center text-accentlight dark:text-accent mt-0">
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
        <h2>Jum'at</h2>
        <EduSelectable data={allEduData} day="Jum'at" />
      </div>
    </Default>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData("");
  const allEduData = eduData.sort((a: any, b: any) => {
    return a["time"] > b["time"] ? 1 : -1;
  });
  return {
    props: {
      allPostsData,
      allEduData,
    },
  };
};

function EduSelectable(props: any) {
  return (
    <div className="mx-5 my-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
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
