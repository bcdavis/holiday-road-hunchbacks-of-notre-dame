export const Itinerary = (objarr) => {
    return `
        <section class="itinerary">
            <h4>Itinerary</h4>
            <ul class="itineraryItems">
                <li>${objarr.park}</li>
                <li>${objarr.attraction}</li>
                <li>${objarr.eatery}</li>
            </ul>
        </section>
    `
}