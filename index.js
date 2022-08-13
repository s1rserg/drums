let drums = document.querySelectorAll('.drum');

for (drum of drums){
drum.addEventListener('click', function (){
  let buttonHtml = this.innerHTML;
  pressClick(buttonHtml);
  buttonAnimation(buttonHtml);
  })
}

addEventListener('keydown', function(event){
  pressClick(event.key);
  buttonAnimation(event.key);
})

function pressClick(drumNumber){
  switch (drumNumber) {
    case 'w': new Audio('sounds/tom-1.mp3').play();
    break;
    case 'a': new Audio('sounds/tom-2.mp3').play();
    break;
    case 's': new Audio('sounds/tom-3.mp3').play();
    break;
    case 'd': new Audio('sounds/tom-4.mp3').play();
    break;
    case 'j': new Audio('sounds/crash.mp3').play();
    break;
    case 'k': new Audio('sounds/kick-bass.mp3').play();
    break;
    case 'l': new Audio('sounds/snare.mp3').play();
    break;
  }
}

function buttonAnimation(buttonNumber){
  document.querySelector("." + buttonNumber).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("." + buttonNumber).classList.remove("pressed");
  }, 100)
}
