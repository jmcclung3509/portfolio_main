
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
const animateElement = document.querySelector('.animate');

// Create a new Intersection Observer with threshold set to 0.3
let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
      animateElement.classList.add('visible');
    } else {
      animateElement.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

// Start observing the animate element
observer.observe(animateElement);