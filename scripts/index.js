const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const closedd = document.querySelector("#modal .header a")

buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})

closedd.addEventListener("click", () => {
      modal.classList.add("hide")
})
