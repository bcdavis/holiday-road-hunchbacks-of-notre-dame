/**
 * This file exports a function which takes in a park object that has the park's:
 *  - name
 *  - code
 *  - designation (type)
 * 
 * The funciton will fetch the individual state park by it's park code
 * and return with an object containing:
 * - description
 * - operating hours
 * - admissions
 * - activities
 * 
 * 
 * - operating hours: [
 *      Each element in the operatingHours array is an object that contains:
 *          - An object which lists the days of the week the park is accessible/open ("standardHours")
 *          - An array of objects containing exceptions to the previous object ("exceptions")
 *          - The name the "standardHours" object and the "exceptions" array are referencing 
 *              -- (default is "All Park Hours", but could also specify a certain entrance (e.g. "West Entrance"))
 *          - A written description of what the operating hours mean for the named reference.
 * 
 * 
 *          The exceptions array contains one or more specific exception objects, each of which contain:
 *              - An object which lists the days of the week the park is closed ("exceptionHours") for this specific exception
 *              - The name of the specific exception
 *              - The start date of the specific exception 
 *              - The end date of the specific exception
 *      ]
 * - Admissions:
 *      - entrance fees:
 *          -[Title, cost, description]
 *      - entrance passes: 
 *          - [title, cost, description]
 * - any and all activities listed under an "activities" header

 */



const ParkEntranceFeesHTML = (parkObj) => {
    let temp = parkObj.entranceFees;
    let feesHTML = "";
    for(const fee of temp){
        feesHTML += `
        <div class="entranceFeeCard">
            <p class="entranceFeeTitle">${fee.title}</p>
            <ul>
                <li class="entranceFeeCost"><strong>Cost:</strong> $${fee.cost}</li>
                <li class="entranceFeeDescription"><strong>Description:</strong> ${fee.description}</li>
            </ul>
        </div>
        `
    }

    return feesHTML;
}

const ParkEntrancePassesHTML = (parkObj) => {
    //console.log(parkObj.entrancePasses);
    let temp = parkObj.entrancePasses;
    let passesHTML = "";
    for(const pass of temp){
        //console.log(pass.title, pass.cost, pass.description);
        passesHTML +=`
        <div class="entrancePassCard">
            <p class="entrancePassTitle">${pass.title}</p>
            <ul>
                <li class="entrancePassCost">Cost: $${pass.cost}</li>
                <li class="entrancePassDescription">Description: ${pass.description}</li>
            </ul>
        </div>
        `
    }

    return passesHTML;
}

const eventHub = document.querySelector(".container");

// eventHub.addEventListener(, event => {
//     //let eventDetail = event.detail;
//     if(event.target.value !== "0"){
//         // valid national park
//     }
//     else {
//         // invalid national park
//     }
// })

export const addParkDetailsToDOM = (parkObj) => {

    const parkDetailsTarget = document.querySelector("#shownDetails-park")
    let feeListHTML = ParkEntranceFeesHTML(parkObj);
    let passListHTML = ParkEntrancePassesHTML(parkObj);

    parkDetailsTarget.innerHTML = `
        <p class="description parkDescription"><em>${parkObj.description}</em></p>

        <div class="parkAdmissions">
            <p class="title">Admissions</p>
            <div class="feesAndPassesBox">
                <div class="entranceFees flex-left2">
                    <p>Entrance Fees:</p>
                    <div class="entranceFeeCardHolder">
                        ${feeListHTML}
                    </div>
                </div>
                <div class="entrancePasses flex-right2">
                    <p>Entrance Passes:</p>
                    <div class="entrancePassCardHolder">
                        ${passListHTML}
                    </div>
                </div>
            </div>
        </div>
    `
};