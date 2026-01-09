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
