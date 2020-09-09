import { getEateries, useEateries } from "./EateryProvider.js"

const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".eateries-list")


const render = eateryCollection => {
    console.log("Rendering Eatery Dropdown")
    contentTarget.innerHTML = `
        <select class="dropdown eateriesDropdown" id="eateriesDropdown">
            <option value="0">Please select an eatery...</option>
            ${
                eateryCollection.map((eObj) => {
                    return `<option id="${eObj.id}" value="${eObj.businessName}">${eObj.businessName}</option>`
                })
            }
        </select>
    `
}


const compare = (a, b) => {

    const eatery1 = a.businessName.toUpperCase();
    const eatery2 = b.businessName.toUpperCase();

    let comparison = 0;
    if (eatery1 > eatery2) {
      comparison = 1;
    } else if (eatery1 < eatery2) {
      comparison = -1;
    }
    return comparison;
  }


export const EateryList = () => {
   getEateries()
    .then(() => {
        const e = useEateries()
        e.sort(compare);
        render(e)
    })

}