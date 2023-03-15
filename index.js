const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = (arr) => arr.slice(0, 2);

const returnLastTwoDrivers = (arr) => arr.slice(-2);


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}

function fareDoubler(fare) {
  return fare * 2;
}

function fareTripler(fare) {
 return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers, func){
    return func(drivers);
}