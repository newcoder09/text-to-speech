

const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// The button to be only clicked once when telling the Joke
function toggleButton (){
   button.disabled = !button.disabled; 
}

// Pass the joke to our voicerss api
function tellMe(joke) {
    
    VoiceRSS.speech({
        key: 'eec468aa49fd495cb9f0e8bdbfa6fa0c',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false,
    });
}



// get jokes from the API
async function getJokes(){
    let joke = '';
    const apiURL = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&idRange=0-50';
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      if(data.setup)
{
    joke = `${data.setup}... ${data.delivery}`;
}else{
    joke = data.joke;
} 

tellMe(joke);
// Disable Button
toggleButton();
}catch (error){
        console.log('whoops', error);
    }
}

// Event listeners
button.addEventListener('click', getJokes);
audio.addEventListener('ended', toggleButton);