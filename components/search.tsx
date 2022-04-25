import { MutableRefObject, useCallback, useRef, useState } from "react";
import Selectables from "./selectables";
import { cachedPosts } from "../misc/blog";

export default function Search({ onFocusHandler }: any) {
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
    if (query.length) {
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
        name="search"
        id="search"
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
        {results.map(({ item }: any, index: any) => (
          <div className="w-full cursor-pointer" key={index}>
            <Selectables
              id={item.id}
              title={item.title}
              date={item.date}
              tag={item.tag}
              desc={item.desc}
            />
          </div>
        ))}
      </>
    );
  } else {
    return (
      <>
        {cachedPosts.map(({ id, title, date, tag, desc }: any, index: any) => (
          <div className="w-full cursor-pointer" key={index}>
            <Selectables
              id={id}
              title={title}
              date={date}
              tag={tag}
              desc={desc}
            />
          </div>
        ))}
      </>
    );
  }
}
