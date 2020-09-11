/**
 * For parks, these are the things that should be in the details:
 * 
 * - any and all activities listed under an "activities" header
 * - description
 * - (directionsInfo?)
 * - entrance fees
 * - operating hours:
 *      - "open" [ standard hours ]
 *      - "closed" [exceptions]
 * 
 * 
 * 
 * 
 */


export const addParkDetailsToDOM = parkObj => {

    for (const amenety in parkObj.ameneties) {
        let currentAmenety = parkObj.ameneties[amenety]
        
        if (currentAmenety === true) {
            currentAmenety = "Yes"
        } else {
            currentAmenety = "No"
        }

        parkObj.ameneties[amenety] = currentAmenety
        
    }

    const detailsTarget = document.querySelector(".shownDetails")

    detailsTarget.innerHTML = `
        <p class="parkDescription">"${parkObj.description}"</p>
        <p>Location: ${parkObj.city}, ${parkObj.state}</p>
        <ul> 
            <li>Souvenirs: ${parkObj.ameneties.souvenirs}</li>
            <li>Restrooms: ${parkObj.ameneties.restrooms}</li>
        </ul>
    `
};