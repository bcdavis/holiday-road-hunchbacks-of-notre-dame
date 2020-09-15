import { useEateries } from "./EateryProvider.js";

const eventHub = document.querySelector(".container");

let eateryid;

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "detailsBtn-eatery") {
    let targetEatery = useEateries().find((eatery) => {
      return eatery.businessName === eateryid;
    });
    const customEvent = new CustomEvent("eateryDetails", {
      detail: {
        name: targetEatery.businessName,
        description: targetEatery.description,
        state: targetEatery.state,
        city: targetEatery.city,
        ameneties: {
          wheelchair: targetEatery.ameneties.wheelchairAccessible,
          pet: targetEatery.ameneties.petFriendly,
          wifi: targetEatery.ameneties.wifi,
          diaper: targetEatery.ameneties.diaperFacility,
          playground: targetEatery.ameneties.playground,
          restrooms: targetEatery.ameneties.restrooms,
        },
      },
    });

    eventHub.dispatchEvent(customEvent);
  } else if (event.target.id === "hideBtn-eatery") {
    let eObj = document.getElementById("eateriesDropdown").value;
    let contentTarget = document.getElementById("eaterySection");
    contentTarget.innerHTML = `<h3>Restaurant</h3>
    <div class="indent eatery">
    <h4>${eObj}</h4>
    <button type="button" class="detailsBtn" id="detailsBtn-eatery">Show Details</button>
    </div>`;
  }
});

export const EateryHTML = (eObj) => {
  eateryid = eObj.eateryThatWasChosen;
  return `
        <div class="indent eatery">
            <h4>${eObj.eateryThatWasChosen}</h4>
            <div class="detailBtnAccent offsetAccentBox">
              <button type="button" class="detailsBtn offsetCounterBox" id="detailsBtn-eatery">Show Details</button>
            </div>
          <div class="shownDetails" id="shownDetails-eatery"></div>
        </div>
    `;
};
