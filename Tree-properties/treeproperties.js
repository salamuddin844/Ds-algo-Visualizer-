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

for (let i = 1; i <= 9; i++) {
  //create parent div
  let parent = document.createElement("div");

  parent.setAttribute("id", "node" + i);
  parent.style.position = "absolute";

  // Create child div
  let child = document.createElement("div");
  child.setAttribute("id", "node" + i + "dragger");
  child.setAttribute("class", "node-styles");
  child.innerHTML = i;

  let graphcontainer = document.querySelector(".graph-container");

  parent.appendChild(child);
  graphcontainer.appendChild(parent);
  // dragElement(document.getElementById("node" + i)); // Make elements draggable
  // document.getElementById("main").appendChild(div);
}

function nodeclear() {
  for (let i = 1; i <= 9; i++) {
    let k = document.getElementById("node" + i);
    k.classList.remove("change-node-color");
  }
}

function leaf() {
  nodeclear();
  let leafarr = ["node8", "node9", "node6", "node7"];
  for (let i = 0; i < leafarr.length; i++) {
    let leafnode = document.getElementById(leafarr[i]);
    leafnode.classList.add("change-node-color");
  }
}

var inputField = document.getElementById("input_field");
var inputField1 = document.getElementById("input_field1");

function parent() {
  nodeclear();
  let x = inputField.value;
  if (isNaN(x)) return;
  let parentarr;
  if (x == "2" || x == "3") {
    parentarr = ["node1"];
  } else if (x == "4" || x == "5") parentarr = ["node2"];
  else if (x == "6" || x == "7") parentarr = ["node3"];
  else if (x == "8" || x == "9") parentarr = ["node4"];

  for (let i = 0; i < parentarr.length; i++) {
    let parnode = document.getElementById(parentarr[i]);
    parnode.classList.add("change-node-color");
  }
}

function childnode() {
  nodeclear();
  let x = inputField1.value;
  if (isNaN(x)) return;
  let parentarr;
  if (x == "1") {
    parentarr = ["node2", "node3"];
  } else if (x == "2") parentarr = ["node4", "node5"];
  else if (x == "3") parentarr = ["node6", "node7"];
  else if (x == "4") parentarr = ["node8", "node9"];

  for (let i = 0; i < parentarr.length; i++) {
    let parnode = document.getElementById(parentarr[i]);
    parnode.classList.add("change-node-color");
  }
}

var inputField = document.getElementById("input_field");

// Handle input field
function handleInputField() {
  var x = inputField.value;
  if (isNaN(x)) {
    inputField.value = "";
  }
}

function handleInputField1() {
  var x = inputField1.value;
  if (isNaN(x)) {
    inputField1.value = "";
  }
}

function internalnode() {
  nodeclear();
  let internalnode = ["node1", "node2", "node3", "node4", "node5"];

  for (let i = 0; i < internalnode.length; i++) {
    let internode = document.getElementById(internalnode[i]);
    internode.classList.add("change-node-color");
  }
}

function rootnode() {
  nodeclear();
  let root = document.getElementById("node1");
  root.classList.add("change-node-color");
}
