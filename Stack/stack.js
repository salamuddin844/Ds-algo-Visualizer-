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

// Grap Cards
var card = [];
for (let i = 1; i <= 10; i++) {
  card.push(document.querySelector("#card" + i));
}

var pushedCard = new Array(11);
for (let i = 1; i <= 10; i++) {
  pushedCard[i] = false;
}

// Push Cards in the box
var stackSize = 0;
var inputField = document.querySelector("#input_field");
function handleAnimationPush() {
  if (stackSize == 10) {
    alert("Stack is full!");
  }

  for (let i = 1; i <= 10; i++) {
    if (!pushedCard[i]) {
      var x = inputField.value;
      if (isNaN(x)) {
        alert("Please, enter a valid number");
        break;
      } else {
        if (!stackSize) {
          document.querySelector(".stackIsEmpty").style.display = "none";
        }
        card[i - 1].innerHTML = x;
        card[i - 1].classList.remove("card" + i + "-animate-reverse");
        card[i - 1].classList.add("card" + i + "-animate-forward");
        pushedCard[i] = true;
        stackSize += 1;
        break;
      }
    }
  }
}

// Pop Cards from the box
function handleAnimationPop() {
  console.log("pop clicked");
  if (!stackSize) {
    alert("Stack is empty!");
  }
  for (let i = 10; i >= 1; i--) {
    if (pushedCard[i]) {
      card[i - 1].classList.remove("card" + i + "-animate-forward");
      card[i - 1].classList.add("card" + i + "-animate-reverse");
      pushedCard[i] = false;
      stackSize -= 1;

      break;
    }
  }
}

// Handle input field
function handleInputField() {
  var x = inputField.value;
  if (isNaN(x)) {
    inputField.value = "";
  }
}
