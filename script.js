

const button = document.getElementById('button');
const audioElement = document.getElementById('audio');


function test(){
    VoiceRSS.speech({
        key: 'eec468aa49fd495cb9f0e8bdbfa6fa0c',
        src: 'Hello, world!',
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false,
    });
}

test();