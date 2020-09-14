
const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", event => {   
    if (event.target.id === "statesDropdown") {
        const customEvent = new CustomEvent("stateChosen", {
            detail: {
                stateThatWasChosen: event.target.value // will use this to fetch parks
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
}) 


const renderStateSelector = (stateCollection) => {

    const contentTarget = document.querySelector(".state-list")
    contentTarget.innerHTML = `
        <select class="dropdown offsetCounterBox" id="statesDropdown">
            <option value="0">Please select a state...</option>
            ${
                stateCollection.map(state => {
                    console.log(state);
                    return `
                        <option value=${state}>${state}</option> 
                    `
                }).join("")
            }
        </select>
    `;
}

export const StateSelect = () => {
    const stateAbbreviations = [
        'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA',
        'HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
        'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
        'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
        'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'
    ];
    renderStateSelector(stateAbbreviations)
}