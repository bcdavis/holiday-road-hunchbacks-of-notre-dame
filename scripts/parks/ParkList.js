
import { ParkHTML } from "./Park.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("parkChosen", event => {
    console.log("found a ParkChosen event!");
    const contentTarget = document.querySelector("#parkSection")
    if (event.detail.parkThatWasChosen !== "0") {
        addParkToDOM(event.detail)
    } else {
        contentTarget.innerHTML = ""
    }
    
})

export const renderParkSection = () => {
    const domElement = document.querySelector(".preview")
    console.log("rendering park section to DOM");
    domElement.innerHTML += ` 
        <section class="mainPreviewSection" id="parkSection"></section>
    `
}

const addParkToDOM = parkObj => {
    console.log("adding Park to DOM");
    const contentTarget = document.querySelector("#parkSection")
    contentTarget.innerHTML = `
        <h2>Parks</h2>
        ${ParkHTML(parkObj)}
    `
}