let body = document.getElementById("gradient");
let h3 = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");

function changeBackground() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  h3.textContent = body.style.background;
}

color1.addEventListener("input", changeBackground); // changeBackground when color1 input changes
color2.addEventListener("input", changeBackground); // changeBackground when color2 input changes
