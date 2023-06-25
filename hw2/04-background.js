const updateColor = () => {
    document.body.style.backgroundColor = generateColor();
  };
  const start = (interval) => {
    currentInterval = setInterval(updateColor, interval * 1000);
  const start = () => {
    currentInterval = setInterval(updateColor, intervalInput.value * 1000);
    setButton("Stop", "btn-danger", "btn-primary");
  };
  const stop = () => {
    clearInterval(currentInterval);
    setButton("Start", "btn-primary", "btn-danger");
  };

  const setButton = (text, classToBeAdded, classToBeRemoved) => {
    startStopButton.value = text;
    startStopButton.classList.add(classToBeAdded);
    startStopButton.classList.remove(classToBeRemoved);
  };
  const startStopToggle = () => {
    if (userIntervalUpdated) {
      stop();
      startStopButton.value = "Start";
      startStopButton.classList.add("btn-primary");
      startStopButton.classList.remove("btn-danger");
    } else {
      start(intervalInput.value);
      startStopButton.value = "Stop";
      startStopButton.classList.remove("btn-primary");
      startStopButton.classList.add("btn-danger");
    }
    userIntervalUpdated ? stop() : start();
    userIntervalUpdated = !userIntervalUpdated;
  };