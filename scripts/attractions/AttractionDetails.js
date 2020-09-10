export const addAttractionDetailsToDOM = attractionObj => {

    for (const amenety in attractionObj.ameneties) {
        if (attractionObj.ameneties[amenety] === true) {
            attractionObj.ameneties[amenety] = "Yes"
        } else {
            attractionObj.ameneties[amenety] = "No"
        }
    }

    const detailsTarget = document.querySelector(".shownDetails")

    detailsTarget.innerHTML = `
        <p class="attractionDescription">"${attractionObj.description}"</p>
        <p>Location: ${attractionObj.city}, ${attractionObj.state}</p>
        <ul> 
            <li>Souvenirs: ${attractionObj.ameneties.souvenirs}</li>
            <li>Restrooms: ${attractionObj.ameneties.restrooms}</li>
        </ul>
    `
};
