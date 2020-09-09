import { useAttractions, getAttractions } from "./AttractionProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", event => {
    
    if (event.target.id === "attractionsDropdown") {
        
        const customEvent = new CustomEvent("attractionChosen", {
            detail: {
                attractionThatWasChosen: event.target.value
            }
        })
        
        eventHub.dispatchEvent(customEvent)
    }
}) 

export const AttractionSelect = () => {
    
    getAttractions()
        .then(() => {
            const attractions = useAttractions()
            attractions.sort(compare);
            render(attractions)
        })
}

const render = attractionsCollection => {

    const contentTarget = document.querySelector(".attractions-list")
    
    contentTarget.innerHTML = `
        <select class="dropdown" id="attractionsDropdown">
            <option value="0">Please select an attraction...</option>
            ${
                attractionsCollection.map(attractionObj => {
                    return `
                        <option value="${attractionObj.name}">${attractionObj.name}</option>
                    `
                }).join("")
            }
        </select>
    `
}

const compare = (a, b) => {
    
    const attractionA = a.name.toUpperCase();
    const attractionB = b.name.toUpperCase();
  
    let comparison = 0;
    if (attractionA > attractionB) {
      comparison = 1;
    } else if (attractionA < attractionB) {
      comparison = -1;
    }
    return comparison;
  }
