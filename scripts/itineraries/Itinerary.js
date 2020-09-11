export const Itinerary = (objArr) => {
    return `
        <section class="itinerary">
            <h4>Itinerary #${objArr.id}</h4>
            <ul class="itineraryItems">
                <li>Destination: ${objArr.park}</li>
                <li>Attraction: ${objArr.attraction}</li>
                <li>Restaurant: ${objArr.eatery}</li>
            </ul>
        </section>
    `
}