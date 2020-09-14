import npsAPIkey from "../Settings.js";

//let parksShortArray = [];
let parks = [];
//export const useShortParks = () => parksShortArray.slice()

export const useParks = () => parks.slice()

// export const getParks = () => {
//     return fetch(`https://developer.nps.gov/api/v1/parks?q=TX&api_key=${npsAPIkey.npsKey}`) // put all these into an array of their parkCodes
//         .then(response => response.json())
//         .then(parsedParks => {
//             //console.log(parsedParks.data);
//                 //createParksShortArray(parsedParks);
//                 parks = parsedParks.data; 
//             }
//         )
// }

export const getParksByState = (stateAbb) => {
    console.log(`https://developer.nps.gov/api/v1/parks?q=${stateAbb}&api_key=${npsAPIkey.npsKey}`);
    return fetch(`https://developer.nps.gov/api/v1/parks?q=${stateAbb}&api_key=${npsAPIkey.npsKey}`) // put all these into an array of their parkCodes
        .then(response => response.json())
        .then(parsedParks => {
                parks = parsedParks.data; 
            }
        )
}
