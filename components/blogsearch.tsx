import { MutableRefObject, useCallback, useRef, useState } from "react";
import { CardSelectables } from "./selectables";
import { cachedPosts } from "../misc/blog";

export default function BlogSearch({ onFocusHandler }: any) {
  const searchRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const searchEndpoint = (query: string) => {
    query = encodeURIComponent(query);
    return `/api/search?q=${query}`;
  };

  const onChange = useCallback((event: any) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length > 0) {
      fetch(searchEndpoint(query))
        .then((res) => res.json())
        .then((res) => {
          setResults(res.results);
        });
    } else {
      setResults([]);
    }
  }, []);

  const onClick = useCallback((event: any) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      onFocusHandler(false);
      setQuery("");
      setResults([]);
      window.removeEventListener("click", onClick);
    }
  }, []);

  const onFocus = () => {
    setActive(true);
    window.addEventListener("click", onClick);
  };

  return (
    <>
      <input
        type="text"
        name="bsearch"
        id="bsearch"
        onChange={onChange}
        onFocus={onFocus}
        className="sidebar-section selectable-section text-sm"
        placeholder="Search post..."
        value={query}
      />
      {show(active, results)}
    </>
  );
}

function show(active: boolean, results: any) {
  if (active && results.length > 0 && results !== undefined) {
    return (
      <>
        <h1>Posts</h1>
        <div className="mx-5 my-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {results.map(({ item }: any, index: any) => (
            <div className="w-full cursor-pointer self-stretch" key={index}>
              <CardSelectables
                id={item.id}
                title={item.title}
                date={item.date}
                tag={item.tag}
                desc={item.desc}
              />
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>Posts</h1>
        <div className="mx-5 my-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cachedPosts.map(
            ({ id, title, date, tag, desc }: any, index: any) => (
              <div className="w-full cursor-pointer self-stretch" key={index}>
                <CardSelectables
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
      </>
    );
  }
}
