// This component is finshed by Zihan Xu.
import "./Builders.css";
import React, { useState, useEffect } from "react";

function Builders() {
  const [Builder, setBuilder] = useState([]);

  useEffect(() => {
    fetch("/builders")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBuilder(data);
      });
      // I think it would be good to chain a .catch here in case there's an error.
  }, []);

  return (
    <ul>
      {Array.isArray(Builder)
        ? Builder.map((item) => (
          // Would be good to make each list item a Builder component with some more styling.
            <li key={item._id}>
              {item.builder} has built {item.universe.length} unvierses, which
              are listed as following: {item.universe.toString()}
            </li>
          ))
        : null}
    </ul>
  );
}

export default Builders;
