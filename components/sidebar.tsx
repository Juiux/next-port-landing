import Search from "./search";
import Selectables from "./selectables";

export default function Sidebar(props: any) {
  return (
    <div className={"sidebar " + props.className}>
      <p className="sidebar-section sticky top-0 bg-sbdark uppercase text-lg font-bold z-10">
        BLOG POSTS
      </p>
      <Search />
      {props.allPostsData.map(
        ({ id, title, date, tag, desc }: any, index: any) => (
          <div className="w-full cursor-pointer" key={index}>
            <Selectables
              id={id}
              title={title}
              date={date}
              tag={tag}
              desc={desc}
            />
          </div>
        )
      )}
    </div>
  );
}
