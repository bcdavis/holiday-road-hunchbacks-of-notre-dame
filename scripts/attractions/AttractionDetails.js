export const addAttractionDetailsToDOM = attractionObj => {

    for (const amenety in attractionObj.ameneties) {
        let currentAmenety = attractionObj.ameneties[amenety]
        
        if (currentAmenety === true) {
            currentAmenety = "Yes"
        } else {
            currentAmenety = "No"
        }

        attractionObj.ameneties[amenety] = currentAmenety
        
    }

    const detailsTarget = document.querySelector(".shownDetails")

    detailsTarget.innerHTML = `
        <p>Location: ${attractionObj.city}, ${attractionObj.state}</p>
        <ul> 
            <li>Souvenirs: ${attractionObj.ameneties.souvenirs}</li>
            <li>Restrooms: ${attractionObj.ameneties.restrooms}</li>
        </ul>
        <p class="attractionDescription">"${attractionObj.description}"</p>
    `
};
