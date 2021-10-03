import { MutableRefObject, useCallback, useRef, useState } from "react";
import Link from "next/link";
import { SearchProps } from "../interfaces/search";

export default function Search({ onFocusHandler }: SearchProps): JSX.Element {
  const searchRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const searchEndpoint = (query: string): string => `/api/search?q=${query}`;

  const onChange = useCallback((event: any): void => {
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

  const onFocus = (): void => {
    setActive(true);
    window.addEventListener("click", onClick);
  };

  const onClick = useCallback((event: any): void => {
    onFocusHandler(true);
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      onFocusHandler(false);
      setQuery("");
      setResults([]);
      window.removeEventListener("click", onClick);
    }
  }, []);

  return (
    <>
      <div className="col-12 m-0 mb-2 search">
        <input
          type="text"
          className="search-term"
          onChange={onChange}
          onFocus={onFocus}
          placeholder="Search posts..."
          value={query}
        />
      </div>
      {show(active, results)}
    </>
  );
}

function show(active: boolean, results: any): false | JSX.Element {
  return (
    active &&
    results.length > 0 && (
      <>
        <p className="col-12 text-center h5 mt-3 mb-3 m-0">Searched Posts</p>
        {results.map(
          ({ id, title, date, tag, desc }: any, index: any): JSX.Element => (
            <div key={index} className="col-12 col-sm-6">
              <Link href={`/posts/blog/${id}`}>
                <a className="text-white">
                  <div className="card hover-shadow rounded-3 h-100">
                    <div className="card-header h6">
                      <p className="mt-2 mb-2">{title}</p>
                    </div>
                    <div className="card-body">
                      <p className="card-text m-0">{desc}</p>
                    </div>
                    <div
                      className="card-footer d-flex flex-row justify-content-between align-items-center"
                      style={{ color: "#BDBDBD" }}
                    >
                      {date}
                      <span className="text-end">
                        {tag.map(
                          (children: any, index: any): JSX.Element => (
                            <span key={index} className="badge bg-dark ms-2">
                              {children}
                            </span>
                          )
                        )}
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          )
        )}
      </>
    )
  );
}
