//** == Pomodoro ==  */
console.log("Hello World Pomodoro");
const app = document.querySelector("#app");
const timeAPP = document.querySelector(`#time`);
const taskContainer = document.querySelector(`.task-container`);
const idTask = document.querySelector(`#idText`);
const badSubmit = document.querySelector(`#bADDSub`);
const form = document.querySelector(`#form`);
//console.log(form);

//** === Variables de Tiempo == */
const task = []; // Tareas agregadas =
let time = 0;
let timer = null; // Time of init =
let timeBreak = null; // Time of break => Descanso =
let current = null; // Tiempo Transcurriendo para trabajo =

//** === Events Formulary === */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log("form");
  idTask !== " " ? createTask(idTask.value) : (idTask.value = ` `);
});

//** === Function */
const createTask = () => {};
