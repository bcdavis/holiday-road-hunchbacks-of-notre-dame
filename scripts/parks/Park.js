
// Get all national parks and store their parkCodes in an array
// this would reduce the overall space used when rendering the list of national parks
// When a park is selected, get that individual park and render its data in the preview section

// keys that can be used to filter:
// - designation: (park type) 
// - states: (what states the park falls in)

import { useParks } from "./ParkProvider.js";
import { addParkDetailsToDOM } from "./ParkDetails.js";

let parkName;

const eventHub = document.querySelector(".container");


eventHub.addEventListener("click", event => {
  if (event.target.id === "detailsBtn-park" && event.target.textContent === "Show Details"){
    let targetPark = useParks().find(park => {
      return park.fullName === parkName;
    })
    event.target.textContent = "Hide Details";
    addParkDetailsToDOM(targetPark);
  }
  else if (event.target.id === "detailsBtn-park" && event.target.textContent === "Hide Details"){
    const parkDetailsTarget = document.querySelector("#shownDetails-park");
    event.target.textContent = "Show Details";
    // clear shownDetails
    parkDetailsTarget.innerHTML = "";
  }
})


export const ParkHTML = parkObj => {
  parkName = parkObj.parkThatWasChosen;
  return `
      <div class="indent park">
          <h4>${parkName}</h4>
          <div class="detailBtnAccent offsetAccentBox">
            <button type="button" class="detailsBtn offsetCounterBox" id="detailsBtn-park">Show Details</button>
          </div>
          <div class="shownDetails" id="shownDetails-park"></div>
      </div>
  `
}