import { MutableRefObject, useCallback, useRef, useState } from "react";
import { MoreHorizontal } from "react-feather";
import Selectables from "./selectables";

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

  const onClick = useCallback(
    (event: any) => {
      onFocusHandler(true);
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setActive(false);
        onFocusHandler(false);
        setQuery("");
        setResults([]);
        window.removeEventListener("click", onClick);
      }
    },
    [onFocusHandler]
  );

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
        placeholder="Search post... (use # for tags)"
        value={query}
      />
      {show(active, results)}
    </>
  );
}

function show(active: boolean, results: any) {
  return (
    active &&
    results.length > 0 && (
      <>
        <p className="sidebar-header">SEARCHED POSTS</p>
        {results.map(({ id, title, date, tag, desc }: any, index: any) => (
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
        <div className="sidebar-section bg-dark flex items-center justify-center">
          <MoreHorizontal />
        </div>
      </>
    )
  );
}
