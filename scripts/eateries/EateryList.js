import { EateryHTML } from "./Eatery.js";

const eventHub = document.querySelector(".container");
let contentTarget;

eventHub.addEventListener("eateryChosen", (event) => {
  if (event.detail.eateryThatWasChosen !== "0") {
    addEateryToDOM(event.detail);
  } else {
    contentTarget = document.getElementById("eaterySection");
    contentTarget.innerHTML = "";
  }
});
eventHub.addEventListener("eateryDetails", (event) => {
  addEateryDetailsToDOM(event.detail);
});

const addEateryDetailsToDOM = (eObj) => {
    contentTarget = document.querySelector(".eatery");
    const Ameneties = eObj.ameneties;
  for (const amenety in Ameneties) {
    let x = Ameneties[amenety];
    Ameneties[amenety] = x
      .toString()
      .replace("true", "Yes")
      .replace("false", "No");
  }
  contentTarget.innerHTML = `
    <h4 class="eateryPicked">${eObj.name}</h4>
        <button type="button" class="hideBtn detailsBtn" id="hideBtn-eatery">Hide Details</button>
        <p class="eateryDescription description"><em>${eObj.description}</em></p>
        <p>Location: ${eObj.city}, ${eObj.state}</p>
        <ul><u><b>Ameneties</u></b>
        <li>Wifi: ${eObj.ameneties.wifi}</li>
        <li>Restrooms: ${eObj.ameneties.restrooms}</li>
        <li>Pets Allowed: ${eObj.ameneties.pet}</li>
        <li>Playgrounds: ${eObj.ameneties.playground}</li>
        <li>Wheelchair Accessible: ${eObj.ameneties.wheelchair}</li>
        <li>Diaper Facility: ${eObj.ameneties.diaper}</li>
        </ul>
    </div>
`;
};
export const renderEaterySection = () => {
  const domElement = document.querySelector(".previewContent");
  domElement.innerHTML += ` 
        <section class="mainPreviewSection" id="eaterySection"></section>
    `;
  contentTarget = document.getElementById("eaterySection");
};

export const addEateryToDOM = (eObj) => {
    contentTarget = document.getElementById("eaterySection");
      contentTarget.innerHTML = `
        <h3>Restaurant</h3>
            ${EateryHTML(eObj)}
    `;
};

