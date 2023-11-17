const coursesContainer = document.getElementById("courses");
const phrases = ["Software Engineer?", "Data Engineer?", "UI/UX Designer?"];
const menuIcon = document.getElementById("menu-icon");
 const overlay = document.getElementById("overlay-menu");

function animatePhrases(index) {
  if (index < phrases.length) {
    animatePhrase(phrases[index], function () {
      animatePhrases(index + 1);
    });
  } else {
    // reset index to 0 and start the animation loop again
    setTimeout(function () {
      animatePhrases(0);
    }, 200); 
  }
}

function animatePhrase(phrase, callback) {
  let i = 0;
  function typeWriter() {
    if (i < phrase.length) {
      coursesContainer.innerHTML += phrase.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    } else {
      setTimeout(function () {
        erasePhrase(callback);
      }, 1250);
    }
  }
  function erasePhrase(callback) {
    if (i >= 0) {
      coursesContainer.innerHTML = phrase.substring(0, i - 1);
      i--;
      setTimeout(function () {
        erasePhrase(callback);
      }, 50);
    } else {
      coursesContainer.innerHTML = '';
      callback();
      changeColor();
    }
  }
  typeWriter();
}

// start the animation when the page loads
window.onload = function () {
  animatePhrases(0);
};

const colors = [
  "rgba(157, 109, 219, 0.9)",
  "rgba(248, 89, 147, 0.9)",
  "rgba(51, 235, 168, 0.9)",
];

let currentColorIndex = 0;

function changeColor() {
  const overlay = document.getElementById("color-change");
  overlay.style.backgroundColor = colors[currentColorIndex];

  currentColorIndex = (currentColorIndex + 1) % colors.length;
}

menuIcon.addEventListener("click", function() {
  openOverlay();
});

document.getElementById("close-icon").addEventListener("click", function() {
  closeOverlay();
});

function openOverlay() {
  overlay.style.display = "block";
  setTimeout(() => {
    overlay.style.opacity = 1;
  }, 10);
}

function closeOverlay() {
  overlay.style.opacity = 0;
  setTimeout(() => {
    overlay.style.display = "none";
  }, 500);
}

const fswCard = document.getElementById('fsw-card');
const fscCard = document.getElementById('fsc-card');
const fsdCard = document.getElementById('fsd-card');
const uixCard = document.getElementById('uix-card');

const fcsButton = document.getElementById('fcs');
const fswButton = document.getElementById('fsw');
const fsdButton = document.getElementById('fsd');
const uixButton = document.getElementById('uix');


function showProgram(programCard) {
    [fswCard, fscCard, fsdCard, uixCard].forEach(card => card.style.display = 'none');

    programCard.style.display = 'block';
}

fcsButton.addEventListener('click', function () {
    showProgram(fscCard);
});

fswButton.addEventListener('click', function () {
    showProgram(fswCard);
});

fsdButton.addEventListener('click', function () {
    showProgram(fsdCard);
});

uixButton.addEventListener('click', function () {
    showProgram(uixCard);
});


function toggleActive(button) {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(function(btn) {
    btn.classList.remove('active');
  });
  
  button.classList.add('active');

  const container = document.querySelector('.programs-container');
  const computedStyle = window.getComputedStyle(button);
  container.style.backgroundColor = computedStyle.color;
}



