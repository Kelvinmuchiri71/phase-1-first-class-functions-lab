// Code your solution in this file!

//function to return the first two drivers
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};

//function to return the last two drivers
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};

//Array containing the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//A higher-order function to create a fare multiplier
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return multiplier * fare;
    };
};

// fare doubler function that doubles the fare
const fareDoubler = createFareMultiplier(2);

//fare trippler function that triples the fare
const fareTripler = createFareMultiplier(3);

//function to select different drivers
const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
};
