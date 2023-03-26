// Initialize the Web Audio API
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

// Load the background music from an online source
const backgroundMusicURL = "arcade.mp3"; // Replace this URL with the actual URL of your background music
let backgroundMusicBuffer;
let bufferLoaded = false;

// Function to load background music
function loadBackgroundMusic() {
    fetch(backgroundMusicURL)
        .then(response => response.arrayBuffer())
        .then(data => audioContext.decodeAudioData(data))
        .then(buffer => {
            backgroundMusicBuffer = buffer;
            bufferLoaded = true;
            playBackgroundMusic();
        });
}

// Play the background music
function playBackgroundMusic() {
    if (bufferLoaded) {
        const source = audioContext.createBufferSource();
        source.buffer = backgroundMusicBuffer;
        source.loop = true;
        source.connect(audioContext.destination);
        source.start(0);
    }
}

// Volume control
const volumeControlButton = document.getElementById("volumeControl");
let volumeOn = false; // Set to false initially

volumeControlButton.textContent = "Music: OFF"; // Set the initial button text

volumeControlButton.addEventListener("click", () => {
    if (!volumeOn) {
        if (!bufferLoaded) {
            loadBackgroundMusic();
        } else {
            playBackgroundMusic();
        }
        audioContext.resume();
        volumeControlButton.textContent = "Music: ON";
    } else {
        audioContext.suspend();
        volumeControlButton.textContent = "Music: OFF";
    }
    volumeOn = !volumeOn;
});
