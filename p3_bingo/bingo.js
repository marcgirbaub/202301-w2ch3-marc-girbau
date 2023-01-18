"use strict";

const getName = () => {
  let yourName;

  do {
    yourName = prompt(
      "Dear user, welcome to the BINGO GAME! \n\n\nPlease type your name below:"
    );
  } while (!yourName);

  return yourName;
};

const generateMyCard = () => {
  let bingoCard = [];
  let allNumbers = [];

  for (let i = 0; i < 3; i++) {
    let currentline = [];

    for (let j = 0; j < 5; j++) {
      let currentNumber;
      let isNumberRepeated = false;

      do {
        currentNumber = Math.ceil(Math.random() * 90);
        isNumberRepeated = allNumbers.includes(currentNumber);
      } while (isNumberRepeated);

      let objectNumber = { number: currentNumber, matched: false };

      currentline.push(objectNumber);
      allNumbers.push(currentNumber);
    }

    bingoCard.push(currentline);
  }

  return bingoCard;
};

const showMyCard = (bingoCard) => {
  let bingoTable = [];

  bingoCard.forEach((row) => {
    let eachRow = [];

    for (let i = 0; i < row.length; i++) {
      let currentNumber = row[i];

      if (currentNumber.matched) {
        eachRow.push("X");
      } else {
        eachRow.push(currentNumber.number);
      }
    }
    eachRow.sort((a, b) => a - b);
    bingoTable.push(eachRow);
  });
  console.table(bingoTable);
};

const wishToStickWithCard = () => {
  let changeCard = "";

  do {
    changeCard = prompt(
      "Do you wish to play with this card? Please type 'yes' or 'no'."
    );
  } while (
    changeCard === null ||
    (changeCard.toLowerCase() !== "no" && changeCard.toLowerCase() !== "yes")
  );

  return changeCard.toLowerCase();
};

const askIfLeaving = () => {
  let wishToLeave = confirm("Are you sure you want to quit the game?");

  if (wishToLeave) {
    return true;
  } else {
    false;
  }
};

const confirmNextTurn = () => {
  let nextTurn = confirm("Do you want to proceed?");

  if (!nextTurn && askIfLeaving()) {
    return false;
  } else {
    return true;
  }
};

const generateRandomNumberNotYetPlayed = (playedNumbers) => {
  let randomNumber;

  do {
    randomNumber = Math.ceil(Math.random() * 90);
  } while (playedNumbers.includes(randomNumber));

  return randomNumber;
};

const checkIfMatched = (number, bingoCard) => {
  for (let i = 0; i < bingoCard.length; i++) {
    let currentline = bingoCard[i];

    for (let j = 0; j < currentline.length; j++) {
      let currentPosition = currentline[j];

      if (currentPosition.number === number) {
        currentPosition.matched = true;

        console.log(`The number ${number} was found in your card!`);

        return true;
      }
    }
  }
  return false;
};

const checkIfLine = (number, bingoCard) => {
  let numberOfMatched = 0;

  for (let i = 0; i < bingoCard.length; i++) {
    let currentLine = bingoCard[i];

    for (let j = 0; j < currentLine.length; j++) {
      let currentNumber = currentLine[j];

      if (currentNumber.number === number) {
        for (let k = 0; k < currentLine.length; k++) {
          if (currentLine[k]["matched"]) {
            numberOfMatched++;
          }
        }
      }
    }
  }

  if (numberOfMatched === 5) {
    numberOfLines++;
    if (numberOfLines <= 2) {
      alert("Line!");
    }

    return true;
  } else {
    return false;
  }
};

const isBingo = (bingoCard) => {
  let matchedNumbers = 0;

  bingoCard.forEach((row) => {
    row.forEach((objectNumber) => {
      if (objectNumber.matched) {
        matchedNumbers++;
      }
    });
  });

  if (matchedNumbers === 15) {
    return true;
  } else {
    return false;
  }
};

const askToPlayAgain = () => {
  let playAgain;

  do {
    playAgain = prompt("Do you want to play again? Please type 'yes' or 'no'.");
  } while (
    playAgain === null ||
    (playAgain.toLowerCase() !== "yes" && playAgain.toLowerCase() !== "no")
  );

  if (playAgain.toLowerCase() === "yes") {
    return true;
  } else {
    return false;
  }
};

const askIfAnotherPlayer = () => {
  let anotherPlayer;
  do {
    anotherPlayer = prompt(
      "Does anyone else want to play? Please type 'yes' or 'no'."
    );
  } while (
    anotherPlayer === null ||
    (anotherPlayer.toLowerCase() !== "yes" &&
      anotherPlayer.toLowerCase() !== "no")
  );

  if (anotherPlayer.toLowerCase() === "yes") {
    return true;
  } else {
    return false;
  }
};

const showPointsSystem = () => {
  alert("Please read the rules carefully!");
  console.log(
    `--------RULES-------\n\n1. You start with 90 points\n2. Every turn you lose a point.\n3. The game stops when you hit ¡BINGO!\n4. The player with more points wins the game.\n\n¡LET'S PLAY!`
  );
};

const usersRanking = (name, points, allUsers) => {
  let user = { userName: name, userPoints: points };
  allUsers.push(user);

  allUsers.sort((a, b) => b.userPoints - a.userPoints);

  allUsers.forEach((user, index) => {
    console.log(
      `Position ${index + 1}: ${user.userName} with ${user.userPoints} points!`
    );
  });
};

let rankingList = [];
let numberOfLines = 0;

const bingo = () => {
  let card = [];

  let name = getName();
  showPointsSystem();

  let generatedCard = generateMyCard();
  showMyCard(generatedCard);

  while (wishToStickWithCard() === "no") {
    generatedCard = generateMyCard();
    showMyCard(generatedCard);
  }

  card = generatedCard;

  let playedNumbers = [];
  let turns = 0;
  let points = 90;
  numberOfLines = 0;

  while (!isBingo(card) && confirmNextTurn()) {
    turns++;
    points -= 1;

    let randomNumber = generateRandomNumberNotYetPlayed(playedNumbers);
    playedNumbers.push(randomNumber);
    alert(`The number is ${randomNumber}.`);

    let isMatched = checkIfMatched(randomNumber, card);
    showMyCard(card);

    if (isMatched) {
      checkIfLine(randomNumber, card);
    }
  }

  if (isBingo(card)) {
    alert(
      `----BINGO----\n\n¡CONGRATULATIONS, YOU'VE WON IN ${turns} turns!\n\n You scored ${points} points!`
    );
    usersRanking(name, points, rankingList);

    let playAgain = askToPlayAgain();
    if (playAgain) {
      bingo();
    } else {
      alert(`Thank you for playing, ${name}!\n\nSee you soon!`);

      if (askIfAnotherPlayer()) {
        bingo();
      }
    }
  } else {
    alert(`Thank you for playing, ${name}!`);

    if (askIfAnotherPlayer()) {
      bingo();
    }
  }
};

bingo();
