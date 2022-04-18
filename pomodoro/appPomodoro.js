//** ==== Pomodoro App Javascript ==== */

//** >>>>>>>>>>>>>>>>>>>>>>>>>> Variables */
//** =  Tareas  Agregadas  =*/
const tasks = [];
//** = Time tomar = */
let time = 0;
let timer = null;
let timerBreak = null;
let current = null; //>  Cuál es la tarea que se ejecuta ahora mismo.
let statusApp = "stop";

const bAdd = document.querySelector("#bAdd");
const itTask = document.querySelector("#itTask"); //>Text
const form = document.querySelector("#formId"); //> submit

//renderTasks();

//**  === Events == */

form.addEventListener("submit", (e) => {
  e.preventDefault(); //Anulamos su funcionalidad (submit)

  if (itTask.value !== " ") {
    createTask(itTask.value);
    itTask.value = " ";
    renderTasks(); //> Renderizar tarea
  }
});

//**==  function Crear tarea ==  2)*/
createTask = (value) => {
  const newTask = {
    id: (Math.random() * 100).toString(36).slice(2),
    title: value,
    completed: false,
  };

  tasks.unshift(newTask); //> unShift => Agrega al principio
};

//** Function para renderizar tareas =  Agregar al HTML == 3) =  */
function renderTasks() {
  const html = tasks.map((task) => {
    return `
        <div class="task">
        <div class="completed">${
          task.completed
            ? "<span class='done'>Done</span>"
            : `<button class="start-button" data-id="${task.id}">Start</button></div>`
        }
            <div class="title">${task.title}</div>
        </div>`;
  });

  const tasksContainer = document.querySelector("#tasks");
  tasksContainer.innerHTML = html.join("");

  const startButtons = document.querySelectorAll(".task .start-button");
  startButtons.forEach((startButton) => {
    startButton.addEventListener("click", () => {
      //> timer = null
      if (!timer) {
        startButtonHandler(startButton.getAttribute("data-id"));
        startButton.textContent = " In Progress...";
      }
    });
  });
}
//** = Calcular  los tiempos (25 min para concentrarte)= 4) */
startButtonHandler = (id) => {
  time = 25 * 60; //> Son 25 min y cada minuto tiene 60seg
  current = id;
  // Encontrar la tarea actual =>
  const taskIndex = task.findIndex((task) => task.id === id);
  const taskName = document.querySelector("#timeId #taskNameId");

  taskName.textContent = tasks[taskIndex].title;

  //> tiempo
  timer = setInterval(() => {
    timerHandler(id);
  }, 1000);
};

//** === 5) */
timerHandler = (id) => {
  time--;
  renderTime();

  if (time === 0) {
    markComplete(id);
    clearInterval(time);
    renderTasks();
    startBreak();
  }
};

//** == 6) */
markComplete = () => {};

startBreak = () => {};
//> Formato a un número>
renderTime = () => {};

//** Map = devuelve cadenas de strings == join() => Compila todas las cadenas e mete en un  Array*/
//** = setInterval ==> Cada determinado tiempo  = */
