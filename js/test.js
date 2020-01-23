// Validate password
function validate(user, pass) {
  console.log(`Hi ${user} your password is: `);
  if (
    pass.length < 8 ||
    pass.toLowerCase() == user.toLowerCase() ||
    pass.includes(" ")
  ) {
    return false;
  } else {
    return true;
  }
}

// Returns average of array
function getAvg(numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total / numbers.length;
}

// Checks if string is pangram
// Index of
function issPangram(sentence) {
  let lower = sentence.toLowerCase();
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (lower.indexOf(char) == -1) {
      return false;
    }
  }
  return true;
}
// vs includes
function isPangram(sentence) {
  let lower = sentence.toLowerCase();
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (!lower.includes(char)) {
      return false;
    }
  }
  return true;
}

// Retrieve first letter and convert to uppercase
function firstCharToUpper(word) {
  let firstChar = word[0].toUpperCase();
  return firstChar + word.slice(1);
}

// This is an object
let temp = {
  name: "bob",
  age: 30
};
console.log(temp);

// Generate random playing card
function getCard() {
  const value = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const suit = ["Clubs", "Spades", "Diamonds", "Hearts"];
  return {
    value: randomArray(value),
    suit: randomArray(suit)
  };
}

// Generates random index from array
function randomArray(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}