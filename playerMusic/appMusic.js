//** === Player Audio === */
//** >Variable < */
const musicContainer = document.querySelector("#musicContainer");
const progressContainer = document.querySelector("#progressContainer");
const progress = document.querySelector("#progress");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover"); //> IMG>

//** >  Buttons =  */
const btnPrev = document.querySelector("#prev");
const btnPlay = document.querySelector("#play");
const btnNext = document.querySelector("#next");
//** Audio */
const audio = document.querySelector("#audio");

//** ====== ======= Init Project Play Music ========= ========  */
//** == Array Songs Titles  == 1)  */
const songs = ["Remix", "Clocks", "Travel"];

//** = Keep track = escuchar de Canciones 2)  */
let songIndex = 2;

//** = Cargar =  load 3 ) */
loadSong(songs[songIndex]);

//** = 4) Update = Descargar detalles de la canción =  */
function loadSong(song) {
  title.innerText = song;
  audio.src = `..src/assets/audio/${song}.mp3`;
  cover.src = `../src/assets/${song}.jpg`;
}
