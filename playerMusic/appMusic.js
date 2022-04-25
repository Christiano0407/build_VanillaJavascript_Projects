//** === Player Audio === */
//** >Variable < */
const musicContainer = document.querySelector("#musicContainer");
const progressContainer = document.querySelector("#progressContainer");
const progress = document.querySelector("#progress");
const title = document.querySelector("#title");
console.log(title);
const cover = document.querySelector("#cover"); //> IMG>

//** >  Buttons =  */
const btnPrev = document.querySelector("#prev");
const btnPlay = document.querySelector("#play");
const btnNext = document.querySelector("#next");
//** Audio */
const audio = document.querySelector("#audio");

//** ====== ======= Init Project Play Music ========= ========  */
//** == Array Songs Titles  == 1)  */
const songs = ["audio", "clocks", "travel"];

//** = Keep track = escuchar de Canciones 2)  */
let songIndex = 0;

//** = Cargar =  load 3 ) */
loadSong(songs[songIndex]);

//** = 4) Update = Descargar detalles de la canción =  */
function loadSong(song) {
  title.innerText = song;
  audio.src = `../src/audio/${song}.mp3`;
  cover.src = `../src/assets/${song}.jpg`;
}

//** 6)  = PlaySong = puseSong */

function playSong() {
  musicContainer.classList.add("play");
  btnPlay.querySelector(`i.fas`).classList.remove("fa-play");
  btnPlay.querySelector(`i.fas`).classList.add(`fa-pause`);
  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove("play");
  btnPlay.querySelector(`i.fas`).classList.add(`fa-play`);
  btnPlay.querySelector(`i.fas`).classList.remove(`fa-pause`);
  audio.pause();
}

//** = 5) Event Listener Play =  */
btnPlay.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
