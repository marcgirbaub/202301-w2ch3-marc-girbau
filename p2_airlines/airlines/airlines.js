"use strict";

const flights = [
  { id: 0, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 1, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 2, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 3, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 4, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 5, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 6, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 7, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 8, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 9, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

function showFlights(flights) {
  flights.forEach((flight) => {
    if (flight.scale === true) {
      console.log(
        `Flight number ${flight.id} from ${flight.from} to ${flight.to} costs ${flight.cost} euros and has a stop.`
      );
    } else {
      console.log(
        `Flight number ${flight.id} from ${flight.from} to ${flight.to} costs ${flight.cost} euros and has no stop.`
      );
    }
  });
}

function reduceFunctionAvgCost(accumulator, currentValue, index) {
  if (index > 0) {
    return accumulator + currentValue.cost;
  }

  return accumulator;
}

function calculateAndShowAverageCost(flights) {
  const sumOfFlights = flights.reduce(reduceFunctionAvgCost, flights[0].cost);

  const averageCost = sumOfFlights / flights.length;

  console.log(`The average price of the available flights is ${averageCost}`);
}

function reduceFunctionCountScales(accumulator, currentValue) {
  if (currentValue.scale === true) {
    accumulator += 1;
    return accumulator;
  }

  return accumulator;
}

function showNumberOfScales(flights) {
  const counterOfScales = flights.reduce(reduceFunctionCountScales, 0);

  console.log(
    `A total of ${counterOfScales} flights have scale, out of ${flights.length}`
  );
}

function showLastDestinations(objectsArray) {
  let lastDestinations = "";

  for (let i = 5; i < objectsArray.length; i++) {
    const currentDestination = objectsArray[i].to;
    lastDestinations = lastDestinations + currentDestination + ", ";
  }

  console.log(`The last destinations of the day are ${lastDestinations}`);
}

function airlines(listOfFlights) {
  const userName = prompt("Dear guest, please type your name");
  alert(`Hi ${userName}! Nice to meet you!`);

  showFlights(listOfFlights);

  calculateAndShowAverageCost(listOfFlights);

  showNumberOfScales(listOfFlights);

  showLastDestinations(listOfFlights);
}

airlines(flights);
