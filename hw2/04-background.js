const intervalInput = document.querySelector("#interval");
const bgColorButton = document.querySelector("#bgColorButton");
const body = document.querySelector("body");

let intervalId;
let intervalDuration = 3000; // default interval of 3 seconds

bgColorButton.addEventListener("click", () => {
  if (!intervalId) {
    // start interval
    intervalId = setInterval(() => {
      // generate random rgba color
      const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 0.5)`;
      body.style.backgroundColor = color;
    }, intervalDuration);
    bgColorButton.innerText = "Stop";
  } else {
    // stop interval
    clearInterval(intervalId);
    intervalId = null;
    bgColorButton.innerText = "Start";
  }
});

intervalInput.addEventListener("change", () => {
  // update interval duration
  intervalDuration = intervalInput.value * 1000;
  // restart interval with new duration
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 0.5)`;
      body.style.backgroundColor = color;
    }, intervalDuration);
  }
});
