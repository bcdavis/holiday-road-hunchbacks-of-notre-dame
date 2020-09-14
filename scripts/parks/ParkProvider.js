import npsAPIkey from "../Settings.js";

let parks = [];

export const useParks = () => parks.slice()

export const getParksByState = (stateAbb) => {
    return fetch(`https://developer.nps.gov/api/v1/parks?q=${stateAbb}&api_key=${npsAPIkey.npsKey}`) // put all these into an array of their parkCodes
        .then(response => response.json())
        .then(parsedParks => {
                parks = parsedParks.data; 
            }
        )
}
