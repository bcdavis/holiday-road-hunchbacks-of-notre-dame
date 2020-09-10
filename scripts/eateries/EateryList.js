import { EateryHTML } from "./Eatery.js"

const eventHub = document.querySelector(".container")
const domElement = document.querySelector(".preview")

eventHub.addEventListener("eateryChosen", event => {
    
    if (event.detail.eateryThatWasChosen !== "0") {
        addEateryToDOM(event.detail)
    } else {
        domElement.innerHTML = ""
    }
    
})

export const addEateryToDOM = attractionObj => {
    domElement.innerHTML = `
        <h2>Restruarants</h2>
            ${EateryHTML(attractionObj)}
    `
}