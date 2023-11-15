
const trainingTopText = document.getElementsByClassName("top-text-1");
trainingTopText[0].innerText = "want to become a";
let courses = document.getElementById("courses");
const trainingDescription = document.getElementById("training-description");
trainingDescription.innerText =
"Jumps tart your journey in tech with our courses in Computer Science, Full-Stack Web development,\
 Data Engineering and UI/UX Design. Get hands-on experience and gain essential skills for a successful\
 tech career.";



const phrases = ["Software Engineer?", "Data Engineer?", "UI/UX Designer?"];
const speed = 100;
const coursesContainer = document.getElementById("courses");

function animatePhrases(index) {
  if (index < phrases.length) {
    animatePhrase(phrases[index], function () {
      // callback function to start the next phrase animation
      animatePhrases(index + 1);
    });
  } else {
    // reset index to 0 and start the animation loop again
    setTimeout(function () {
      animatePhrases(0);
    }, 200); // Add a delay before restarting the animation
  }
}

function animatePhrase(phrase, callback) {
   let i = 0;

   function typeWriter() {
    if (i < phrase.length) {
          coursesContainer.innerHTML += phrase.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        } else {
          setTimeout(erasePhrase, 1250, callback);
        }
    }

   function erasePhrase(callback) {
    if (i >= 0) {
        coursesContainer.innerHTML = phrase.substring(0, i - 1);
        i--;
        setTimeout(erasePhrase, 50, callback);
    } else {
          // clear the container after erasing the phrase
        coursesContainer.innerHTML = '';
          // ctart the next phrase animation
        callback();
    }
   }

   typeWriter();
}

    // Start the animation when the page loads
window.onload = function () {
    animatePhrases(0);
};
 
const colors = [
    "rgba(51, 235, 168, 0.9)",
    "rgba(157, 109, 219, 0.9)",
    "rgba(248, 89, 147, 0.9)"
];

let currentColorIndex = 0;

function changeColor() {
    const overlay = document.getElementById("colorChangeOverlay");
    overlay.style.backgroundColor = colors[currentColorIndex];

    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

setInterval(changeColor, 2400);