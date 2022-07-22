
const button = document.querySelector(".button")
const form = document.getElementById("myForm")

// const navItem = document.querySelectorAll("nav-link")

function mousePositionToCustomProp(event, element) {
    let posX = event.offsetX
    let posY = event.offsetY
    //set 2 different properties: ie. x property ('--x') set to posX(value) plus the unit px(pixel)
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
// dropdown.addEventListener("click", () => {
//     dropdown.classList.remove
//     dropdown.classList.add("navbar-collapse");

//     console.log("click")

// })
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
// navItem.addEventListener("click", () => {
//     dropdown.classList.add("navbar-collapse");

//     console.log("click")

// })

// link.addEventListener("click", () => {
//     html.classList.add("fade-out")
//     window.location.href = "/resume/index.html"
// }
// )

// window.addEventListener("load", function () {
//     this.setTimeout(() => {
//         loader.style.display = "none";
//     }, 2000)

// })