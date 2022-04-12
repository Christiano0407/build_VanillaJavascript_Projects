//** >>>>>>>> Const or Variables>>>>>>>>>>>>>>> */
const colors = [
  "violet",
  "yellow",
  "green",
  "#F27E93",
  "#0554F2",
  "#1B78F2",
  "#66B1F2",
  "#F24130",
];
console.log(colors);

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

//** ==== Events */

btn.addEventListener("click", () => {
  //console.log("Click");

  let randomColor = getRandomColor();

  document.body.style.backgroundColor = colors[randomColor];

  color.textContent = colors[randomColor];
});

//** Math == */
//> Math.floor() ==> Devuelve el máximo entero menor o igual a un número.
//= Math.random() ==>  La función Math.random() retorna un punto flotante, un número pseudo-aleatorio dentro del rango [0, 1). Esto es, desde el 0 (Incluido) hasta el 1 pero sin incluirlo (excluido), el cual se puede escalar hasta el rango deseado. La implementación selecciona la semilla inicial hasta el algoritmo que genera el número aleatorio; este no puede ser elegido o cambiado por el usuario.
getRandomColor = () => {
  return Math.floor(Math.random() * colors.length);
};
