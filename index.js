// Code your solution in this fill this file
const drivers = ['Joy', 'Philip', 'Tom', 'Mike'];
const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);
console.log(drivers[-2]);
function createFareMultiplier(multiplier){
   return function(fare){
      return multiplier*fare;
  }  
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers, returnDrivers){
   return returnDrivers(drivers);
}
