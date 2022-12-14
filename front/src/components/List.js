// This component is finished by Yuting Shao.
import "./List.css";
import React, { useState, useEffect } from "react";

function List() {
  const [listings, setListings] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const PAGE_SIZE = 10;

  useEffect(() => {
    fetch("/listings")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setListings(data);
      });
  }, []);

  return (
    <div className="UniverseList">
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
                setPage(Math.min((page + 1), Math.floor(listings.length / PAGE_SIZE)))
              }
            >
              Next
            </button>
          </li>
        </ul>
      </nav>

      <label className="form-label">
        Search by Universe Name{" "}
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
        {Array.isArray(listings)
          ? listings
              .filter(
                (d) =>
                  d["name"]?.toUpperCase().indexOf(query.toUpperCase()) !== -1
              )
              .slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)
              .map((item) => (
                <li className="list-group-item" key={item._id}>
                  Universe name: {item.name}; CO2:{item.N_value}; Amino Acid:
                  {item.O_value}; nucleotide:{item.Cell_value}; Distance to sun:
                  {item.dist_value ? "Close" : "Far"}; High gravity planet
                  around:
                  {item.gravity_value ? "Yes" : "No"}; nucleus:
                  {item.nucleus_value}; mitochondira:{item.mitochondira_vaule};
                  mitosis:
                  {item.mitosis_value}; planet type:{item.Final}; Builder Name:
                  {item.builder}
                </li>
              ))
          : null}
      </ul>
    </div>
  );
}

export default List;
