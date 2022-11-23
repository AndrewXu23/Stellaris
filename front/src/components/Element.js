// This component is finished by Yuting Shao.
import React from "react";
import "./Element.css";

function Element({ name, initialValue }) {
  return (
    <div className="element">
      <tr>
        <td>{name}:</td>
        <td>{initialValue}</td>
      </tr>
    </div>
  );
}

export default Element;
