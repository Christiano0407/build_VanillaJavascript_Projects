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

//** => Render */
renderTasks();

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
  time = 0.5 * 60; //> Son 25 min y cada minuto tiene 60seg
  current = id;
  // Encontrar la tarea actual =>
  const taskIndex = tasks.findIndex((task) => task.id === id);
  const taskName = document.querySelector("#timeId #taskNameId");

  taskName.textContent = tasks[taskIndex].title;

  //> tiempo
  timer = setInterval(() => {
    timerHandler(id);
  }, 1000);
};

//** === 5) */
timerHandler = (id = null) => {
  time--;
  renderTime();

  if (time === 0) {
    markComplete(id);
    clearInterval(timer);
    renderTasks();
    startBreak();
  }
};

//** =Nos ponga como la tarea se completó e reiniciar= 6) */
markComplete = (id) => {
  const taskId = tasks.findIndex((task) => task.id === id);
  tasks[taskId].completed = true;
};

//**Start */
startBreak = () => {
  time = 1 * 60;
  document.querySelector("#timeId  #taskNameId").textContent = "Break";
  timerBreak = setInterval(timerBreakHandler, 1000);
};

//**Break */
timerBreakHandler = () => {
  time--;
  renderTime();

  if (time === 0) {
    clearInterval(timerBreak);
    current = null;
    document.querySelector("#timeId #taskNameId").textContent = " ";
    renderTime();
  }
};

//**Render */
//> Formato a un número>
renderTime = () => {
  const timeDiv = document.querySelector("#timeId  #valueId");
  const minutes = parseInt(time / 60);
  const seconds = parseInt(time % 60);

  timeDiv.textContent = `${minutes < 10 ? "0" : " "}${minutes}:${
    seconds < 10 ? "0" : " "
  }${seconds}`;
};

//** Map = devuelve cadenas de strings == join() => Compila todas las cadenas e mete en un  Array*/
//** = setInterval ==> Cada determinado tiempo  = */
