import { useAttractions } from "./AttractionProvider.js"

const eventHub = document.querySelector(".container");

let attractionName;

eventHub.addEventListener("click", event => {
    
    if (event.target.id === "detailsBtn-attraction" && event.target.textContent === "Show Details") {

        let targetAttraction = useAttractions().find(attraction => {
            return attraction.name === attractionName;
        });
        
        const customEvent = new CustomEvent("attractionDetailsToggle", {
            detail: {
                name: targetAttraction.name,
                state: targetAttraction.state,
                city: targetAttraction.city,
                description: targetAttraction.description,
                ameneties: {
                    souvenirs: targetAttraction.ameneties.souvenirs,
                    restrooms: targetAttraction.ameneties.restrooms
                }
            }
        })

        event.target.textContent = "Hide Details"
        eventHub.dispatchEvent(customEvent)

    } else if (event.target.id === "detailsBtn-attraction" && event.target.textContent === "Hide Details") {
        
        const detailContent = document.querySelector(".shownDetails")
        detailContent.innerHTML = ""
        event.target.textContent = "Show Details"

    }
})

export const AttractionHTML = attractionObj => {
    attractionName = attractionObj.attractionThatWasChosen
    return `
        <div class="indent attraction">
            <h4>${attractionName}</h4>
            <button type="button" class="detailsBtn" id="detailsBtn-attraction">Show Details</button>
            <div class="shownDetails"></div>
        </div>
    `
}