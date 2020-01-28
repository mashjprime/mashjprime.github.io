console.log(localStorage.getItem("Test"));
//localStorage.setItem("Test", "Bob");
// Last update 1752 seconds

// Display current time and date
function time() {
  const today = new Date();
  console.log(today);
  const dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const day = today.getDay();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let amPm = "am";
  if (hours >= 12) {
    amPm = "pm";
  }
  if (hours > 12) {
    hours -= 12;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  console.log("Today is " + dayList[day]);
  console.log(`The time is ${hours}:${minutes}:${seconds} ${amPm}`);
}

// Return date of +1billion seconds
function addOneBillion() {
  let birthday = new Date("June 24, 1988 11:20:35");
  console.log(birthday);
  birthday.setSeconds(birthday.getSeconds() + 1000000000);
  return birthday;
}

// Time elapsed
let start = 0; // Declare outside of function
let end = 0;
let total = localStorage.getItem("totalTime"); // Retrieve total from memory
total = Number(total);
document.getElementById("total").innerHTML = `Total: ${total} seconds`; // Display total
let counting = false;

function pressButton() {
  if (timerControl.innerHTML == "Start") {
    timerControl.innerHTML = "Stop";
    let counting = true;
    start = Date.now();
    //countSeconds();
  } else {
    timerControl.innerHTML = "Start";
    end = Date.now();
    //let counting = false;
    let timeElapsed = Math.floor((end - start) / 1000);
    total += timeElapsed;
    //total = Math.floor(total);

    document.getElementById("counter").innerHTML = `Timer: ${timeElapsed}`;
    document.getElementById("total").innerHTML = `Total: ${total} seconds`;
  }
  localStorage.setItem("totalTime", total);
}

// let seconds = setInterval(countSeconds, 1000);
// let countSec = 0;

// function countSeconds() {
//   if (counting) {
//     document.getElementById("countSec").innerHTML = countSec;
//     countSec++;
//   }
//   else
// }
