// This component is finished by Yuting Shao.
import "./List.css";
import React, { useState, useEffect } from "react";

function List() {
  const [listings, setListings] = useState([]);

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
    <ul>
      {Array.isArray(listings)
        ? listings.map((item) => (
            <li key={item._id}>
              Universe name: {item.name}; CO2:{item.N_value}; Amino Acid:
              {item.O_value}; nucleotide:{item.Cell_value}; Distance to sun:
              {item.dist_value ? "Close" : "Far"}; High gravity planet around:
              {item.gravity_value ? "Yes" : "No"}; nucleus:{item.nucleus_value};
              mitochondira:{item.mitochondira_vaule}; mitosis:
              {item.mitosis_value}; planet type:{item.Final}; Builder Name:
              {item.builder}
            </li>
          ))
        : null}
    </ul>
  );
}

export default List;
