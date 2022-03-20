import Search from "./search";
import Selectables from "./selectables";

export default function Sidebar(props: any) {
  return (
    <div className={"sidebar shadow-lg dark:shadow-none " + props.className}>
      <p className="sidebar-header sticky top-0 support-blur:bg-sblighttp support-blur:backdrop-blur-sm support-blur:dark:bg-sbdarktp">
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
