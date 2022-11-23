// This page is finished by Zihan Xu.
import React from "react";
import BasePage from "./BasePage.js";
import MyImage from "../images/andrew.png";
import YutingImage from "../images/yuting.png";

function AboutPage() {
  return (
    <BasePage>
      <div className="AboutPage">
        <h1>Welcome to Engineers Introduction Page!</h1>
        <div>
          <p>
            79 years old computer science masters Zihan from Northeastern University
          </p>
        </div>
        <div>
          <img src={MyImage} alt="Zihan" />
        </div>
        <div>
          <p>
            79+ years old Dr.Yuting from Northeastern University
          </p>
        </div>
        <div>
          <img src={YutingImage} alt="Yuting" />
        </div>
      </div>
    </BasePage>
  );
}

AboutPage.propTypes = {};

export default AboutPage;