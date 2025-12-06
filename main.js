onload = () => {
    document.body.classList.remove("container");
};

const messages = [
  "I'm Sorry my Pimpy",
  "My Love, my Honey, my sweetheart, my princess.",
  "The most beautiful, the cutest girl in this universe.",
  "You mean the most to me.",
  "I am sorry.",
  "I am ashamed to you but I'm really sorry.",
  "Sorry for all the pain I've caused you.",
  "Sorry I was disrespectful to you.",
  "Sorry I made you cry.",
  "I loved you so much",
  "And I still do.",
  "Please forgive me.",
  "I promise it won't happen again.",
  "And I don't have any right to blame you.",
  "Because I was wrong.",
  "I will do anything to make it up to you.",
  "Please give me another chance.",
  "I love you forever.",
  "I hope they won't pass the internship.",
  "So my pimpy doesn't have to think.",
  "Sorry, for putting myself in this situation.",
  "I hope you can find it in your heart to forgive me.",
  "I miss you so much.",
  "Your Pimpy forever.",
];

const typeSpeed = 80;
const eraseSpeed = 40;
const holdTime = 2000;
const blinkBeforeErase = 3;

let msgIndex = 0;
let charIndex = 0;
let isDeleting = false;
let blinkCount = 0;

const typeText = document.getElementById("typeText");
const cursor = document.getElementById("cursor");

function typeEffect() {
  const current = messages[msgIndex];

  if (!isDeleting) {
    // typing forward
    typeText.textContent = current.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      setTimeout(() => blinkCursor(), holdTime);
      return;
    }

  } else {
    // deleting
    typeText.textContent = current.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {

      // 🚨 If last message → SHOW GIF & STOP EVERYTHING
      if (msgIndex === messages.length - 1) {
        cursor.style.display = "none";     // remove cursor
        document.querySelector("h1").style.display = "none"; // hide whole text
        document.getElementById("finalGif").style.display = "block"; // show gif
        return;
      }

      // otherwise continue
      isDeleting = false;
      msgIndex++;
    }
  }

  setTimeout(typeEffect, isDeleting ? eraseSpeed : typeSpeed);
}

function blinkCursor() {
  if (blinkCount < blinkBeforeErase * 2) {
    cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
    blinkCount++;
    setTimeout(blinkCursor, 300);
  } else {
    cursor.style.opacity = "1";
    blinkCount = 0;
    isDeleting = true;
    typeEffect();
  }
}

// Start after 5 seconds
setTimeout(() => {
  typeEffect();
}, 5000);
