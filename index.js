function rain() {
  let amount = 200;
  let body = document.querySelector("body");

  let i = 0;

  while (i < amount) {
    let drop = document.createElement("i");

    let size = Math.random() * 5;
    let posx = Math.floor(Math.random() * window.innerWidth);
    let delay = Math.random() * -20;
    let duration = Math.random() * 5;

    drop.style.width = 0.2 + size + "px";
    drop.style.left = `${posx}px`;
    drop.style.animationDelay = `${delay}s`;
    drop.style.animationDuration = 1 + `${duration}s`;

    body.appendChild(drop);

    i++;
  }
}

rain();

//keyboard event
document.addEventListener("keypress", function soundKeys(event) {
  sound(event.key);
  buttonAnimation(event.key);
});

const count = document.querySelectorAll(".drum").length;
//mouse event
for (let i = 0; i <= count; i++) {
  document
    .querySelectorAll("a")
    [i].addEventListener("click", function soundButtons() {
      let changeButton = this.innerHTML;
      sound(changeButton);
      buttonAnimation(changeButton);
    });
}

//condition switch case
function sound(change) {
  switch (change) {
    case "p":
      {
        var audio = new Audio(`/assets/audio/note-1.mp3`);
        audio.play();
      }
      break;

    case "l":
      {
        var audio = new Audio(`/assets/audio/note-2.mp3`);
        audio.play();
      }
      break;

    case "a":
      {
        var audio = new Audio(`/assets/audio/note-3.mp3`);
        audio.play();
      }
      break;

    case "y":
      {
        var audio = new Audio(`/assets/audio/note-4.mp3`);
        audio.play();
      }
      break;

    case "w":
      {
        var audio = new Audio(`/assets/audio/note-5.mp3`);
        audio.play();
      }
      break;

    // case "d":
    //   {
    //     var audio = new Audio(`/assets/audio/note-6.mp3`);
    //     audio.play();
    //   }
    //   break;

    // case "n":
    //   {
    //     var audio = new Audio(`/assets/audio/note-7.mp3`);
    //     audio.play();
    //   }
    //   break;

    default:
      alert("Worng Key pressed or Clicked");
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector(`.${currentKey}`);
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 3000);
}
