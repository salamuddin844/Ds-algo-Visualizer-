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

var marginAxis = [];
for (let i = 30; i >= 3; i -= 3) {
  marginAxis.push(i + "%");
}

console.log(marginAxis);

var root = document.querySelector(":root");
function handleAnimationPop() {
  console.log("pop clicked");
  if (!stackSize) {
    alert("Stack is empty!");
  }
  let brokeAt = 0;
  for (let i = 1; i <= 10; i++) {
    if (pushedCard[i]) {
      card[i - 1].classList.remove("card" + i + "-animate-forward");
      card[i - 1].classList.add("card" + i + "-animate-reverse");
      pushedCard[i] = false;
      stackSize -= 1;
      brokeAt = i;
      if (!stackSize) {
        console.log("time limit");
        setTimeout(() => {
          console.log("Hello, World!");
          for (let j = 1; j <= 10; ++j) {
            root.style.setProperty("--margin" + j, marginAxis[j - 1]);
            // console.log(card[j - 1]);
          }
          console.log("here I'm");
        }, 1400);
      }
      break;
    }
  }

  let itr0 = 2,
    itr1 = 0;
  for (let i = 2; i <= 10; i++) {
    for (let j = 1; j <= 10; ++j) {
      card[j - 1].classList.remove("addpartialPush" + i);
    }
  }
  for (let i = brokeAt + 1; i <= brokeAt + stackSize; i++) {
    card[i - 1].classList.remove("card" + i + "-animate-forward");
    card[i - 1].classList.add("addpartialPush" + itr0++);
    root.style.setProperty("--margin" + i, marginAxis[itr1++]);
  }
  // for (let i = 1; i <= 10; ++i) {
  //   console.log(
  //     "margin" + i + " = " + root.style.getPropertyValue("--margin" + i)
  //   );
  //   console.log(card[i - 1]);
  // }
}

// Handle input field
function handleInputField() {
  var x = inputField.value;
  if (isNaN(x)) {
    inputField.value = "";
  }
}
