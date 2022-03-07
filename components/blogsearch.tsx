import { MutableRefObject, useCallback, useRef, useState } from "react";
import { CardSelectables } from "./selectables";

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
    onFocusHandler(true);
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      onFocusHandler(false);
      setQuery("");
      setResults([]);
      window.removeEventListener("click", onClick);
    }
  }, [onFocusHandler]);

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
        <h1>Search Results</h1>
        <div className="mx-5 my-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {results.map(({ id, title, date, tag, desc }: any, index: any) => (
            <div className="w-full cursor-pointer self-stretch" key={index}>
              <CardSelectables
                id={id}
                title={title}
                date={date}
                tag={tag}
                desc={desc}
              />
            </div>
          ))}
        </div>
      </>
    )
  );
}
