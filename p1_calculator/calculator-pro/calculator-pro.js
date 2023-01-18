"use strict";

function addition(arrayAddition) {
  let result = 0;
  arrayAddition.forEach((element) => {
    result += Number(element);
  });

  if (Number.isInteger(result)) {
    return Number(result);
  } else {
    return parseFloat(result.toFixed(3));
  }
}

function substraction(arraySubstraction) {
  let result = arraySubstraction.reduce(
    (accumulator, currentValue) => accumulator - currentValue
  );

  if (Number.isInteger(result)) {
    return result;
  } else {
    return parseFloat(result.toFixed(3));
  }
}

function multiplication(arrayMultiplication) {
  let result = arrayMultiplication.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );

  if (Number.isInteger(result)) {
    return result;
  } else {
    return parseFloat(result.toFixed(3));
  }
}

function division(arrayDivision) {
  let result = arrayDivision.reduce(
    (accumulator, currentValue) => accumulator / currentValue
  );

  if (Number.isInteger(result)) {
    return result;
  } else {
    return parseFloat(result.toFixed(3));
  }
}

function sqaureRoot(num1) {
  return Math.sqrt(num1);
}

function askIfAnotherOperation() {
  const userResponse = prompt(
    "Do you want to do another operation? Type 'yes' or 'no'"
  );

  if (userResponse === "yes") {
    return true;
  } else if (userResponse !== "yes" && userResponse !== "no") {
    alert("Please type 'yes' or 'no'");
    askIfAnotherOperation();
  } else {
    return false;
  }
}

function getNumbers() {
  let numberToOperate;
  let arrayToOperate = [];
  do {
    numberToOperate = prompt(
      "Type a number to operate. If you wish to stop type '='"
    );
    if (isNaN(numberToOperate) && numberToOperate !== "=") {
      alert("The value introduced is not a number");
    } else if (numberToOperate === "") {
      alert("You are required to introduce a number");
    } else if (numberToOperate !== "=") {
      arrayToOperate.push(numberToOperate);
    } else {
      if (numberToOperate !== "=") {
        alert("An error has occurred, add another number");
      }
    }
  } while (numberToOperate !== "=");

  return arrayToOperate;
}

function calculatorPro() {
  const arrayToOperate = getNumbers();

  if (arrayToOperate.length === 1 && arrayToOperate[0] > 0) {
    alert(
      `The square root of ${arrayToOperate[0]} is ${sqaureRoot(
        arrayToOperate[0]
      )}`
    );
  } else if (arrayToOperate.length === 1 && arrayToOperate[0] < 0) {
    alert("Error, negative values have no square root");
    calculatorPro();
  } else {
    let resultAddition = addition(arrayToOperate);
    let resultSubstraction = substraction(arrayToOperate);
    let resultMultiplication = multiplication(arrayToOperate);
    let resultDivision = division(arrayToOperate);

    alert(`The values introduced are ${arrayToOperate} and the results of the operations are the following:
    Addition = ${resultAddition}
    Subtraction = ${resultSubstraction}
    Multiplication = ${resultMultiplication}
    Division = ${resultDivision}`);
  }

  if (askIfAnotherOperation() === true) {
    calculatorPro();
  } else {
    alert("Thank you for using me");
  }
}

calculatorPro();
