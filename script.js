'use strict';

/* //////////////////////// */
/* Typing Reveal */
/* //////////////////////// */

const typingRevealText = 'typing reveal';
const typingRevealTextSpan = document.getElementById('typing-reveal-text');
const typingRevealCursorSpan = document.getElementById('typing-reveal-cursor');

// add delay to animation 7*125ms
let activeLetter = -7;

const addLetter = () => {
  if (activeLetter >= 0)
    typingRevealTextSpan.textContent += typingRevealText[activeLetter];
  if (activeLetter === typingRevealText.length - 1) return;

  activeLetter++;
  setTimeout(addLetter, 125);
};

setInterval(() => typingRevealCursorSpan.classList.toggle('active'), 400);
addLetter();

/* //////////////////////// */
/* Pixel Veil */
/* //////////////////////// */

// Create Grid
document.querySelectorAll('.pixel-veil-grid-row').forEach((row) => {
  // 16 - pixel count
  for (let i = 0; i < 16; i++) {
    const gridPixel = document.createElement('div');
    gridPixel.classList.add('pixel-veil-grid-pixel');

    const isTransparent = Math.random() > 0.6;
    if (isTransparent) {
      gridPixel.classList.add('transparent');
    } else {
      gridPixel.classList.add('initial-fade');
    }

    row.appendChild(gridPixel);
  }
});

// Grid Animation
document.querySelector('.pixel-veil-grid-conatiner').addEventListener(
  'mouseenter',
  function (event) {
    const target = event.target;

    if (!target.classList.contains('pixel-veil-grid-pixel')) return;
    if (target.classList.contains('transparent')) return;
    if (target.classList.contains('revealing')) return;

    target.classList.add('revealing');

    setTimeout(() => {
      target.classList.remove('revealing');
    }, 600);
  },
  true,
);
