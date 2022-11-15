import React from "react"
import './Element.css';

function Element({name, initialValue}) {
  return (
    <tr>
        <td>{name}</td>
        <td>{initialValue}</td>
    </tr>
  );
}

export default Element;