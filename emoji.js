"use strict";
const btnPush = document.getElementById("push-btn");
const btnPop = document.getElementById("pop-btn");
const btnShift = document.getElementById("shift-btn");
const btnUnshift = document.getElementById("unshift-btn");
const emojiWrapper = document.querySelector("#emoji-wrapper");
const emojiInput = document.querySelector("input");

const myEmojis = ["R2D2.webp", "obi-wan-kenobi.webp", "doge.png"];
function renderEmoji() {
  emojiInput.value = "";
  myEmojis.forEach(emoji => {
    const spanEl = document.createElement("span");
    const image = document.createElement("img");
    spanEl.className = "emoji";
    image.className = "emoji emoji-img";
    if (
      emoji.endsWith(".jpg") ||
      emoji.endsWith(".webp") ||
      emoji.endsWith(".png")
    ) {
      image.src = `images/${emoji}`;
      image.alt = `${emoji.replace(emoji.slice(-4), "")}`;
      emojiWrapper.append(image);
    } else {
      spanEl.textContent = emoji;
      emojiWrapper.append(spanEl);
    }
  });
}
renderEmoji();

// add to beginning
btnUnshift.addEventListener("click", () => {
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value);
    emojiWrapper.innerHTML = "";
    renderEmoji();
  }
});

// remove from beginning
btnShift.addEventListener("click", () => {
  myEmojis.shift();
  emojiWrapper.innerHTML = "";
  renderEmoji();
});

//add to end
btnPush.addEventListener("click", () => {
  if (emojiInput.value) {
    myEmojis.push(emojiInput.value);
    emojiWrapper.innerHTML = "";
    renderEmoji();
  }
});

// remove from end
btnPop.addEventListener("click", () => {
  myEmojis.pop();
  emojiWrapper.innerHTML = "";
  renderEmoji();
});
