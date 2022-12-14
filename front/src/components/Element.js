// This component is finished by Yuting Shao.
import React from "react";
import "./Element.css";

function Element({ name, initialValue }) {
  return (
    <table class="table-info">
      <tr>
        <td>{name}:</td>
        <td>{initialValue}</td>
      </tr>
    </table>
  );
}

export default Element;
