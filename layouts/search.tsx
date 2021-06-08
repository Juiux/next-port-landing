import { useCallback, useRef, useState } from "react";
import Link from "next/link";

export default function Search() {
  const searchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);
  const searchEndpoint = (query: any) => `api/search/?q=${query}`;
  const onChange = useCallback(function (event) {
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
  const onFocus = useCallback(() => {
    setActive(true);
    // @ts-ignore
    window.addEventListener("click", onClick);
  }, []);
  const onClick = useCallback(function (event) {
    // @ts-ignore
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener("click", onClick);
    }
  }, []);

  return (
    <div ref={searchRef}>
      <div className="form-group w-100">
        <input
          className="form-field"
          type="text"
          name="something"
          id="something"
          onChange={onChange}
          onFocus={onFocus}
          value={query}
          placeholder="Blog Search"
        />
        <label className="form-label" htmlFor="something">
          Blog Search
        </label>
      </div>
      {active && results.length > 0 && (
        <div className="row gx-3 gy-3 mt-4">
          <p className="col-12 text-center h5 mt-3 mb-3 m-0">Search Result</p>
          {results.map(({ id, title, desc, date, tag }) => (
            <div key={id} className="col-12 col-sm-6">
              <Link href={`/posts/${id}`}>
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
                      <span className="badge bg-dark text-end">{tag}</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
