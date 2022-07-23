
const button = document.querySelector(".button")
const form = document.getElementById("myForm")


function mousePositionToCustomProp(event, element) {
    let posX = event.offsetX
    let posY = event.offsetY

    element.style.setProperty('--x', posX + 'px');
    element.style.setProperty('--y', posY + 'px');

}


button.addEventListener('click', (e) => {
    e.preventDefault()
    mousePositionToCustomProp(e, button);
    button.classList.add("pulse")


    button.addEventListener('animationend', () => {
        button.classList.remove('pulse')


    })
    setTimeout(() => {

        window.location.href = "/resume/index.html"

    }, 1000)
})


document.addEventListener("click", function (event) {
    if (event.target.classList.contains("navbar-toggler-icon")) {
        document.getElementById("navbarNavDropdown").classList.toggle("show");
    } else if (event.target.classList.contains("nav-link")) {
        document.getElementById("navbarNavDropdown").classList.remove("show");
    }
});
function openForm() {
    if (form.classList.contains("close")) {
        form.classList.remove("close")
        form.classList.add("open")
    } else {
        form.classList.remove("open")
        form.classList.add("close")
    }
}
