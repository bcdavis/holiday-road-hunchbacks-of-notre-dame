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
    contentTarget = document.getElementById("eaterySection");
    const Ameneties = eObj.ameneties;
  for (const amenety in Ameneties) {
    let x = Ameneties[amenety];
    Ameneties[amenety] = x
      .toString()
      .replace("true", "Yes")
      .replace("false", "No");
  }
  contentTarget.innerHTML = `
    <div class="eatery">
    <h2>Restaurant</h2>
    <h3 class="eateryPicked">${eObj.name}</h3>
        <button type="button" class="hideBtn" id="hideBtn-eatery">Hide Details</button>
        <p class="eateryDescription">"${eObj.description}"</p>
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
        <h2>Restaurant</h2>
            ${EateryHTML(eObj)}
    `;
};
