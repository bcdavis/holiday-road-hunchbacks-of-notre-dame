import { useAttractions } from "./AttractionProvider.js"
import { addAttractionDetailsToDOM } from "./AttractionDetails.js"

const eventHub = document.querySelector(".container");

let attractionName;

eventHub.addEventListener("click", event => { 
    if (event.target.id === "detailsBtn-attraction" && event.target.textContent === "Show Details") {
        let targetAttraction = useAttractions().find(attraction => {
            return attraction.name === attractionName;
        });

        event.target.textContent = "Hide Details"
        addAttractionDetailsToDOM(targetAttraction)

    } else if (event.target.id === "detailsBtn-attraction" && event.target.textContent === "Hide Details") {
        
        const detailContent = document.querySelector("#shownDetails-attraction")
        detailContent.innerHTML = ""
        event.target.textContent = "Show Details"

    }
})

export const AttractionHTML = attractionObj => {
    attractionName = attractionObj.attractionThatWasChosen
    return `
        <div class="indent attraction">
            <h4>${attractionName}</h4>
            <div class="detailBtnAccent offsetAccentBox">
                <button type="button" class="detailsBtn offsetCounterBox" id="detailsBtn-attraction">Show Details</button>
            </div>
            <div class="shownDetails" id="shownDetails-attraction"></div>
        </div>
    `
}