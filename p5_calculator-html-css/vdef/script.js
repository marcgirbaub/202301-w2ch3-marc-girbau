"use strict";

const bodyElement = document.body;
const numberButtonsEl = document.querySelectorAll("[data-number]");
const operationButtonsEl = document.querySelectorAll("[data-operation]");
const clearAllButtonEl = document.querySelector("[data-clear]");
const deleteButtonEl = document.querySelector("[data-delete]");
const equalsButtonEl = document.querySelector("[data-equals]");
const changeSignEl = document.querySelector("[data-sign]");
const previousOperandDisplayEl = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandDisplayEl = document.querySelector(
  "[data-current-operand]"
);
const displayElement = document.getElementsByClassName("display")[0];
const darkModeButtonEl = document.getElementsByClassName("dark-mode-button")[0];

let initialNumber = "0";
let firstNumberOperand = "0";
let secondNumberOperand = "0";
let operation = "";
let upperDisplay = "0";
let lowerDisplay = "0";
let operationResult = "0";
let equalsCounter = 0;
let operationButtonCounter = 0;
let clickedNum;
let deletionCounter = 0;

const getDisplayNormal = () => {
  currentOperandDisplayEl.classList.add("current-operand");
  currentOperandDisplayEl.classList.remove("current-operand-smaller");
  displayElement.classList.add("display");
  displayElement.classList.remove("lower");
};

const getDisplaySmaller = () => {
  currentOperandDisplayEl.classList.remove("current-operand");
  currentOperandDisplayEl.classList.add("current-operand-smaller");
  displayElement.classList.remove("display");
  displayElement.classList.add("lower");
};

const addition = (num1, num2) => {
  return num1 + num2;
};

const substraction = (num1, num2) => {
  return num1 - num2;
};

const multiplication = (num1, num2) => {
  return num1 * num2;
};

const division = (num1, num2) => {
  if (num2 === "0" || num2 === 0) {
    return "Error";
  } else {
    return num1 / num2;
  }
};

const operate = (num1, num2, operation) => {
  let result;
  switch (operation) {
    case "+":
      result = addition(num1, num2);
      break;
    case "-":
      result = substraction(num1, num2);
      break;
    case "x":
      result = multiplication(num1, num2);
      break;
    case "/":
      result = division(num1, num2);
      break;
  }

  let finalResult;
  if (result > 1000000000 || result < -100000000) {
    finalResult = result.toExponential(2);
  } else if (result === "Error") {
    finalResult = "Error";
  } else if (
    result.toString().slice(0, 6)[result.toString().slice(0, 6).length - 1] ===
    "."
  ) {
    finalResult = result.toString().slice(0, 9);
  } else {
    finalResult = result.toString().slice(0, 9);
  }

  return finalResult;
};

const isLengthGreaterThanSix = (numberString) => {
  if (numberString.length > 6) {
    return true;
  } else {
    return false;
  }
};

const appendNumbers = (clickedNumber) => {
  if (equalsCounter > 0) {
    clear();
  }
  deletionCounter = 0;

  if (initialNumber.toString().length === 9) {
    return;
  } else if (clickedNumber === "." && initialNumber.includes(".")) {
    return;
  } else if (
    initialNumber.includes(".") &&
    initialNumber.slice(initialNumber.indexOf(".") + 1).length >= 3
  ) {
    return;
  } else if (
    initialNumber.toString().length === 1 &&
    initialNumber.toString().charAt(0) === "0" &&
    clickedNumber !== "0" &&
    clickedNumber !== "."
  ) {
    initialNumber = "";
    initialNumber = initialNumber.toString() + clickedNumber.toString();
  } else if (
    initialNumber.toString().length === 1 &&
    initialNumber.toString().charAt(0) === "0" &&
    clickedNumber === "0"
  ) {
    initialNumber = "0";
  } else if (clickedNumber === ".") {
    initialNumber = initialNumber.toString() + ".";
  } else {
    initialNumber = initialNumber.toString() + clickedNumber.toString();
  }

  clickedNum = clickedNumber;
};

const chooseOperation = (operationSymbol) => {
  if (equalsCounter > 0 && upperDisplay !== 0) {
    equalsCounter = 0;
  }

  if (upperDisplay !== "0" && lowerDisplay !== "0") {
    firstNumberOperand = operationResult;
  }

  operation = operationSymbol;
};

const updateDisplay = () => {
  if (
    (lowerDisplay > 1000000000 && equalsCounter > 0) ||
    (lowerDisplay < -100000000 && equalsCounter > 0)
  ) {
    currentOperandDisplayEl.innerText = lowerDisplay;
  } else if (lowerDisplay === "Error") {
    currentOperandDisplayEl.innerText = lowerDisplay;
  } else if (isLengthGreaterThanSix(lowerDisplay)) {
    getDisplaySmaller();
    currentOperandDisplayEl.innerText = Number(lowerDisplay).toLocaleString();
  } else if (lowerDisplay < 1) {
    currentOperandDisplayEl.innerText = lowerDisplay;
  } else if (lowerDisplay[lowerDisplay.length - 1] === ".") {
    lowerDisplay = lowerDisplay.slice(0, lowerDisplay.length - 1);
    currentOperandDisplayEl.innerText = lowerDisplay;
  } else if (
    lowerDisplay[lowerDisplay.length - 1] === "." &&
    deletionCounter !== 0
  ) {
    lowerDisplay = lowerDisplay.slice(0, lowerDisplay.length - 1);
    currentOperandDisplayEl.innerText = lowerDisplay + clickedNum;
  } else if (
    lowerDisplay[lowerDisplay.length - 1] === "0" &&
    equalsCounter === 0
  ) {
    currentOperandDisplayEl.innerText = lowerDisplay;
  } else {
    currentOperandDisplayEl.innerText = Number(lowerDisplay).toLocaleString();
  }

  if (upperDisplay.length > 26) {
    previousOperandDisplayEl.innerText = "Display error";
  } else {
    previousOperandDisplayEl.innerText = upperDisplay;
  }
};

const calculate = () => {
  let result;

  const previousNumber = parseFloat(secondNumberOperand);
  const currentNumber = parseFloat(firstNumberOperand);

  if (previousNumber === 0 && currentNumber === 0) {
    return;
  }
  result = operate(previousNumber, currentNumber, operation);
  secondNumberOperand = secondNumberOperand.toString();

  upperDisplay =
    Number(secondNumberOperand).toLocaleString() +
    operation +
    Number(firstNumberOperand).toLocaleString();

  lowerDisplay = result;
  operationResult = result;
};

const calculateWithOperationButton = () => {
  let result;

  const previousNumber = parseFloat(secondNumberOperand);
  const currentNumber = parseFloat(firstNumberOperand);

  if (previousNumber === 0 && currentNumber === 0) {
    return;
  }
  result = operate(previousNumber, currentNumber, operation);
  secondNumberOperand = secondNumberOperand.toString();

  lowerDisplay = "0";
  operationResult = result;
};

const clear = () => {
  getDisplayNormal();
  firstNumberOperand = "0";
  secondNumberOperand = "0";
  operation = "";
  lowerDisplay = "0";
  upperDisplay = "0";
  operationResult = "0";
  initialNumber = "0";
  equalsCounter = 0;
  operationButtonCounter = 0;
  clickedNum = "";
  deletionCounter = 0;
};

const deletion = () => {
  deletionCounter++;
  if (lowerDisplay !== "0" && lowerDisplay < 1000000000) {
    if (lowerDisplay.toString().length === 1) {
      lowerDisplay = "0";
    } else {
      lowerDisplay = lowerDisplay.toString().slice(0, -1);
    }
  }

  if (operationResult !== "0" && equalsCounter > 0) {
    clear();
  }

  if (isNaN(lowerDisplay)) {
    lowerDisplay = firstNumberOperand;
  } else {
    firstNumberOperand = lowerDisplay;
    initialNumber = lowerDisplay;
  }
};

const multiplyMinusOne = () => {
  if (firstNumberOperand < 1000000 && operationResult < 1000000) {
    firstNumberOperand = firstNumberOperand * -1;
    operationResult = operationResult * -1;
    lowerDisplay = lowerDisplay * -1;
  }
};

const changeMode = () => {
  bodyElement.classList.toggle("body-light-mode");
};

numberButtonsEl.forEach((button) => {
  button.addEventListener("click", () => {
    const numberValue = button.value;
    appendNumbers(numberValue);
    lowerDisplay = initialNumber;
    firstNumberOperand = initialNumber;
    updateDisplay();
  });
});

operationButtonsEl.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      lowerDisplay === "Error" ||
      firstNumberOperand === "Error" ||
      secondNumberOperand === "Error" ||
      upperDisplay.includes("Error")
    ) {
      clear();
      updateDisplay();
    }
    getDisplayNormal();
    operationButtonCounter++;

    if (operationButtonCounter >= 2) {
      firstNumberOperand = initialNumber;
      if (operationButtonCounter >= 3) {
        secondNumberOperand = operationResult;
      }
      calculateWithOperationButton();
      const operation = button.innerHTML;
      chooseOperation(operation);
      upperDisplay = operationResult + operation;
      updateDisplay();
      initialNumber = "0";
    } else {
      const operation = button.innerHTML;
      chooseOperation(operation);

      if (firstNumberOperand < 1) {
        upperDisplay = firstNumberOperand + operation;
      } else {
        upperDisplay = Number(firstNumberOperand).toLocaleString() + operation;
      }

      lowerDisplay = "0";
      updateDisplay();
      secondNumberOperand = firstNumberOperand;
      initialNumber = "0";
    }
  });
  deletionCounter = 0;
});

equalsButtonEl.addEventListener("click", () => {
  if (
    lowerDisplay === "Error" ||
    firstNumberOperand === "Error" ||
    secondNumberOperand === "Error"
  ) {
    clear();
    updateDisplay();
  }

  if (upperDisplay === "0") {
    lowerDisplay = initialNumber;
  } else {
    if (operationButtonCounter >= 2) {
      secondNumberOperand = operationResult;
    }

    calculate();
    if (lowerDisplay.length < 6) {
      getDisplayNormal();
    }
    if (lowerDisplay.length > 6) {
      getDisplaySmaller();
    }

    equalsCounter++;
    updateDisplay();
    secondNumberOperand = operationResult;
    operationButtonCounter = 0;
    deletionCounter = 0;
  }
});

clearAllButtonEl.addEventListener("click", () => {
  clear();
  updateDisplay();
});

deleteButtonEl.addEventListener("click", () => {
  deletion();
  updateDisplay();
});

changeSignEl.addEventListener("click", () => {
  if (firstNumberOperand.toString().length < 8) {
    multiplyMinusOne();
    updateDisplay();
  }
});

darkModeButtonEl.addEventListener("click", () => changeMode());
