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

function getNameAndGreet() {
  let userName = "";

  do {
    userName = prompt("Dear guest, please type your name");
  } while (!userName);

  alert(`Hi ${userName}! Nice to meet you!`);

  return userName;
}

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
  } else {
    return accumulator;
  }
}

function calculateAndShowAverageCost(flights) {
  const sumOfFlights = flights.reduce(reduceFunctionAvgCost, flights[0].cost);

  const averageCost = sumOfFlights / flights.length;

  console.log(`The average price of the available flights is ${averageCost}`);
}

function reduceFunctionCountScales(accumulator, currentValue) {
  if (currentValue.scale === true) {
    return (accumulator += 1);
  } else {
    return accumulator;
  }
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
    const currentDestination = objectsArray[i]["to"];
    lastDestinations = lastDestinations + currentDestination + ", ";
  }

  console.log(`The last destinations of the day are ${lastDestinations}`);
}

function getTypeOfUser() {
  let userType = "";
  let isUserError = false;

  do {
    userType = prompt("Please type whether you are ADMIN or USER");
    isUserError =
      userType === null ||
      (userType.toUpperCase() !== "ADMIN" && userType.toUpperCase() !== "USER");

    if (isUserError) {
      alert("Incorrect user");
    }
  } while (isUserError);

  return userType.toUpperCase();
}

function getTypeOfOperationAdmin() {
  let typeOfOperation = "";
  do {
    typeOfOperation = prompt(
      "Please type the operation you wish to do: 'create' or 'delete' flights"
    );
  } while (
    !typeOfOperation ||
    (typeOfOperation.toLowerCase() !== "delete" &&
      typeOfOperation.toLowerCase() !== "create")
  );

  return typeOfOperation.toLowerCase();
}

function wantToDoMore(action) {
  let wishToDoMore = "";

  do {
    wishToDoMore = prompt(
      `Do you wish to ${action} any other flight? Please type "yes" or "no".`
    );
  } while (
    !wishToDoMore ||
    (wishToDoMore.toLowerCase() !== "yes" &&
      wishToDoMore.toLowerCase() !== "no")
  );

  if (wishToDoMore.toLowerCase() === "yes") {
    return true;
  }
}

function doesIdExist(flights, id) {
  let existence = false;

  for (let i = 0; i < flights.length; i++) {
    let currentP = flights[i];

    if (currentP.id === id) {
      existence = true;
    }
  }
  return existence;
}

function deleteFlights(flights) {
  const flightToDelete = prompt(
    "Insert the ID of the flight you wish to delete"
  );

  if (
    isNaN(Number(flightToDelete)) ||
    flightToDelete === null ||
    flightToDelete === ""
  ) {
    alert("Please insert an ID number");
    return deleteFlights(flights);
  }
  if (doesIdExist(flights, Number(flightToDelete)) === false) {
    alert("The ID introduced does not exist. Please enter a valid ID");
    return deleteFlights(flights);
  }

  let positionToDelete = "";

  for (let i = 0; i < flights.length; i++) {
    let currentP = flights[i];

    if (currentP.id === Number(flightToDelete)) {
      positionToDelete = i;
    }
  }

  flights.splice(positionToDelete, 1);

  alert("Flight deleted");

  if (wantToDoMore("delete")) {
    deleteFlights(flights);
  } else {
    return;
  }
}

function askAndReturnIfScale() {
  let scale = "";

  do {
    scale = prompt("Does it have any stop? Please type 'yes' or 'no'.");
  } while (
    !scale ||
    (scale.toLowerCase() !== "yes" && scale.toLowerCase() !== "no")
  );

  if (scale === "yes") {
    return true;
  } else {
    return false;
  }
}

function getPrice() {
  let price = "";

  do {
    price = prompt("Price");
  } while (price === null || isNaN(Number(price)) || price === "");

  return Number(price);
}

function checkIfWord(way) {
  let destionation;

  do {
    destionation = prompt(`Where ${way}?`);
  } while (
    destionation === null ||
    !isNaN(Number(destionation)) ||
    destionation === ""
  );

  return destionation;
}

function createFlights(flights) {
  if (flights.length === 15) {
    alert(
      "The maximum number of flights have been reached. Please delete a flight before creating a new one"
    );
    deleteFlights(flights);
  } else {
    const newFlight = {};
    newFlight.id = flights[flights.length - 1]["id"] + 1;
    newFlight.to = checkIfWord("to");
    newFlight.from = checkIfWord("from");
    newFlight.cost = getPrice();
    newFlight.scale = askAndReturnIfScale();

    flights.push(newFlight);

    if (wantToDoMore("create")) {
      createFlights(flights);
    }
  }
}

function askIfAnotherOperation() {
  let ifAnotherOperation = "";

  do {
    ifAnotherOperation = prompt(
      "Do you wish to do any other operation? Type 'yes' or 'no'."
    );
  } while (
    !ifAnotherOperation ||
    (ifAnotherOperation.toLowerCase() !== "yes" &&
      ifAnotherOperation.toLowerCase() !== "no")
  );

  if (ifAnotherOperation.toLowerCase() === "yes") {
    return true;
  } else {
    return false;
  }
}

function doAdminActions(listOfFlights) {
  let typeOfOperation = getTypeOfOperationAdmin();

  if (typeOfOperation === "create") {
    createFlights(listOfFlights);
    showFlights(listOfFlights);
    if (askIfAnotherOperation()) {
      doAdminActions(listOfFlights);
    }
  }
  if (typeOfOperation === "delete") {
    deleteFlights(listOfFlights);
    showFlights(listOfFlights);
    if (askIfAnotherOperation()) {
      doAdminActions(listOfFlights);
    }
  }
}

function showFlightByPrice(flights) {
  let priceToSearch = +prompt(
    "What is the maximum price you are willing to pay for a flight?"
  );

  if (!priceToSearch) {
    alert("You must type a valid number");
    showFlightByPrice(flights);
  } else {
    console.log("The result of your search is the following:");

    flights.forEach((element) => {
      if (element.cost <= priceToSearch) {
        console.log(element);
      }
    });
    if (askIfAnotherOperation()) {
      showFlightByPrice(flights);
    }
  }
}

function airlinesPro(listOfFlights) {
  const name = getNameAndGreet();

  showFlights(listOfFlights);

  calculateAndShowAverageCost(listOfFlights);

  showNumberOfScales(listOfFlights);

  showLastDestinations(listOfFlights);

  if (getTypeOfUser() === "ADMIN") {
    doAdminActions(listOfFlights);
  } else {
    showFlightByPrice(listOfFlights);
  }

  alert(`Thank you for using our services ${name}! We hope to see you soon`);
}

airlinesPro(flights);
