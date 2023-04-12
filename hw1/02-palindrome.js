const elem = document.querySelector("input");
const outputDiv = document.querySelector("div:last-child");

function handleInput() {
  const input = Number(elem.value);

  if (isNaN(input) || input <= 0) {
    outputDiv.innerHTML = '';
    return;
  }

  const reversed = Number(elem.value.split("").reverse().join(""));

  if (input === reversed) {
    outputDiv.innerHTML =
      '<p class="text-success">Yes. This is a palindrome!</p>';
  } else {
    outputDiv.innerHTML = '<p class="text-danger">No. Try again.</p>';
  }
}

elem.addEventListener("input", handleInput);