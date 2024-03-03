const button = document.querySelector('button.change-color');
const spanColor = document.querySelector('span.color');

function changeBodyColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
}

button.addEventListener('click', changeBodyColor);