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
  //console.log(duration);
  const progressParent = (currentTime / duration) * 100;
  progress.style.width = `${progressParent}%`;
};
//console.log(updateProgress());

//*? === 9) Ser Progress Bar / Obtener el Progress / Audio ===  */
setProgress = (e) => {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  //console.log(clickX);
  const duration = audio.duration;
  //console.log(duration);

  audio.currentTime = (clickX / width) * duration;
};

//*? 11)  == DurTime == Tiempo de duración ==  */
function durTime(e) {
  const { duration, currentTime } = e.srcElement;
  let sec;
  let sec_d;

  //> Define minutes currentTime =
  let min = currentTime == null ? 0 : Math.floor(currentTime / 60);
  min = min < 10 ? "0" + min : min;

  //> Define Seconds currentTime ==
  function get_sec(x) {
    if (Math.floor(x) >= 60) {
      for (let i = 1; i <= 60; i++) {
        if (Math.floor(x) >= 60 * i && Math.floor(x) < 60 * (i + 1)) {
          sec = Math.floor(x) - 60 * i;
          sec = sec < 10 ? "0" + sec : sec;
        }
      }
    } else {
      sec = Math.floor(x);
      sec = sec < 10 ? "0" + sec : sec;
    }
  }
  //> get
  get_sec(currentTime, sec);

  //> Define minutes duration ==>
  let min_d = isNaN(duration) === true ? "0" : Math.floor(duration / 60);
  min_d = min_d < 10 ? "0" + min_d : min_d;

  //> Get__sec_duration
  function get_sec_d(x) {
    if (Math.floor(x) >= 60) {
      for (let i = 1; i <= 60; i++) {
        if (Math.floor(x) >= 60 * i && Math.floor(x) < 60 * i + 1) {
          sec_d = Math.floor(x) - 60 * i;
          sec_d = sec_d < 10 ? "0" + sec_d : sec_d;
        }
      }
    } else {
      sec_d = isNaN(duration) === true ? "0" : Math.floor(x);
      sec_d = sec_d < 10 ? "0" + sec_d : sec_d;
    }
  }

  // Define Seconds Duration
  get_sec_d(duration);

  // Change Duration DOM

  durTime.innerHTML = min_d + ": " + sec_d;
}

//** == 7) Button Prev and Next ===  */
btnPrev.addEventListener("click", prevSong);
btnNext.addEventListener("click", nextSong);

//** == 8)  Time and update the songs  == */
audio.addEventListener("timeupdate", updateProgress);

//** === 9)  Click and Progress Bar ==  */
progressContainer.addEventListener("click", setProgress);

//** == 10) Songs End / Final de canción = Termina comienza otra canción = */
audio.addEventListener("ended", nextSong);

//** === 11) Time of songs / Tiempo de duración de canción == */
audio.addEventListener("timeupdate", durTime);

//*? =========== ======== =========== ==== ============= ========= ======== */
//**  == Element.clientWidth */
/* 
La propiedad Element.clientWidth es cero para elementos sin CSS o cajas de diseño (layout), en caso contrario es la anchura interior de un elemento en pixels, incluyendo la anchura de relleno (padding) pero no la anchura de la barra de desplazamiento vertical (si está presente, si está dibujada), el borde o el margen.
*/

//** == MouseEvent.offsetX */
/*
La offsetXpropiedad de solo lectura de la MouseEventinterfaz proporciona el desplazamiento en la coordenada X del puntero del mouse entre ese evento y el borde de relleno del nodo de destino.
*/

//** === Play ()  == HTMLMediaElement.play() == */
/*
El método play() de HTMLMediaElement intenta comenzar la reproducción de los medios. Devuelve una promesa (Promise) que se resuelve cuando la reproducción se ha iniciado con éxito. Si no se inicia la reproducción por cualquier motivo, como problemas de permisos, la promesa será rechazada.
*/

//** === Paused () == HTMLMediaElement.pause() ==  */
/*
El método HTMLMediaElement.pause() pausará la reproducción de los medios, si los medios ya están en pausa, este método no tendrá efecto.
*/
