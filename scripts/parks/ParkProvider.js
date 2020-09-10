import npsAPIkey from "../Settings.js";

let parksShortArray = [];
export const useShortParks = () => parksShortArray.slice()

const makeParkObj = (pObj) => {
    let newParkObj = {};
    newParkObj.parkName = pObj.fullName;
    newParkObj.parkCode = pObj.parkCode;
    newParkObj.parkType = pObj.designation;
    return newParkObj;
}

const createParksShortArray = (parsedParks) => {
    let parkNameObj;
    let data = parsedParks.data;
    for (const park in data) { 
        parkNameObj = makeParkObj(data[park]);
        parksShortArray.push(parkNameObj);
    }

}

export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?limit=5&start=0&api_key=${npsAPIkey.npsKey}`) // put all these into an array of their parkCodes
        .then(response => response.json())
        .then(parsedParks => {
                createParksShortArray(parsedParks);
            }
        )
}
