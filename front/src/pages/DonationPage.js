// This page is finished by Zihan Xu.
import React from "react";
import BasePage from "./BasePage.js";
import MyImage from "../images/gohead.jpeg";

function DonationPage() {
  return (
    <BasePage>
      <div className="IndexPage">
        <h1>Welcome to Stellaris!</h1>
        <div>
          <h2>
            Hi professor! You know what to do, go ahead!👇🏻
          </h2>
        </div>
        <div>
          <img src={MyImage} alt="money" />
        </div>
      </div>
    </BasePage>
  );
}

DonationPage.propTypes = {};

export default DonationPage;