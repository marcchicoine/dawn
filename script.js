//DOM load event
window.addEventListener("DOMContentLoaded", () => {

  //Set speech recognition
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const roto = document.getElementById('roto');
const body = document.querySelector('body');
const title = document.querySelector('h2.title')
const footer = document.querySelector('h3.foot')
const poem = document.querySelector('.marquee span')

  const recognition = new SpeechRecognition(),
  padlock = document.querySelector('.padlock'),
  heardOutput = document.querySelector('.heard-output'),
  openPadlock = () => {
    roto.classList.add('appear');
    body.classList.add('sunrise');
    roto.load();
    roto.autoplay = true;
    roto.muted = false;
    title.classList.add('fade');
    footer.classList.add('tada');
    poem.style.color = "black";
    poem.classList.remove('still');
    makeMarquee();
  },
  closePadlock = () => {
    roto.classList.remove('appear');
    body.classList.remove('sunrise');
    roto.muted = true;
    title.classList.remove('fade');
    footer.classList.remove('tada');
    poem.classList.remove('mix-difference');
    poem.style.color = "white";
    poem.classList.add('still');
    marqueeoff ();
  };

  //Start speech recognition
  recognition.start();

  //Listen for when the user finishes talking
  recognition.addEventListener('result', e => {

    //Get transcript of user speech
    const transcript = e.results[0][0].transcript.toLowerCase().replace(/\s/g,' ');

    //Output transcript
    heardOutput.textContent = transcript;

    //Check if transcript is valid
    if (transcript === 'dawn' ) {
      openPadlock();
    } else {
      if (transcript === 'dusk' ) {
        closePadlock();
      }
    }
  });

  //Restart speech recognition after user has finished talking
  recognition.addEventListener('end', recognition.start);

  //Click padlock to open/close
  padlock.addEventListener('click', () => padlock.classList.contains('unlock') ? closePadlock() : openPadlock());
  
});

 //check for movement
 var score = document.querySelector('span#score')
//checks score inner html ever 5 seconds
setInterval(function(){ 
console.log (score.innerHTML)
if (score.innerHTML > 50 && roto.classList.contains('appear')) {
  roto.style.opacity = "1";
  roto.style.scale = "1";

  } 
  else if (score.innerHTML != 0) {
    roto.style.opacity = "0.7";
    roto.style.scale = "0.4";

   }
  else {
  roto.style.opacity = ".2";
  roto.style.scale = "0.4";

  }
}, 2000);


