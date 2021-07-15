let welcome = "Welcome to coulette";
console.log(welcome);
/**Gloval Variables */
const colors = [];
let currentColor = undefined;
const saveColorBtn = document.querySelector("#saveColorBtn");

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

/**Save the colors the user choose */
function saveColor() {
  if (!colors.includes(currentColor)) {
    colors.push(currentColor);
    const colorList = document.querySelector("#colorList");

    const savedColor = document.createElement("li");
    savedColor.innerText = currentColor;
    savedColor.style.backgroundColor = currentColor;

    colorList.appendChild(savedColor);

    checkSaveBtnState();
  } else {
    console.log("Error: this color is already saved");
  }
}

changeColor();

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
