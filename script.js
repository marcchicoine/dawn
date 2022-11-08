//DOM load event
window.addEventListener("DOMContentLoaded", () => {

  //Set speech recognition
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const roto = document.getElementById('roto');
const body = document.querySelector('body');
  const recognition = new SpeechRecognition(),
  padlock = document.querySelector('.padlock'),
  heardOutput = document.querySelector('.heard-output'),
  openPadlock = () => {
    roto.classList.add('appear');
    body.classList.add('sunrise');
    roto.autoplay = true;
    roto.load();
  },
  closePadlock = () => {
    roto.classList.remove('appear');
    body.classList.remove('sunrise');
    roto.autoplay = false;
    roto.load();


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
    if (transcript === 'dawn in new york by claude mckay' ) {
      openPadlock();
    } else {
      if (transcript === 'and i go darkly rebel to my work' ) {
        closePadlock();
      }
    }
  });

  //Restart speech recognition after user has finished talking
  recognition.addEventListener('end', recognition.start);

  //Click padlock to open/close
  padlock.addEventListener('click', () => padlock.classList.contains('unlock') ? closePadlock() : openPadlock());
  
});

 