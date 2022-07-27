//** == Pomodoro Variable ==  */
console.log("Hello World Pomodoro");
const app = document.querySelector("#app");
const timeAPP = document.querySelector(`#time`);
const taskContainer = document.querySelector(`.task-container`);
const idTask = document.querySelector(`#idTask`);
const badSubmit = document.querySelector(`#bADDSub`);
const form = document.querySelector(`#form`);
//console.log(form);

//** === Tiempo == */
const tasks = []; // Tareas agregadas =
let time = 0;
let timer = null; // Time of init =
let timeBreak = null; // Time of break => Descanso =
let current = null; // Tiempo Transcurriendo para trabajo =

//** === Events Formulary === */
//> renderTask ==> Renderizar cada una de las tareas ==
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log("form");
  if (idTask.value !== " ") {
    createTask(idTask.value);
    idTask.value = " ";
    renderTask();
  }
});

//** === Function */
const createTask = (value) => {
  const newTask = {
    id: (Math.random() * 100).toString(36).slice(3),
    title: value,
    completed: true,
  };

  tasks.unshift(newTask);
};

//*! == Rendering Task == */
const renderTask = () => {
  const html = tasks.map((task) => {
    return `   
       <div class="task">
           <div class="completed">${
             task.completed
               ? `<span class="done">Done</span>`
               : `<button class="start-button" data-id="${task.id}">Start</button>`
           }</div>
           <div class="title">${task.title}</div>
       </div>
    `;
  });
  taskContainer.innerHTML = html.join(" ");
};
// ==> join() => Une los Strings
