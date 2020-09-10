import { AttractionHTML } from "./Attraction.js"
import { addAttractionDetailsToDOM } from "./AttractionDetails.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("attractionChosen", event => {
    const contentTarget = document.querySelector("#attractionSection")

    if (event.detail.attractionThatWasChosen !== "0") {
        addAttractionToDOM(event.detail)
    } else {
        contentTarget.innerHTML = ""
    }
    
})

eventHub.addEventListener("attractionDetailsToggle", event => {
    addAttractionDetailsToDOM(event.detail)      
});

export const renderAttractionSection = () => {
    const domElement = document.querySelector(".previewContainer")
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