// This page is finished by Yuting Shao.
import React, { useState } from "react";
import BasePage from "./BasePage.js";
import "./BuildPage.css";
import Element from "../components/Element";
import MyImage from "../images/me.jpeg";
import MyMusic from "../music/P3BGM.m4a";

async function handleBuild(
  N_value,
  O_value,
  Cell_value,
  Dist_value,
  Gravity_value,
  Universe_name,
  Builder_name,
  Nucleus_value,
  mitochondria_value,
  mitosis_value
) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      N: N_value,
      O: O_value,
      cell: Cell_value,
      dist: Dist_value,
      gravity: Gravity_value,
      name: Universe_name,
      builder: Builder_name,
      nucleus: Nucleus_value,
      mitochondria: mitochondria_value,
      mitosis: mitosis_value,
    }),
  };
  fetch("/listings/record", requestOptions)
    .then(async (response) => response.json())
    .then((result) => {
      console.log(result);
    });
}

async function handleUpdate(
  N_value,
  O_value,
  Cell_value,
  Dist_value,
  Gravity_value,
  Universe_name,
  Builder_name,
  Nucleus_value,
  mitochondria_value,
  mitosis_value
) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      N: N_value,
      O: O_value,
      cell: Cell_value,
      dist: Dist_value,
      gravity: Gravity_value,
      name: Universe_name,
      builder: Builder_name,
      nucleus: Nucleus_value,
      mitochondria: mitochondria_value,
      mitosis: mitosis_value,
    }),
  };
  fetch("/listings/update", requestOptions)
    .then(async (response) => response.json())
    .then((result) => {
      console.log(result);
    });
}

async function handleDelete(Universe_name, Builder_name) {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: Universe_name,
      builder: Builder_name,
    }),
  };
  fetch("/listings/delete", requestOptions)
    .then(async (response) => response.json())
    .then((result) => {
      console.log(result);
    });
}

function BuildPage() {
  const [N_value, setNValue] = useState(0);
  const [O_value, setOValue] = useState(0);
  const [Cell_value, setCellValue] = useState(0);
  const [Dist_value, setDistValue] = useState(true);
  const [Gravity_value, setGravityValue] = useState(true);
  const [Universe_name, setUniverseName] = useState("");
  const [Builder_name, setBuilderName] = useState("");
  const [Nucleus_value, setNucleusValue] = useState(0);
  const [mitochondria_value, setmitochondriaValue] = useState(0);
  const [mitosis_value, setmitosisValue] = useState(0);
  return (
    <BasePage>
      <div className="BuildPage">
        <h1>☀️Build your universe!🔨</h1>
        <audio src={MyMusic} controls>
          <div className="alert alert-dark text" role="alert">
            If you are reading this, it is because your browser does not support
            the audio element.
          </div>
        </audio>
        <div className="alert alert-dark text" role="alert">
          Input the conditions you designed for your universe. Submit it and a
          universe will be created if the conditions are satisfied.
        </div>
        <div>
          <img src={MyImage} alt="me" />
        </div>
        <div className="BuildForm">
          <div className="mb-3 box">
            <label
              for="formUniverseNameInput"
              className="form-label orange-text"
            >
              Enter universe name:
            </label>
            <input
              type="text"
              className="form-control"
              id="formUniverseNameInput"
              value={Universe_name}
              onChange={(e) => setUniverseName(e.target.value)}
              placeholder="universe name placeholder"
            />
          </div>

          <div className="mb-3 box">
            <label for="formCO2Input" className="form-label orange-text">
              Modify CO2 level:
            </label>
            <div className="alert alert-dark text" role="alert">
              Carbon dioxide generated from ancient volcano warms this planet.
              And further generate Ozone layer to protect life.
            </div>
            <Element id="formCO2Input" name="CO2" initialValue={N_value} />
            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                className="btn btn-light"
                onClick={() => setNValue(N_value + 1)}
              >
                Increase CO2
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => setNValue(N_value - 1)}
              >
                Decrease CO2
              </button>
            </div>
          </div>

          <div className="mb-3 box">
            <label for="formAAInput" className="form-label orange-text">
              Modify Amino Acid level:
            </label>
            <div className="alert alert-dark text" role="alert">
              Atoms react with moleculars to form the amino acid, as an organic
              compunds, amino acid combined together to form protein.
            </div>
            <Element
              id="formAAInput"
              name="Amino Acid"
              initialValue={O_value}
            />
            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                className="btn btn-light"
                onClick={() => setOValue(O_value + 1)}
              >
                Increase Amino Acid
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => setOValue(O_value - 1)}
              >
                Decrease Amino Acid
              </button>
            </div>
          </div>

          <div className="mb-3 box">
            <label for="formNucInput" className="form-label orange-text">
              Modify Nucleotide level:
            </label>
            <div className="alert alert-dark text" role="alert">
              Nucleotide is the keystone element to construct DNA and RNA,
              ususally formed at prebiotic soup step.
            </div>
            <Element
              id="formNucInput"
              name="Nucleotide"
              initialValue={Cell_value}
            />
            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                className="btn btn-light"
                onClick={() => setCellValue(Cell_value + 1)}
              >
                Increase Nucleotide
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => setCellValue(Cell_value - 1)}
              >
                Decrease Nucleotide
              </button>
            </div>
          </div>

          <div className="mb-3 box">
            <label for="formNucleusInput" className="form-label orange-text">
              Modify Nucleus level:
            </label>
            <div className="alert alert-dark text" role="alert">
              The nucleus is a unique cell structure of eukaryotic cells. The
              DNA inside the nucleus is complexed with various proteins and a
              small amount of mRNA to form chromatin.
            </div>
            <Element
              id="formNucleusInput"
              name="nucleus"
              initialValue={Nucleus_value}
            />
            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                className="btn btn-light"
                onClick={() => setNucleusValue(Nucleus_value + 1)}
              >
                Increase Nucleus
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => setNucleusValue(Nucleus_value - 1)}
              >
                Decrease Nucleus
              </button>
            </div>
          </div>

          <div className="mb-3 box">
            <label for="formMitInput" className="form-label orange-text">
              Modify Mitochondria level:
            </label>
            <div className="alert alert-dark text" role="alert">
              Mitochondria are the main site of cellular aerobic respiration.
            </div>
            <Element
              id="formMitInput"
              name="mitochondria"
              initialValue={mitochondria_value}
            />
            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                className="btn btn-light"
                onClick={() => setmitochondriaValue(mitochondria_value + 1)}
              >
                Increase mitochondria
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => setmitochondriaValue(mitochondria_value - 1)}
              >
                Decrease mitochondria
              </button>
            </div>
          </div>

          <div className="mb-3 box">
            <label for="formMitoInput" className="form-label orange-text">
              Modify Mitosis level:
            </label>
            <div className="alert alert-dark text" role="alert">
              Mitosis is the mechanism for cells to reproduce, the two mitosis
              are asexual reproduction and sexual reproduction.
            </div>
            <Element
              id="formMitoInput"
              name="mitosis"
              initialValue={mitosis_value}
            />
            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                className="btn btn-light"
                onClick={() => setmitosisValue(mitosis_value + 1)}
              >
                Increase mitosis
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => setmitosisValue(mitosis_value - 1)}
              >
                Decrease mitosis
              </button>
            </div>
          </div>

          <div className="mb-3 box">
            <label for="formCloseInput" className="form-label orange-text">
              Is this planet close to the sun?
            </label>
            <Element
              id="formCloseInput"
              name="Distance To The Sun"
              initialValue={Dist_value ? "Close" : "Far"}
            />
            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                className="btn btn-light"
                onClick={() => setDistValue(true)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => setDistValue(false)}
              >
                Far
              </button>
            </div>
          </div>

          <div className="mb-3 box">
            <label for="formGravInput" className="form-label orange-text">
              Does this planet have high gravity planet around?
            </label>
            <Element
              id="formGravInput"
              name="High Gravity Planet Around"
              initialValue={Gravity_value ? "Yes" : "No"}
            />
            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                className="btn btn-light"
                onClick={() => setGravityValue(true)}
              >
                Yes
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => setGravityValue(false)}
              >
                No
              </button>
            </div>
          </div>

          <div className="mb-3 box">
            <label
              for="formBuilderNameInput"
              className="form-label orange-text"
            >
              Enter builder name:
            </label>
            <input
              type="text"
              className="form-control"
              id="formBuilderNameInput"
              value={Builder_name}
              onChange={(e) => setBuilderName(e.target.value)}
              placeholder="your name placeholder"
            />
          </div>

          <div>
            <button
              type="button"
              className="btn btn-success"
              onClick={() =>
                handleBuild(
                  N_value,
                  O_value,
                  Cell_value,
                  Dist_value,
                  Gravity_value,
                  Universe_name,
                  Builder_name,
                  Nucleus_value,
                  mitochondria_value,
                  mitosis_value
                )
              }
            >
              Build
            </button>

            <button
              type="button"
              className="btn btn-info"
              onClick={() =>
                handleUpdate(
                  N_value,
                  O_value,
                  Cell_value,
                  Dist_value,
                  Gravity_value,
                  Universe_name,
                  Builder_name,
                  Nucleus_value,
                  mitochondria_value,
                  mitosis_value
                )
              }
            >
              Update
            </button>

            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleDelete(Universe_name, Builder_name)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </BasePage>
  );
}

BuildPage.propTypes = {};

export default BuildPage;
