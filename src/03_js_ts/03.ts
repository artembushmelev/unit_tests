import { StudentType } from "../02_js_ts/02";
import {
  CityType,
  GovernmentBuildingType,
  HousesType,
} from "../02_js_ts/02_02";

export const sum = (a: number, b: number) => {
  return a + b;
};

export const addSkill = (student: StudentType, skill: string) => {
  student.technologies.push({
    id: new Date().getTime(),
    title: skill,
  });
};

export const makeStudentActive = (student: StudentType) => {
  student.isActive = true;
};

export const doesStudentLiveIn = (student: StudentType, cityName: string) => {
  return student.address.city.title === cityName;
};

//////////////////////

export const addMoneyToBudget = (
  government: GovernmentBuildingType,
  n: number
) => {
  government.budget += n;
};

export const repairHouse = (houses: HousesType) => {
  houses.repaired = true;
};

export const toFireStaff = (
  GovernmentBuilding: GovernmentBuildingType,
  n: number
) => {
    GovernmentBuilding.staffCount -= n
};

export const toHireStaff = (
    GovernmentBuilding: GovernmentBuildingType,
    n: number
  ) => {
      GovernmentBuilding.staffCount += n
  };

