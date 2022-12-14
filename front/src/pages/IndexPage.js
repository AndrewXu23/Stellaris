// This page is finished by Zihan Xu.
import React from "react";
import BasePage from "./BasePage.js";
import MyImage2 from "../images/wave1.png";
import "./IndexPage.css";
import MyMusic from "../music/P3BGM.m4a";

function IndexPage() {
  return (
    <BasePage>
      <div className="IndexPage">
        <h1>🌏☄️✨Welcome to Stellaris!☀️⭐️🌛</h1>
        <div>
          <audio src={MyMusic} controls>
            <p>
              If you are reading this, it is because your browser does not
              support the audio element.
            </p>
          </audio>
          <button type="button" className="btn btn-success">
            <a className="page-link" href="/build">
              Bulid Universe
            </a>
          </button>
          <button type="button" className="btn btn-secondary">
            <a className="page-link" href="/list">
              Browse Universes
            </a>
          </button>
        </div>
        <div>
          <img src={MyImage2} alt="wave1" class="bottom-img" />
        </div>
      </div>
      <div>
          <p className="yellowtext">
            In year 2077, human has explored all planets in Oort cloud. They
            owned the technology to manage a global ecosystem of a just explored
            planet. United Nation wonder if we can simulate the operation result
            of exploiting a given planet. Therefore, they hired 79 years old
            computer science masters Zihan and Yuting from Northeastern
            University to design a simulator web with react, mongoDB and all
            required functions from professor John.
          </p>
        </div>
    </BasePage>
  );
}

IndexPage.propTypes = {};

export default IndexPage;
