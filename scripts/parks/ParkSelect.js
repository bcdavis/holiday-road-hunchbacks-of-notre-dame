import { useShortParks, getParks } from "./ParkProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", event => {
    
    if (event.target.id === "parksDropdown") {
        
        const customEvent = new CustomEvent("parkChosen", {
            detail: {
                parkThatWasChosen: event.target.value // this value is parkCode
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
}) 

export const ParkSelect = () => {
    
    getParks()
    .then(() => {
        const parks = useShortParks() // parks = [{parkName, parkCode, parkType}, etc.]
        render(parks)
    })
}

const render = parksCollection => {

    const contentTarget = document.querySelector(".parks-list")
    
    contentTarget.innerHTML = `
        <select class="dropdown offsetCounterBox" id="parksDropdown">
            <option value="0">Please select a park...</option>
            ${
                parksCollection.map(parkObj => {
                    return `
                        <option value="${parkObj.parkName}">${parkObj.parkName}</option> 
                    `
                }).join("")
            }
        </select>
    `;
}

const compare = (a, b) => { 
    const itemA = a.name.toUpperCase();
    const itemB = b.name.toUpperCase();
    let comparison = 0;  
    if (itemA > itemB) {
        comparison = 1;
    } else if (itemA < itemB) {
        comparison = -1;
    }
    return comparison;
}