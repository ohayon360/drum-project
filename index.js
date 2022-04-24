function playSound(path) {
  var audio = new Audio(path);
  audio.volume = 0.2;
  audio.play();
}

len = document.querySelectorAll(".drum").length; //the buttons count
//for loop with a anonymos function
for (var i = 0; i < len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //console.log(this.innerHTML);
    this.style.color = "white";
    switch (this.innerHTML) {
      case 'w':
        playSound('sounds/tom-1.mp3');

        break;
      case 'a':
        playSound('sounds/tom-2.mp3');
      case 's':
        playSound('sounds/tom-3.mp3');
        break;
      case 'd':
        playSound('sounds/tom-4.mp3');
        break;
      case 'j':
        playSound('sounds/snare.mp3');
        break;
      case 'k':
        playSound('sounds/crash.mp3');
        break;
      case 'l':
        playSound('sounds/kick-bass.mp3');
        break;

      default:

    }
  });

  document.addEventListener("keypress", function(event) {
    //console.log(event);
    switch (event.key) {
      case 'w':
        playSound('sounds/tom-1.mp3');

        break;
      case 'a':
        playSound('sounds/tom-2.mp3');
      case 's':
        playSound('sounds/tom-3.mp3');
        break;
      case 'd':
        playSound('sounds/tom-4.mp3');
        break;
      case 'j':
        playSound('sounds/snare.mp3');
        break;
      case 'k':
        playSound('sounds/crash.mp3');
        break;
      case 'l':
        playSound('sounds/kick-bass.mp3');
        break;

      default:

    }

  });
}
