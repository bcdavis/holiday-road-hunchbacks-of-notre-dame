import { saveItinerary } from "./ItineraryProvider.js"

const eventHub = document.querySelector(".container");

eventHub.addEventListener("change", changeEvent => {
    
    if (changeEvent.target.classList[0] === "dropdown") {
        
        const parkPicked = document.querySelector("#parksDropdown").value
        const attractionPicked = document.querySelector("#attractionsDropdown").value
        const eateryPicked = document.querySelector("#eateriesDropdown").value
        const saveBtn = document.getElementById("saveBtn")

        if (parkPicked !== "0" && attractionPicked !== "0" && eateryPicked !== "0") {
            saveBtn.disabled = false
        } else {
            saveBtn.disabled = true
        }
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveBtn") {
        const parkPicked = document.querySelector("#parksDropdown").value
        const attractionPicked = document.querySelector("#attractionsDropdown").value
        const eateryPicked = document.querySelector("#eateriesDropdown").value

        const itinerary = {
            park: parkPicked,
            attraction: attractionPicked,
            eatery: eateryPicked
        };

        saveItinerary(itinerary)

        const dropdownMenus = document.getElementsByClassName("dropdown")
        for (const menu of dropdownMenus) {
            menu.value = '0';
        }

        const previewAreas = document.getElementsByClassName("mainPreviewSection")
        for (const area of previewAreas) {
            area.innerHTML = "";
        }

        document.querySelector("#saveBtn").disabled = true;
        document.querySelector("#parksDropdown").disabled = true;

    }
})

export const SaveButton = () => {
    const HTMLTarget = document.querySelector(".previewContainer");
    
    HTMLTarget.innerHTML += `
    <div class="buttonBorder">
        <button type="submit" id="saveBtn" disabled>Save Itinerary</button>
    </div>
    `
}