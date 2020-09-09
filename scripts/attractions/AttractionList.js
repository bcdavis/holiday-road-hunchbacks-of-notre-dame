import { AttractionHTML } from "./Attraction.js"

const eventHub = document.querySelector(".container")
const domElement = document.querySelector(".preview")

eventHub.addEventListener("attractionChosen", event => {
    
    if (event.detail.attractionThatWasChosen !== "0") {
        addAttractionToDOM(event.detail)
    } else {
        domElement.innerHTML = ""
    }
    
})

export const addAttractionToDOM = attractionObj => {
    domElement.innerHTML = `
        <h2>Attractions</h2>
            ${AttractionHTML(attractionObj)}
    `
}