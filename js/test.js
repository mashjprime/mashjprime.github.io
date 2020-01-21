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
