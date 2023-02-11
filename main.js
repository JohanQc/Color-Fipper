const btnPrimary = document.getElementById("btnPrimary");
const btnSecondary = document.getElementById("btnSecondary");
const btnTertiary = document.getElementById("btnTertiary");
const btnRandom = document.getElementById("btnRandom");
const finalColor = document.getElementById("finalColor");
const copyIcon = document.getElementById("copyIcon");

let finalColorText;
const primaryColors = ["#FFFF00", "#0000FF", "#FF0000"];
const secondaryColors = ["#ffa500", "#008000", "7f00ff"];
const tertiaryColors = [
  "#008080",
  "#ff00ff",
  "#FFBF00",
  "#7fff00",
  "#800080",
  "#D9381E",
];
const getRandomItem = (items) => {
  const item = items[Math.floor(Math.random() * items.length)];
  return item;
};

const renderFinalColor = function (result) {
  finalColor.innerHTML = result;
};

const changeColorsOfBody = function (color) {
  document.body.style.background = color;
};

btnPrimary.addEventListener("click", function (params) {
  const primaryColor = getRandomItem(primaryColors);
  finalColorText = primaryColor;
  changeColorsOfBody(primaryColor);
  renderFinalColor(primaryColor);
  renderCopyIcon();
});

btnSecondary.addEventListener("click", function (params) {
  const secondaryColor = getRandomItem(secondaryColors);
  finalColorText = secondaryColor;
  changeColorsOfBody(secondaryColor);
  renderFinalColor(secondaryColor);
  renderCopyIcon();
});

btnTertiary.addEventListener("click", function (params) {
  const tertiaryColor = getRandomItem(tertiaryColors);
  finalColorText = tertiaryColor;
  changeColorsOfBody(tertiaryColor);
  renderFinalColor(tertiaryColor);
  renderCopyIcon();
});

btnRandom.addEventListener("click", function (params) {
  const randomColor = randColor();
  finalColorText = randomColor;
  changeColorsOfBody(randomColor);
  renderFinalColor(randomColor);
  renderCopyIcon();
});

const randColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
};

copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(finalColorText);
  copyIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
</svg>`;
});

function renderCopyIcon() {
  copyIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard"
       viewBox="0 0 16 16">
       <path
        d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
       <path
        d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
      </svg>`;
}
