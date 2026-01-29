const coinCount = document.getElementById("coinCount");
const comfortValue = document.getElementById("comfortValue");
const comfortFill = document.getElementById("comfortFill");
const energyValue = document.getElementById("energyValue");
const energyFill = document.getElementById("energyFill");
const resetDemo = document.getElementById("resetDemo");

const state = {
  coins: 1250,
  comfort: 72,
  energy: 55,
};

const formatNumber = (value) => value.toLocaleString("tr-TR");

const updateUI = () => {
  coinCount.textContent = formatNumber(state.coins);
  comfortValue.textContent = `${state.comfort}%`;
  comfortFill.style.width = `${state.comfort}%`;
  energyValue.textContent = `${state.energy}%`;
  energyFill.style.width = `${state.energy}%`;
};

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const handleAction = (action) => {
  switch (action) {
    case "task":
      state.coins += 80;
      state.comfort = clamp(state.comfort + 6, 0, 100);
      state.energy = clamp(state.energy - 4, 0, 100);
      break;
    case "chat":
      state.coins += 50;
      state.comfort = clamp(state.comfort + 4, 0, 100);
      state.energy = clamp(state.energy + 3, 0, 100);
      break;
    case "decorate":
      state.coins -= 120;
      state.comfort = clamp(state.comfort + 8, 0, 100);
      state.energy = clamp(state.energy + 1, 0, 100);
      break;
    case "buy":
      state.coins -= 200;
      state.comfort = clamp(state.comfort + 2, 0, 100);
      break;
    default:
      break;
  }

  state.coins = Math.max(state.coins, 0);
  updateUI();
};

const attachButtons = () => {
  const buttons = document.querySelectorAll("button[data-action]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      handleAction(button.dataset.action);
    });
  });
};

resetDemo.addEventListener("click", () => {
  state.coins = 1250;
  state.comfort = 72;
  state.energy = 55;
  updateUI();
});

attachButtons();
updateUI();
