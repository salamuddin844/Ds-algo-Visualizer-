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

// Nodes generator starts
for (let i = 1; i <= 9; ++i) {
  // Create parent div
  let parent = document.createElement("div");
  parent.setAttribute("id", "node" + i);
  parent.style.position = "absolute";

  // Create child div
  let child = document.createElement("div");
  child.setAttribute("id", "node" + i + "dragger");
  child.setAttribute("class", "node-styles");
  child.innerHTML = i;

  parent.appendChild(child);
  document.body.appendChild(parent);
  // dragElement(document.getElementById("node" + i)); // Make elements draggable
  // document.getElementById("main").appendChild(div);
}

// Make the DIV element draggable:
function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "dragger")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "dragger").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
// Nodes generator ends

// BFS algorithm starts
var graph = new Map();

graph.set(1, []);
graph.set(2, []);
graph.set(3, []);
graph.set(4, []);
graph.set(5, []);
graph.set(6, []);
graph.set(7, []);
graph.set(8, []);
graph.set(9, []);

graph.get(1).push(2);
graph.get(2).push(1);
graph.get(1).push(3);
graph.get(3).push(1);
graph.get(2).push(4);
graph.get(4).push(2);
graph.get(2).push(5);
graph.get(5).push(2);
graph.get(3).push(6);
graph.get(6).push(3);
graph.get(3).push(7);
graph.get(7).push(3);
graph.get(4).push(8);
graph.get(8).push(4);
graph.get(4).push(9);
graph.get(9).push(4);

for (let u of graph.keys()) {
  var ans = u + " -> ";
  graph.get(u).forEach((v) => {
    ans += v + " ";
  });
  console.log(ans);
}

//   Creating a Queue
class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }
  enqueue(item) {
    this.items[this.rear] = item;
    this.rear++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  peek() {
    return this.items[this.front];
  }
  get size() {
    return this.rear - this.front;
  }
  isEmpty() {
    return this.rear == 0;
  }
}

var all_nodes = [];
console.log("\nBreadth First Search: ");
function bfs(startingNode) {
  // create a visited object
  var visited = {};

  // Create an object for queue
  var q = new Queue();

  var size = 7,
    total_undefined = 0,
    cnt = 0;

  // add the starting node to the queue
  visited[startingNode] = true;
  q.enqueue(startingNode);

  // loop until queue is empty
  while (!q.isEmpty()) {
    // get the element from the queue
    var vertex = q.peek();
    console.log(vertex);
    if (vertex != null) {
      all_nodes.push(vertex);
    }
    q.dequeue();

    if (total_undefined > size) {
      break;
    }

    if (++cnt > size * 2) {
      break;
    }

    if (typeof graph.get(vertex) !== "undefined") {
      graph.get(vertex).forEach((neigh) => {
        if (!visited[neigh]) {
          visited[neigh] = true;
          q.enqueue(neigh);
        }
      });
    } else {
      console.log("Tot : " + ++total_undefined);
    }
  }
}
bfs(1);

// Process the nodes starts

// Wait x seconds starts

// Wait x seconds ends
function startAlgo() {
  let startButton = document.querySelector(".start-button");
  if (startButton.innerHTML == "Start Algorithm") {
    startButton.innerHTML = "Algorithm Running..";
    startButton.classList.add("active");
  } else {
    startButton.innerHTML = "Start Algorithm";
    startButton.classList.remove("active");
  }
  console.log("Printing all_nodes: ");
  for (let i = 0; i < all_nodes.length; ++i) {
    console.log(all_nodes[i]);
    setTimeout(function () {
      //  call a 3s setTimeout when the loop is called
      console.log(all_nodes[i]);
      var color_node = document.getElementById(
        "node" + all_nodes[i] + "dragger"
      );
      color_node.classList.add("change-node-color");
    }, (i + 1) * 700);

    // await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

// Process the nodes ends

// BFS algorithm ends

// Click to create a node starts
var last_node = 9;
var graphScreen = document.querySelector(".graph-screen");
const seenAxis = [];
graphScreen.addEventListener("click", function (event) {
  let currentX = event.pageX;
  let currentY = event.pageY;
  console.log("\n\neven.pageX = " + event.pageX);
  console.log("even.pageY = " + event.pageY);

  let distance = 55;
  let foundAxis = false;
  console.log("seenAxis.size = " + seenAxis.length);
  console.log(seenAxis);
  for (let i = 0; i < seenAxis.length; ++i) {
    let xAxis = seenAxis[i].currentX;
    let yAxis = seenAxis[i].currentY;
    console.log("xAxis = " + xAxis);
    console.log("yAxis = " + yAxis);
    if (xAxis < currentX) {
      if (currentX - distance < xAxis) {
        foundAxis = true;
        break;
      }
    }

    if (currentX < xAxis) {
      if (xAxis < currentX + distance) {
        foundAxis = true;
        break;
      }
    }
    if (yAxis < currentY) {
      if (currentY - distance < yAxis) {
        foundAxis = true;
        break;
      }
    }

    if (currentY < yAxis) {
      if (yAxis < currentY + distance) {
        foundAxis = true;
        break;
      }
    }
  }

  if (!foundAxis) {
    // Create parent div
    var new_node = document.createElement("div");
    new_node.setAttribute("id", "node" + ++last_node);
    new_node.style.position = "absolute";

    // Create child div
    var child = document.createElement("div");
    child.setAttribute("id", "node" + last_node + "dragger");
    child.setAttribute("class", "node-styles");
    child.innerHTML = last_node;

    //Add them to each other boxes
    new_node.style.left = currentX + "px";
    new_node.style.top = currentY + "px";
    seenAxis.push({ currentX, currentY });
    // seenAxis.get({ currentX, currentY }).push(1);

    new_node.appendChild(child);
  }
  graphScreen.appendChild(new_node);
});
// Click to create a node ends

// Add Edges on click
const edges_pairs = [];
function addEdges() {
  editEdgesButton = document.querySelector(".edit-edges-button");
  if (editEdgesButton.innerHTML == "Done Adding") {
    editEdgesButton.innerHTML = "Add Edges";
    editEdgesButton.classList.remove("active");
  } else {
    editEdgesButton.innerHTML = "Done Adding";
    editEdgesButton.classList.add("active");
    for (let u = 1; u < last_node; ++u) {
      let current_node = document.getElementById("node" + u);
      current_node.addEventListener("click", () => {
        edges_pairs.push(current_node);
      });
    }
    console.log(edges_pairs);
  }
}
