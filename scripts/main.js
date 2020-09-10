import { AttractionSelect } from "./attractions/AttractionSelect.js";
import { EateryList } from "./eateries/EateryList.js";
import { renderAttractionSection } from "./attractions/AttractionList.js";
import { ParkSelect } from "./parks/ParkSelect.js";
import { renderParkSection } from "./parks/ParkList.js";
// import { getParks } from "./parks/ParkProvider.js";

// getParks();

ParkSelect();
AttractionSelect();
EateryList();


renderParkSection();
renderAttractionSection();