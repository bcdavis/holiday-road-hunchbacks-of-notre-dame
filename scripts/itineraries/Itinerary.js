export const Itinerary = (objArr) => {
    return `
        <section class="itinerary">
            <h4>Itinerary #${objArr.id}</h4>
            <ul class="itineraryItems">
                <li><strong>Destination:</strong> ${objArr.park}</li>
                <li><strong>Attraction:</strong> ${objArr.attraction}</li>
                <li><strong>Restaurant:</strong> ${objArr.eatery}</li>
            </ul>
        </section>
    `
}