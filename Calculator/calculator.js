// Special Button's Logic
var alwaysSameButtons = [26, 29, 11, 15, 19, 23, 27];
for (let i = 1; i < alwaysSameButtons.length; ++i) {
  var button = document.querySelector("#btn" + alwaysSameButtons[i]);
  button.classList.add("bg-warning");
  button.classList.add("text-dark");
}
var button26 = document.querySelector("#btn" + alwaysSameButtons[0]);
button26.classList.add("bg-light");
button26.classList.add("text-dark");

// Other button's logic
var idArray = [];
for (let i = 1; i <= 29; ++i) {
  var seen = false;
  for (let j = 0; j < alwaysSameButtons.length; ++j) {
    if (i == alwaysSameButtons[j]) {
      seen = true;
      break;
    }
  }
  if (!seen) {
    idArray.push(document.querySelector("#btn" + i));
  }
}

// for (let i = 0; i < idArray.length; ++i) {
//   idArray[i].addEventListener("mouseover", () => {
//     idArray[i].classList.remove("fw-normal");
//     idArray[i].classList.add("fw-bold");
//     idArray[i].classList.add("bg-light");
//     idArray[i].classList.add("text-dark");
//   });
//   idArray[i].addEventListener("mouseout", () => {
//     idArray[i].classList.remove("fw-bold");
//     idArray[i].classList.remove("bg-light");
//     idArray[i].classList.remove("text-dark");
//     idArray[i].classList.add("fw-normal");
//   });
// }

// Input field logic
var inputField = document.getElementById("input_field");
function clearScreen() {
  inputField.value = "0";
}

function addToScreen(val) {
  if (inputField.value == "0") {
    inputField.value = val;
  } else {
    inputField.value += val;
  }
}

function backspaceDelete() {
  inputField.value = inputField.value.substr(0, inputField.value.length - 1);
  if (inputField.value == "") {
    inputField.value = "0";
  }
}

function evalExpression() {
  inputField.value = eval(inputField.value);
}

function addSpace() {
  if (inputField.value != "0") {
    inputField.value += ", ";
  }
}

// Keyboard events
document.addEventListener("keydown", (event) => {
  var x = event.key;
  if ((0 <= x && x <= 9) || x == "+" || x == "-" || x == "/" || x == "*") {
    if (inputField.value == "0") {
      inputField.value = event.key;
    } else {
      inputField.value += event.key;
    }
  } else if (x == "Backspace") {
    inputField.value = inputField.value.substr(0, inputField.value.length - 1);
    if (inputField.value == "") {
      inputField.value = "0";
    }
  } else if (x == "Enter") {
    inputField.value = eval(inputField.value);
  } else if (x == "Escape") {
    inputField.value = "0";
  } else if (x == "Space") {
    inputField.value += " ";
  }
  console.log(event.key);
  console.log(event.code);
});

// GCD Algo
function gcd(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return "Only numbers are allowed.";
  }
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

// String reverse function
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Extract two number from the string
function retFirstNum() {
  var s = inputField.value;
  console.log(s);
  var x = "";
  for (let i = 0; i < s.length; ++i) {
    if (!("0" <= s[i] && s[i] <= "9")) {
      itr = i;
      break;
    }
    x += s[i];
  }
  x = eval(x);
  return x;
}

function retSecondNum() {
  var y = "";
  var s = inputField.value;
  for (let i = s.length - 1; i >= 0; --i) {
    if (!("0" <= s[i] && s[i] <= "9")) {
      itr = i;
      break;
    }
    y += s[i];
  }
  y = reverseString(y);
  y = eval(y);
  return y;
}

// GCD Button Utilites
function gcdListener() {
  var x = retFirstNum();
  var y = retSecondNum();
  console.log("X = " + x);
  console.log("Y = " + y);
  var gcdAns = gcd(x, y);
  inputField.value = "GCD(" + x + ", " + y + ") = " + gcdAns;
  console.log(gcdAns);
}

// LCM Algorithm
function lcm(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return "Only numbers are allowed.";
  }
  x = Math.abs(x);
  y = Math.abs(y);
  return (x * y) / gcd(x, y);
}

// LCM Button Utilities
function lcmListener() {
  var x = retFirstNum();
  var y = retSecondNum();
  console.log("X = " + x);
  console.log("Y = " + y);
  var lcmAns = lcm(x, y);
  inputField.value = "LCM(" + x + ", " + y + ") = " + lcmAns;
  console.log(lcmAns);
}

// Prime Check Algorithm
const N = 1e6;
const isPrime = new Array(N + 1);
isPrime.fill(true);
isPrime[0] = isPrime[1] = false;
for (let i = 2; i * i <= N; i++) {
  for (let j = i + i; j <= N; j += i) {
    isPrime[j] = false;
  }
}

// Prime Check Utilities
function primeCheck() {
  x = eval(inputField.value);
  inputField.value = x + (isPrime[x] ? " is Prime" : " isn't Prime");
}

// Generate fibonacci
var fib = new Array(39 + 1);
fib[0] = fib[1] = 1;
for (let i = 2; i <= 39; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
  if (1e8 < fib[i]) {
    break;
  }
}

// Nth Fibonacci Utlities
function fibonacciListener() {
  var x = eval(inputField.value);
  console.log(x);
  if (39 < x) {
    inputField.value = "Highest limit for fibonacci is 39";
  } else {
    inputField.value = x + "th fibonacci = " + fib[x];
  }
}

// Euler Totient Algorithm
var phi = new Array(N + 1);
for (let i = 0; i <= N; i++) {
  phi[i] = i;
}

for (let i = 2; i <= N; i++) {
  if (phi[i] == i) {
    for (let j = i; j <= N; j += i) {
      phi[j] -= phi[j] / i;
    }
  }
}

// Euler Totient Utilites
function eulerTotientListener() {
  var x = eval(inputField.value);
  inputField.value = "phi(" + x + ") = " + phi[x];
}

// Generate Catalan Number
var catalan = new Array(40);
catalan[0] = catalan[1] = 1;
for (let i = 2; i <= 39; i++) {
  catalan[i] = 0;
  for (let j = 0; j < i; j++) {
    catalan[i] += catalan[j] * catalan[i - j - 1];
  }
}

// Catalan Utilites
function catalanListener() {
  var x = eval(inputField.value);
  if (39 < x) {
    inputField.value = "Highest limit for Catalan is 39";
  } else {
    inputField.value = "catalan(" + x + ") = " + catalan[x];
  }
}

// Sum of Divisors & number of divisors algo
var sum_dp = new Array(1e4 + 1);
var cnt_dp = new Array(1e4 + 1);
for (let i = 1; i <= 1e4; ++i) {
  sum_dp[i] = 0;
  cnt_dp[i] = 0;
}
for (let i = 1; i <= 1e4; ++i) {
  for (let j = i; j <= 1e4; j += i) {
    sum_dp[j] += i;
    cnt_dp[j] += 1;
  }
  console.log(i + " = " + sum_dp[i]);
}

// Sum of Divisors Utilities
function sumOfDivisorsListener() {
  var x = eval(inputField.value);
  if (1e4 < x) {
    inputField.value = "Highest limit for sumOfDivisors is 10,000";
  } else {
    inputField.value = "Sum of Divisors(" + x + ") = " + sum_dp[x];
  }
}

// Number of Divisors Utilities
function numberOfDivListener() {
  var x = eval(inputField.value);
  if (1e4 < x) {
    inputField.value = "Highest limit for numOfDivisors is 10,000";
  } else {
    inputField.value = "numofDivisors(" + x + ") = " + cnt_dp[x];
  }
}

// Mobius Function algo
function mobius(x) {
  let p = 0;
  if (!(x % 2)) {
    x /= 2;
    p += 1;
    if (!(x % 2)) {
      return 0;
    }
  }
  for (let i = 3; i <= Math.sqrt(x); i += 2) {
    if (!(x % i)) {
      x /= i;
      p += 1;
      if (!(x % i)) {
        return 0;
      }
    }
  }
  return p % 2 == 0 ? -1 : 1;
}

// Mobius Functin Utilites
function mobiusFuncListener() {
  var x = eval(inputField.value);
  inputField.value = "mobius(" + x + ") = " + mobius(x);
}

// Legrend's Formula algo
function legrends(n, p) {
  let x = 0;
  while (n) {
    n /= p;
    x += n;
  }
  return x;
}

// Legrend's Formula Utilities
function legrendsFormulaListener() {
  var x = retFirstNum();
  var y = retSecondNum();
  inputField.value =
    "Legrends(" + x + ", " + y + ") = " + Math.trunc(legrends(x, y));
}

// Random color changer for page header starts
var listOfColorSchemes = [
  "color-scheme-1",
  "color-scheme-2",
  "color-scheme-3",
  "color-scheme-4",
  "color-scheme-5",
  "color-scheme-6",
  "color-scheme-7",
];
var randomNum = Math.floor(Math.random() * listOfColorSchemes.length);
var navRightHeader = document.querySelector(".nav-page-header-right");
navRightHeader.classList.add(listOfColorSchemes[randomNum]);
// Random color changer for page header - ends

// Stirling number algo
function factorial(n) {
  // Our base cases of factorial 0! = 1! = 1
  if (n == 0) return 1;

  // n can't be less than 0.
  if (n < 0) return -1;
  let res = 1;
  for (let i = 2; i < n + 1; ++i) res *= i;
  return res;
}

// Function to compute the number of combination
// of r objects out of n objects.
function nCr(n, r) {
  // r cant be more than n so we'd like the
  // program to crash if the user entered
  // wrong input.
  if (r > n) return -1;

  if (n == r) return 1;

  if (r == 0) return 1;

  // nCr(n, r) = nCr(n - 1, r - 1) + nCr(n - 1, r)
  return nCr(n - 1, r - 1) + nCr(n - 1, r);
}

// Function to calculate the Stirling numbers.
// The base cases which were discussed above are handled
// to stop the recursive calls.
function stirlingNumber(r, n) {
  // n can't be more than
  // r, s(r, 0) = 0.
  if (n > r) return -1;

  if (n == 0) return 0;

  if (r == n) return 1;

  if (n == 1) return factorial(r - 1);

  if (r - n == 1) return nCr(r, 2);
  else return stirlingNumber(r - 1, n - 1) + (r - 1) * stirlingNumber(r - 1, n);
}

// Driver program
// Calculating the stirling number s(9, 2)

function stirlingNumberListener() {
  var r = retFirstNum();
  var n = retSecondNum();
  console.log(r, n);
  let val = stirlingNumber(r, n);
  if (val == -1) {
    inputField.value = "No stirling number";
  } else {
    inputField.value = "Stirling(" + r + ", " + n + ") = " + val;
  }
}
