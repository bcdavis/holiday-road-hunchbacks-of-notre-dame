import { useParks, getParksByState } from "./ParkProvider.js"


const eventHub = document.querySelector(".container")
let parks;

eventHub.addEventListener("change", event => {
    if (event.target.id === "parksDropdown") {
        //let temp = useParks()
        console.log(event);
        let targetPark = parks.find(prk => {
            return prk.fullName === event.target.value
        })
        const customEvent = new CustomEvent("parkChosen", {
            detail: {
                parkThatWasChosen: event.target.value, // this value is parkName
                lat: targetPark.latitude,
                long: targetPark.longitude
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
}) 

eventHub.addEventListener("stateChosen", event => {
    if(event.detail.stateThatWasChosen !== "0"){
        console.log("is a state");
        //debugger;
        document.querySelector("#parksDropdown").disabled = false;
        ParkSelect(event.detail.stateThatWasChosen);
    }
    else {
        console.log("not a state");
        document.querySelector("#parksDropdown").disabled = true;
    }
})

export const ParkSelect = (selectedState) => {
    
    //getParks()
    console.log(selectedState);
    getParksByState(selectedState)
    .then(() => {
        parks = useParks() // parks = [{parkName, parkCode, parkType}, etc.]
        renderParksSelector(parks)
    })
}

const renderParksSelector = parksCollection => {

    const contentTarget = document.querySelector("#parksDropdown")
    console.log(parksCollection);
    contentTarget.innerHTML = `
        <option value="0">Please select a park...</option>
        ${
            parksCollection.map(parkObj => {
                return `
                    <option value="${parkObj.fullName}">${parkObj.fullName}</option> 
                `
            }).join("")
        }
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