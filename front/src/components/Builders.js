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
  }, []);

  return (
    <ul>
      {Array.isArray(Builder)
        ? Builder.map((item) => (
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
