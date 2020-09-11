import { useItineraries, getItineraries } from "./ItineraryProvider.js"
import { Itinerary } from "./Itinerary.js"


const eventHub = document.querySelector(".container")

export const ItineraryList = () => {
    getItineraries()
        .then(() => {
            const itinerariesArray = useItineraries();
            addItinerariesToAside(itinerariesArray)
            }
        )
}

const addItinerariesToAside = arrayOfItineraries => {
    const domElement = document.querySelector(".itinerariesList")
    let HTMLArray = arrayOfItineraries.map(itinerary => Itinerary(itinerary)).join("")

    domElement.innerHTML = `
        ${HTMLArray}      
    `
}


eventHub.addEventListener("itineraryStateChanged", () => ItineraryList())