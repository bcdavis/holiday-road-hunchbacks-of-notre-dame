import { AttractionHTML } from "./Attraction.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("attractionChosen", event => {
    const contentTarget = document.querySelector("#attractionSection")

    if (event.detail.attractionThatWasChosen !== "0") {
        addAttractionToDOM(event.detail)
    } else {
        contentTarget.innerHTML = ""
    }
    
})

export const renderAttractionSection = () => {
    const domElement = document.querySelector(".preview")
    domElement.innerHTML += ` 
        <section class="mainPreviewSection" id="attractionSection"></section>
    `
}

const addAttractionToDOM = attractionObj => {
    const contentTarget = document.querySelector("#attractionSection")
    contentTarget.innerHTML = `
        <h2>Attractions</h2>
        ${AttractionHTML(attractionObj)}
    `
}