import { CityType, GovernmentBuildingType } from "../02_js_ts/02_02";

export const demolishHousesOnTheStreet = (city: CityType, title: string) => {
  city.houses = city.houses.filter((h) => h.address.street.title !== title);
};

export const getBuildingsWithStaffCountGreaterThen = (
    governmentBuildings:Array<GovernmentBuildingType>,
  n: number
) => governmentBuildings.filter((s) => s.staffCount > n) ;
