const returnFirstTwoDrivers = function (array) { 
  return array.slice(0, 2) 
};

const returnLastTwoDrivers = function (array) {
  return array.slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function fareMultiplier (int) {
  return function (fare) { 
    return (fare * int)
   };
};

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = function (array, returnDrivers) {
  return returnDrivers (array)
};