document.addEventListener("click", menuAction)

function menuAction(e) {
  const target = e.target
  if(target.closest(".button-burger")) {
    document.body.classList.toggle("menu-active")
  }
}