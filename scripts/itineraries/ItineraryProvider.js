let itineraries = []

const eventHub = document.querySelector(".container");

const dispatchStateChangeEvent = () => {
    const itineraryStateChangedEvent = new CustomEvent("itineraryStateChanged")

    eventHub.dispatchEvent(itineraryStateChangedEvent)
}

export const useItineraries = () => itineraries.slice()

export const getItineraries = () => {
    return fetch('http://localhost:8088/itineraries')
        .then(response => response.json())
        .then(parsedItineraries => itineraries = parsedItineraries)
}

export const saveItinerary = itinerary => {
    return fetch('http://localhost:8088/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itinerary)
    })
    .then(getItineraries)
    .then(dispatchStateChangeEvent)
}