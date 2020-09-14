import { AttractionSelect } from "./attractions/AttractionSelect.js";
import { EateryList } from "./eateries/EaterySelect.js";
import { ParkSelect } from "./parks/ParkSelect.js";
import { StateSelect } from "./parks/states/StateSelect.js";
import { renderParkSection } from "./parks/ParkList.js";
import { renderAttractionSection } from "./attractions/AttractionList.js";
import { renderEaterySection } from "./eateries/EateryList.js";
import { ItineraryList } from "./itineraries/ItineraryList.js";
import { SaveButton } from "./itineraries/ItineraryButton.js";
import "./weather/WeatherList.js"

StateSelect();
ParkSelect();
AttractionSelect();
EateryList();

SaveButton();
renderParkSection();
renderAttractionSection();
renderEaterySection();

ItineraryList();
