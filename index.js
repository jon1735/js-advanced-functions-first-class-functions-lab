// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2)
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(drivers.length-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fareQuintupler){
    return function(){
        return fareQuintupler * 5
    }
}

function fareDoubler(faredoubler){
    return faredoubler * 2
}

function fareTripler(fareTripler){
    return fareTripler * 3
}

function selectDifferentDrivers(drivers, name){
    return name(drivers)
}
