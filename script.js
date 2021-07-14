let welcome = "Welcome to coulette";
console.log(welcome);

const changeColorBtn = document.querySelector("#changeColorBtn");

if (changeColorBtn) {
  changeColorBtn.addEventListener("click", function () {
    const color = "orange";
    const header = document.querySelector("header");
    const currentBGColor = header.style.backgroundColor.toLowerCase();
    if (currentBGColor !== "orange") {
      header.style.backgroundColor = color;
    } else {
      header.style.backgroundColor = null;
    }
  });
} else {
  console.error("sorry, can't find the button, please check the name again");
}
