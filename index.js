
const button = document.querySelector(".button")
const button2 = document.querySelector(".button2")



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
        window.location.href = "resume/index.html"
    }, 1000)



})

button2.addEventListener('click', (e) => {
    e.preventDefault()
    mousePositionToCustomProp(e, button2);
    button2.classList.add("pulse")


    button2.addEventListener('animationend', () => {
        button2.classList.remove('pulse')
    })
    setTimeout(() => {

        window.location.href = "#contact"

    }, 1000)

})




document.addEventListener("click", function (event) {
    if (event.target.classList.contains("navbar-toggler-icon")) {
        document.getElementById("navbarNavDropdown").classList.toggle("show");
    } else if (event.target.classList.contains("nav-link")) {
        document.getElementById("navbarNavDropdown").classList.remove("show");
    }
});
