// Code your solution in this file!

const returnFirstTwoDrivers= function (names) {
    return names.slice(0,2)
}


const returnLastTwoDrivers= function (names) {
    return names.slice(-2)
}

const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function (fare) {
        return int * fare
    }
}
const fareDoubler= createFareMultiplier(2)

const fareTripler= createFareMultiplier(3)

const selectDifferentDrivers= function (driversNames, cb) {
    if (cb === returnFirstTwoDrivers) {
        return cb(driversNames)
    } else if (cb === returnLastTwoDrivers) {
        return cb(driversNames)
    }
}