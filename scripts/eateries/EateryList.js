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
    const Stuff = eObj.ameneties
    for (const amenety in Stuff) {
     let x = Stuff[amenety]
     Stuff[amenety] = x.toString().replace("true","Yes").replace("false","No") 
    }
    console.log("Object After",eObj)
    contentTarget.innerHTML =  `
    <div class="eatery">
        <h3>${eObj.name}</h3>
        <p class="eateryDescription">Description: ${eObj.description}</p>
        <p>Location: ${eObj.city}, ${eObj.state}</p>
        <ul>Ameneties: 
        <li>Wifi: ${eObj.ameneties.wifi}</li>
        <li>Restrooms: ${eObj.ameneties.restrooms}</li>
        <li>Pets Allowed: ${eObj.ameneties.pet}</li>
        <li>Playgrounds: ${eObj.ameneties.playground}</li>
        <li>Wheelchair Accessible: ${eObj.ameneties.wheelchair}</li>
        <li>Diaper Facility: ${eObj.ameneties.diaper}</li>
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
        <h2>Restaurant</h2>
            ${EateryHTML(eObj)}
    `
}