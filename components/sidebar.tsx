import Search from "./search";

export default function Sidebar(props: any) {
  return (
    <div className={"sidebar shadow-lg dark:shadow-none " + props.className}>
      <p className="sidebar-header sticky top-0 support-blur:bg-nord-light-sbtp support-blur:backdrop-blur-sm support-blur:dark:bg-nord-dark-sbtp">
        BLOG POSTS
      </p>
      <Search />
    </div>
  );
}
