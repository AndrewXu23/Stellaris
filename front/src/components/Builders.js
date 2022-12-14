// This component is finshed by Zihan Xu.
import "./Builders.css";
import React, { useState, useEffect } from "react";

function Builders() {
  const [Builder, setBuilder] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const PAGE_SIZE = 10;

  useEffect(() => {
    fetch("/builders")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBuilder(data);
      });
  }, []);

  return (
    <div className="BuilderList">
      <div>Current page:{page}</div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setPage(Math.max(page - 1, 0))}
            >
              Previous
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => setPage(0)}>
              0
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => setPage(1)}>
              1
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => setPage(2)}>
              2
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => setPage(3)}>
              3
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() =>
                setPage(
                  Math.min(page + 1, Math.floor(Builder.length / PAGE_SIZE))
                )
              }
            >
              Next
            </button>
          </li>
        </ul>
      </nav>

      <label className="form-label">
        Search by Builder Name{" "}
        <input
          className="form-control"
          type="text"
          value={query}
          onChange={(evt) => {
            setQuery(evt.target.value);
          }}
        />
      </label>

      <ul className="lists list-group">
        {Array.isArray(Builder)
          ? Builder.filter(
            (d) =>
              d["builder"]?.toUpperCase().indexOf(query.toUpperCase()) !== -1
          )
            .slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)
            .map((item) => (
              <li className="list-group-item" key={item._id}>
                {item.builder} has built {item.universe.length} unvierses, which
                are listed as following: {item.universe.toString()}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default Builders;
