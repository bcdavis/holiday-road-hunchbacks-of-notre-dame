
import { ParkHTML } from "./Park.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("parkChosen", event => {
    const contentTarget = document.querySelector("#parkSection")
    if (event.detail.parkThatWasChosen !== "0") {
        addParkToDOM(event.detail)
    } else {
        contentTarget.innerHTML = ""
    }
    
})

export const renderParkSection = () => {
    const domElement = document.querySelector(".previewContent")
    domElement.innerHTML += ` 
        <section class="mainPreviewSection" id="parkSection"></section>
    `
}

const addParkToDOM = parkObj => {
    const contentTarget = document.querySelector("#parkSection")
    contentTarget.innerHTML = `
        <h3>Parks</h3>
        ${ParkHTML(parkObj)}
    `
}