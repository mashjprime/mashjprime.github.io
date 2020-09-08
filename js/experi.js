console.log("Hello World");
let value = 100;
let myVar = setInterval(myTimer, 1000);
// Timer
function myTimer() {
  let d = new Date();
  document.getElementById("date").innerHTML = d.toLocaleTimeString();
}
// Count
let count = setInterval(myCount, 1000);
function myCount() {
 value++;
  document.getElementById("count").innerHTML = value;
}
// Learning




function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return arr[0];
  } else {
    return sum(arr, n-1) + arr[n];
  }
  // Only change code above this line
}
