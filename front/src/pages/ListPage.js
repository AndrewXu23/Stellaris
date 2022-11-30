// This page is finished by Zihan Xu and Yuting Shao.
import React from "react";
import BasePage from "./BasePage.js";
import List from "../components/List.js";
import Builders from "../components/Builders.js";
import MyImage from "../images/final.jpeg";

function ListPage() {
  return (
    <BasePage>
      <div>
        <img src={MyImage} alt="example planet results: frozen, plant, earth-like, no-life, satellite (moon)" />
      </div>
      <div className="ListPage">
        <h1>Universes List (Check out your result with planets above!)</h1>
        <List />
      </div>
      <div className="BuilderPage">
        <h1>Builders List</h1>
        <Builders />
      </div>
    </BasePage>
  );
}

ListPage.propTypes = {};

export default ListPage;
