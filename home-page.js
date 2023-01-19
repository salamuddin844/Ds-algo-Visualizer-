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
var rightHeader = document.querySelector(".page-header-right");
var navRightHeader = document.querySelector(".nav-page-header-right");
rightHeader.classList.add(listOfColorSchemes[randomNum]);
navRightHeader.classList.add(listOfColorSchemes[randomNum]);
// Random color changer for page header - ends

// To load another page after clicking on Graph-Traversal
// var bfsCard = document.querySelector(".bfs-card");
// bfsCard.addEventListener("click", loadBfsAlgo());

var cnt = 0;
function loadBfsAlgo() {
  window.location.href = "Graph-Traversal/bfs.html";
  console.log(cnt++);
}

function loadCalc() {
  window.location.href = "Calculator/calculator.html";
}
function loadStack() {
  window.location.href = "Stack/stack.html";
}
function loadQueue() {
  window.location.href = "Queue/queue.html";
}
function loadTreeProp() {
  window.location.href = "Tree-properties/tree-properties.html";
}
