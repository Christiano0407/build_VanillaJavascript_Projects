console.group("Magic nav Javascript");

const indicator = document.querySelector("[data-indicator]");
console.log(indicator);

document.addEventListener("click", (e) => {
  //console.log("click");

  let anchor;

  if (e.target.matches("a")) {
    anchor = e.target;
  } else {
    anchor = e.target.closest("a");
  }

  if (anchor != null) {
    const allAnchors = [...document.querySelectorAll("a")];
    const index = allAnchors.indexOf(anchor);

    indicator.style.setProperty("--position", index);

    document.querySelectorAll("a").forEach((elem) => {
      elem.classList.remove("active");
    });

    anchor.classList.add("active");
  }
});
console.groupEnd();

//** =  Element.matches()  = */
/*
El método matches() comprueba si el Element sería seleccionable por el selector CSS especificado en la cadena; en caso contrario, retorna false.
*/

//*? =  Element.closest()  = */
/*
El método closest() de la interfaz Element devuelve el ascendiente más cercano al elemento actual (o el propio elemento actual) que coincida con el selector proporcionado por parámetro. Si no existe dicho ascendiente, devuelve null.
*/

//** = CSSStyleDeclaration.setProperty() = */
/*
The CSSStyleDeclaration.setProperty() method interface sets a new value for a property on a CSS style declaration object.
 */

//*? =  Event.target = */
/*
La propiedad target de la interfaz del event.currentTarget es una referencia al objeto en el cual se lanzo el evento. Es diferente de event.currentTarget donde el controlador de eventos (event handler) es llamado durante la fase de bubbling or capturing del evento.
*/
