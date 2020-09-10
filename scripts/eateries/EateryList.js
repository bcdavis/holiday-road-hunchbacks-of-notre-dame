import { EateryHTML } from "./Eatery.js"

const eventHub = document.querySelector(".container")
let contentTarget 

eventHub.addEventListener("eateryChosen", event => {
    
    if (event.detail.eateryThatWasChosen !== "0") {
        addEateryToDOM(event.detail)
    } else {
        contentTarget.innerHTML = ""
    }
    
})
eventHub.addEventListener("eateryDetails", event => {
    
        addEateryDetailsToDOM(event.detail)
    
})

const addEateryDetailsToDOM = (eObj) => {
    let wifi = eObj.ameneties.wifi.toString().replace("true","Yes").replace("false","No")
    let pet = eObj.ameneties.pet.toString().replace("true","Yes").replace("false","No")
    let playground = eObj.ameneties.playground.toString().replace("true","Yes").replace("false","No")
    let restrooms = eObj.ameneties.restrooms.toString().replace("true","Yes").replace("false","No")
    let diaper = eObj.ameneties.diaper.toString().replace("true","Yes").replace("false","No")
    let wheelchair = eObj.ameneties.wheelchair.toString().replace("true","Yes").replace("false","No")
    contentTarget.innerHTML =  `
    <div class="eatery">
        <h3>${eObj.name}</h3>
        <p class="eateryDescription">Description: ${eObj.description}</p>
        <p>Location: ${eObj.city}, ${eObj.state}</p>
        <ul>Ameneties: 
        <li>Wifi: ${wifi}</li>
        <li>Restrooms: ${restrooms}</li>
        <li>Pets Allowed: ${pet}</li>
        <li>Playgrounds: ${playground}</li>
        <li>Wheelchair Accessible: ${wheelchair}</li>
        <li>Diaper Facility: ${diaper}</li>
        </ul>
        <button type="button" class="hideBtn" id="hideBtn-eatery">Hide Details</button>
    </div>
`;
}
export const renderEaterySection = () => {
    const domElement = document.querySelector(".previewContainer")
    domElement.innerHTML += ` 
        <section class="mainPreviewSection" id="eaterySection"></section>
    `
    contentTarget = document.getElementById("eaterySection")
}

export const addEateryToDOM = eObj => {
    contentTarget.innerHTML = `
        <h2>Restruarant</h2>
            ${EateryHTML(eObj)}
    `
}