export const addAttractionDetailsToDOM = attractionObj => {

    for (const amenity in attractionObj.ameneties) {
        let currentAmenity = attractionObj.ameneties[amenity]
        
        if (currentAmenity === true) {
            currentAmenity = "Yes"
        } else {
            currentAmenity = "No"
        }

        attractionObj.ameneties[amenity] = currentAmenity
        
    }

    const detailsTarget = document.querySelector("#shownDetails-attraction")

    detailsTarget.innerHTML = `
    <p class="description attractionDescription"><em>${attractionObj.description}</em></p>
        <p>Location: ${attractionObj.city}, ${attractionObj.state}</p>
        <ul><u><b>Ameneties</u></b> 
            <li>Souvenirs: ${attractionObj.ameneties.souvenirs}</li>
            <li>Restrooms: ${attractionObj.ameneties.restrooms}</li>
        </ul>
    `
};
