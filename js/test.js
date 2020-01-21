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

function avg(numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total / numbers.length;
}

function issPangram(sentence) {
  let lower = sentence.toLowerCase();
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (lower.indexOf(char) == -1) {
      return false;
    }
  }
  return true;
}

function isPangram(sentence) {
  let lower = sentence.toLowerCase();
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (!lower.includes(char)) {
      return false;
    }
  }
  return true;
}

function firstCharToUpper(word) {
  // Retrieve first letter and convert to uppercase
  let firstChar = word[0].toUpperCase();
  return firstChar + word.slice(1);
}

let temp = {
  name: "bob",
  age: 30
};
console.log(temp);

function getCard() {
  const value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', "J", "Q", "K", "A"];
  const suit = ["Clubs", "Spades", "Diamonds", "Hearts"];
  return {
    value: randomArray(value),
    suit: randomArray(suit)
  };
}

function randomArray(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
