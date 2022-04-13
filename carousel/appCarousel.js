//** === Variables ==== */
const row = document.querySelector(".row");
const header = document.querySelector("#headerID");

const container = document.querySelector(".container");

//** ==================== Project  MDN*/
//**Element.matches() */
//**El método matches() comprueba si el Element sería seleccionable por el selector CSS especificado en la cadena; en caso contrario, retorna false. */

//**Element.closest() */
//**El método closest() de la interfaz Element devuelve el ascendiente más cercano al elemento actual (o el propio elemento actual) que coincida con el selector proporcionado por parámetro. Si no existe dicho ascendiente, devuelve null. */

//** ============= ============ Project Carousel  ============== ================= ========== */
document.addEventListener("click", (e) => {
  let handle;

  if (e.target.matches(".handle")) {
    handle = e.target;
  } else {
    handle = e.target.closest(".handle");
  }

  if (handle != null) onHandleClick(handle);
});

//** >>>>  onHandleClick */
function onHandleClick(handle) {
  const progressBar = handle.closest(".row").querySelector(".progress__bar");
  const slider = handle.closest(".container").querySelector(".slider");

  const sliderIndex = parseInt(
    getComputedStyle(slider).getPropertyValue("--slider-index")
  );

  const progressBarItemCount = progressBar.children.length;

  //> btn-left
  if (handle.classList.contains("left__handle")) {
    if (sliderIndex - 1 < 0) {
      slider.style.setProperty("--slider-index", progressBarItemCount - 1);
      progressBar.children[sliderIndex].classList.remove("active");
      progressBar.children[progressBarItemCount - 1].classList.add("active");
    } else {
      slider.style.setProperty("--slider-index", sliderIndex - 1);
      progressBar.children[sliderIndex].classList.remove("active");
      progressBar.children[sliderIndex - 1].classList.add("active");
    }
  }

  //> btn-right
  if (handle.classList.contains("right__handle")) {
    /* slider.style.setProperty("--slider-index", sliderIndex + 1); */
  }
}
