"use strict";

function addition(num1, num2) {
  let result = Number(num1) + Number(num2);
  if (Number.isInteger(result)) {
    return result;
  } else {
    return result.toFixed(3);
  }
}

function substraction(num1, num2) {
  let result = num1 - num2;
  if (Number.isInteger(result)) {
    return result;
  } else {
    return result.toFixed(3);
  }
}

function multiplication(num1, num2) {
  let result = num1 * num2;
  if (Number.isInteger(result)) {
    return result;
  } else {
    return result.toFixed(3);
  }
}

function division(num1, num2) {
  let result = num1 / num2;
  if (Number.isInteger(result)) {
    return result;
  } else {
    return result.toFixed(3);
  }
}

function additionShown(num1, num2) {
  return `${num1} + ${num2} = ${addition(num1, num2)}`;
}

function substractionShown(num1, num2) {
  return `${num1} - ${num2} = ${substraction(num1, num2)}`;
}

function multiplicationShown(num1, num2) {
  return `${num1} * ${num2} = ${multiplication(num1, num2)}`;
}

function divisionShown(num1, num2) {
  return `${num1} / ${num2} = ${division(num1, num2)}`;
}

function calculator() {
  let firstNumber = prompt("Type the first number you want to operate");
  let secondNumber = prompt("Type the second number you want to operate");

  if (isNaN(firstNumber) && isNaN(secondNumber)) {
    alert("Both values introduced are not numbers");
    calculator();
  } else if (isNaN(firstNumber)) {
    alert("The first value introduced is not a number");
    calculator();
  } else if (isNaN(secondNumber)) {
    alert("The second value introduced is not a number");
    calculator();
  } else if (firstNumber === "" && secondNumber > 0) {
    console.log(Math.sqrt(secondNumber));
  } else if (secondNumber === "" && firstNumber > 0) {
    console.log(Math.sqrt(firstNumber));
  } else if (firstNumber === "" && secondNumber === "") {
    alert("You are required to introduce at least one value");
    calculator();
  } else if (firstNumber === "" && secondNumber < 0) {
    alert("Error: negative values have no square root");
    calculator();
  } else if (secondNumber === "" && firstNumber < 0) {
    alert("Error: negative values have no square root");
    calculator();
  } else {
    let calculationResult = [];

    let resultAddition = additionShown(firstNumber, secondNumber);
    let resultSubstraction = substractionShown(firstNumber, secondNumber);
    let resultMultiplication = multiplicationShown(firstNumber, secondNumber);
    let resultDivision = divisionShown(firstNumber, secondNumber);

    calculationResult = [
      resultAddition,
      resultSubstraction,
      resultMultiplication,
      resultDivision,
    ];

    console.log(calculationResult);
  }
}

calculator();
