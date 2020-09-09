export const AttractionHTML = attractionObj => {
    return `
        <div class="attraction">
            <h3>${attractionObj.attractionThatWasChosen}</h3>
            <button type="button" class="detailsBtn">Show Details</button>
        </div>
    `
}