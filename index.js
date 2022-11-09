//generate a color for a party
function generateColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 16).toString(16);
  }
  return color;
}

const colorScale = [
  "#FF0000",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
  "#0000FF",
  "#4B0082",
  "#9400D3",
];

function pickColor() {
  return colorScale[Math.floor(Math.random() * colorScale.length)];
}
let interval = setInterval(() => {
    document.body.style.backgroundColor = generateColor();
  }, 200);

const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log(button.textContent);
  if (button.textContent === "Stop") {
    clearInterval(interval);
    button.textContent = "Start";
  } else {
    interval = setInterval(() => {
      document.body.style.backgroundColor = generateColor();
    }, 200);
    button.textContent = "Stop";
  }
});
