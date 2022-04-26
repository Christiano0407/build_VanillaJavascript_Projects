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
//** 1)  == Array Songs Titles  == 1)  */
const songs = ["audio", "clocks", "travel"];

//** 2)  = Keep track = escuchar de Canciones 2)  */
let songIndex = 1;

//** 3)  = Cargar =  load 3 ) */
loadSong(songs[songIndex]);

//** = 4) Update = Descargar detalles de la canción = 4)  */
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

//** 7)  == Change Image and audio => Cambiar audio e img por event == */
btnPrev.addEventListener("click", prevSong);
btnNext.addEventListener("click", nextSong);
//*?Previous Song */
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}
//*?Next Song */
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

//*? == 8)  UpdateProgress / Audio  ==  */
updateProgress = (e) => {
  const { duration, currentTime } = e.srcElement;
  const progressParent = (currentTime / duration) * 100;
  progress.style.width = `${progressParent}%`;
};

//*? === 9) Ser Progress Bar / Obtener el Progress / Audio ===  */
setProgress = (e) => {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
};

//** == 8)  Time and update the songs  == */
audio.addEventListener("timeupdate", updateProgress);

//** === 9)  Click and Progress Bar ==  */
progressContainer.addEventListener("click", setProgress);
