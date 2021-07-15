let welcome = "Welcome to coulette";
console.log(welcome);
/**Gloval Variables */
const colors = [];
let currentColor = undefined;
const saveColorBtn = document.querySelector("#saveColorBtn");

const colorList = document.querySelector("#colorList");

const storageKey = "colors";

/**
 * Toggle color of header
 * Generate random number between min and max
 */
function randomNumber(min, max) {
  const num = Math.random() * (max - min + 1) + min;
  return Math.floor(num);
}
/**
 * Generate random hex number for color
 */
function randomHexNumber() {
  let hex = randomNumber(0, 255).toString(16);
  if (hex.length === 1) {
    hex = "0" + hex;
  }
  return hex;
}
/**
 * Generate random hex color
 */
function randomHexColor() {
  const red = randomHexNumber();
  const green = randomHexNumber();
  const blue = randomHexNumber();

  return ("#" + red + green + blue).toUpperCase();
}

/**Use the generated color to change the bgcolor of the header */
function changeColor() {
  currentColor = randomHexColor();

  let colorValue = document.querySelector("#colorCode");
  colorValue.textContent = currentColor;

  let colorPreview = document.querySelector("#colorPreview");
  colorPreview.style.backgroundColor = currentColor;

  checkSaveBtnState();
}

/**Initial Color Change */
changeColor();

function createColorListItem(color) {
  const newColor = document.createElement("li");
  newColor.innerText = color;
  newColor.style.backgroundColor = color;
  newColor.setAttribute("data-color", color);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete Color";
  deleteBtn.classList.add("deleteBtn");

  newColor.appendChild(deleteBtn);
  colorList.appendChild(newColor);
}

/**Save the colors the user choose */
function saveColor() {
  if (!colors.includes(currentColor)) {
    colors.push(currentColor);
    createColorListItem(currentColor);
    checkSaveBtnState();
    saveColorsInLocal();
    //const savedColor = document.createElement("li");
    //savedColor.innerText = currentColor;
    //savedColor.style.backgroundColor = currentColor;

    //const deleteButton = document.createElement("button");
    //deleteButton.innerText = "Delete Color";
    //deleteButton.classList.add("deleteBtn");

    //savedColor.appendChild(deleteButton);
    //colorList.appendChild(savedColor);
  } else {
    console.log("Error: this color is already saved");
  }
}

/**generateColorBtn */
const generateColorBtn = document.querySelector("#generateColorBtn");
if (generateColorBtn) {
  generateColorBtn.addEventListener("click", changeColor);
} else {
  console.log("sorry, there is something wrong with your btn name");
}
/**saveColorBtn */
if (saveColorBtn) {
  saveColorBtn.addEventListener("click", saveColor);
} else {
  console.log("sorry, there might be a problem with your btn name");
}

/**Check savebutton state */
function checkSaveBtnState() {
  if (colors.includes(currentColor)) {
    saveColorBtn.setAttribute("disabled", "");

    console.log("changed state to disabled");
  } else {
    saveColorBtn.removeAttribute("disabled");
    console.log("changed state to enabled");
  }
}

/**Delete Color from list */
colorList.addEventListener("click", function (e) {
  const tagName = e.target.tagName.toLowerCase();
  if (tagName === "button") {
    const listItem = e.target.parentElement;
    const color = listItem.getAttribute("color");

    deleteColor(color);
    colorList.removeChild(listItem);
  }
});

/**Delete Color from array*/
function deleteColor(color) {
  const i = colors.indexOf(color);
  colors.splice(i, 1);
  checkSaveBtnState();
  saveColorsInLocal();
}

/**Save in local storage */
function saveColorsInLocal() {
  const jsonColors = JSON.stringify(colors);
  localStorage.setItem(storageKey, jsonColors);
}

/**Read from local storage */
function readColorsInLocal() {
  const storageColors = localStorage.getItem(storageKey);
  if (storageColors !== null) {
    const jcolors = JSON.parse(storageColors);
    jcolors.forEach((color) => {
      createColorListItem(color);
      colors.push(color);
    });
  }
}

/**load local storage */

readColorsInLocal();
