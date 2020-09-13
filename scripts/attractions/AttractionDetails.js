export const addAttractionDetailsToDOM = attractionObj => {

    for (const amenity in attractionObj.amenities) {
        let currentAmenity = attractionObj.amenities[amenity]
        
        if (currentAmenity === true) {
            currentAmenity = "Yes"
        } else {
            currentAmenity = "No"
        }

        attractionObj.amenities[amenity] = currentAmenity
        
    }

    const detailsTarget = document.querySelector(".shownDetails")

    detailsTarget.innerHTML = `
        <p>Location: ${attractionObj.city}, ${attractionObj.state}</p>
        <ul> 
            <li>Souvenirs: ${attractionObj.amenities.souvenirs}</li>
            <li>Restrooms: ${attractionObj.amenities.restrooms}</li>
        </ul>
        <p class="attractionDescription">"${attractionObj.description}"</p>
    `
};
