export const EateryHTML = eObj => {
    return `
        <div class="eatery">
            <h3>${eObj.EateryThatWasChosen}</h3>
            <button type="button" class="detailsBtn" id="detailsBtn-eatery">Show Details</button>
        </div>
    `
}