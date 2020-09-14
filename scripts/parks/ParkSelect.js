import { useParks, getParksByState } from "./ParkProvider.js"


const eventHub = document.querySelector(".container")
let parks;

eventHub.addEventListener("change", event => {
    if (event.target.id === "parksDropdown" && event.target.value !== "0") {
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
    else if (event.target.id === "parksDropdown" && event.target.value === "0") {
        const parksSectionTarget = document.querySelector("#parkSection")
        parksSectionTarget.innerHTML = "";
    }
}) 

eventHub.addEventListener("stateChosen", event => {
    if(event.detail.stateThatWasChosen !== "0"){
        document.querySelector("#parksDropdown").disabled = false;
        ParkSelect(event.detail.stateThatWasChosen);
    }
    else {
        document.querySelector("#parksDropdown").disabled = true;
        const parksSectionTarget = document.querySelector("#parkSection")
        parksSectionTarget.innerHTML = "";
        document.querySelector("#parksDropdown").value = "0"; // reset dropdown
    }
})

export const ParkSelect = (selectedState) => {
    getParksByState(selectedState)
    .then(() => {
        parks = useParks()
        renderParksSelector(parks)
    })
}

const renderParksSelector = parksCollection => {

    const contentTarget = document.querySelector("#parksDropdown")
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
