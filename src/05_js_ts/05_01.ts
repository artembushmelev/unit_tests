import { GovernmentBuildingType, HousesType } from "../02_js_ts/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (government: Array<GovernmentBuildingType>) => {
    return government.map((b) => b.address.street.title)
};

export const getStreetsTitlesOfHouses = (houses: Array<HousesType>) => {
    return houses.map((h) => h.address.street.title) 
}


export const createMessages = (houses: Array<HousesType>) => {
    return houses.map((h) => {
        return `Hello guys from ${h.address.street.title}`
    })
}

