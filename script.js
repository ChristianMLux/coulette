let welcome = "Welcome to coulette";
console.log(welcome);
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
  let color = randomHexColor();

  let colorValue = document.querySelector("#colorCode");
  colorValue.textContent = color;

  let colorPreview = document.querySelector("#colorPreview");
  colorPreview.style.backgroundColor = color;
}

/**Save the colors the user choose */
function saveColor() {
  let colorValue = document.querySelector("#colorCode");
  let color = colorValue.innerText;
  const colorList = document.querySelector("#colorList");

  let savedColor = document.createElement("li");
  savedColor.innerText = color;
  savedColor.style.backgroundColor = color;
  colorList.appendChild(savedColor);
}

/**first color */
let colorPreview = document.querySelector("#colorPreview");
let currentColor = colorPreview.style.backgroundColor.toLocaleLowerCase();
if (currentColor !== null) {
  colorPreview.style.backgroundColor = changeColor;
} else {
  console.log("works fine.");
}

/**generateColorBtn */
const generateColorBtn = document.querySelector("#generateColorBtn");
if (generateColorBtn) {
  generateColorBtn.addEventListener("click", changeColor);
} else {
  console.log("sorry, there is something wrong with your btn name");
}

const saveColorBtn = document.querySelector("#saveColorBtn");
if (saveColorBtn) {
  saveColorBtn.addEventListener("click", saveColor);
} else {
  console.log("sorry, there might be a problem with your btn name");
}
