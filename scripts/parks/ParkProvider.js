import npsAPIkey from "../Settings.js";

//let parksShortArray = [];
let parks = [];
//export const useShortParks = () => parksShortArray.slice()

export const useParks = () => parks.slice()

// const makeParkObj = (pObj) => {
//     let newParkObj = {};
//     //let latLongArray2 = [];
//     newParkObj.parkName = pObj.fullName;
//     newParkObj.parkCode = pObj.parkCode;
//     newParkObj.parkStates = pObj.states.split(",");
//     // newParkObj.parkType = pObj.designation;
//     // newParkObj.parkDescription = pObj.description;
//     // newParkObj.parkOperatingHours =

//     // get latitude and longitude of park into useable form for weather API 
//     // let latLongArray = pObj.latLong.split(",");             // latLongArray = ["lat:44.679565", "long:-110.012324"]
//     // latLongArray2[0] = latLongArray[0].replace("lat:","");
//     // latLongArray2[1] = latLongArray[1].replace("long:",""); // latLongArray2 = ["44.58388312", "-110.3848129"]
//     // newParkObj.parkLatLong = latLongArray2;
//     return newParkObj;
// }


// const createParksShortArray = (parsedParks) => {
//     let parkNameObj;
//     let data = parsedParks.data;
//     for (const park in data) { 
//         parkNameObj = makeParkObj(data[park]);
//         parksShortArray.push(parkNameObj);
//     }

// }

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
            //console.log(parsedParks.data);
                //createParksShortArray(parsedParks);
                parks = parsedParks.data; 
            }
        )
}
