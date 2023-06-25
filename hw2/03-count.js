const input = document.getElementById("input");
const textContainer = document.getElementById("text-container");

input.addEventListener("input", () => {
  const keyword = input.value;
  const text = textContainer.textContent;
  const words = text.split(" ");

  if (keyword.trim() !== "") {
    const highlightedText = words
      .map((word) =>
        word.toLowerCase().includes(keyword.toLowerCase())
          ? `<span class="bg-warning">${word}</span>`
          : word
      )
      .join(" ");

    textContainer.innerHTML = highlightedText;
  } else {
    textContainer.innerHTML = text;
  }
});
