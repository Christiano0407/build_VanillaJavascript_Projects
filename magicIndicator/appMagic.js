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
