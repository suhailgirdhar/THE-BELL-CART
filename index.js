
for (i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    makeSound(this.innerHTML);

    activeDrum(this.innerHTML);

  })
}

document.addEventListener("keypress", function(tapInsideEvent) {

  makeSound(tapInsideEvent.key);

  activeDrum(tapInsideEvent.key);

})


function makeSound(ghatna) {
  switch (ghatna) {
    case "a":
      var crash = new Audio("/Users/suhail/Desktop/WEB-DEVELOPMENT/PROJECTS/DRUM-KIT/Drum-Kit-Starting-Files/sounds/crash.mp3");
      crash.play();
      break;

    case "b":
      var kickBass = new Audio("/Users/suhail/Desktop/WEB-DEVELOPMENT/PROJECTS/DRUM-KIT/Drum-Kit-Starting-Files/sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "c":
      var snare = new Audio("/Users/suhail/Desktop/WEB-DEVELOPMENT/PROJECTS/DRUM-KIT/Drum-Kit-Starting-Files/sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("/Users/suhail/Desktop/WEB-DEVELOPMENT/PROJECTS/DRUM-KIT/Drum-Kit-Starting-Files/sounds/tom-1.mp3");
      tom1.play();
      break;

    case "e":
      var tom2 = new Audio("/Users/suhail/Desktop/WEB-DEVELOPMENT/PROJECTS/DRUM-KIT/Drum-Kit-Starting-Files/sounds/tom-2.mp3");
      tom2.play();
      break;


    default:
      alert("oops");
  }
}

function activeDrum(highlight) {
  var activeKeyClass = "." + highlight;
  document.querySelector(activeKeyClass).classList.add("pressed");
  setTimeout(function() {
    document.querySelector(activeKeyClass).classList.remove("pressed")
  }, 200);
}
