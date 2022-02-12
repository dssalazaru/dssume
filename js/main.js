// Variables


// Click events | set var clickEvent with => click("#name")

const click = (item) => {
    let ce = document.querySelector(item);
    ce.addEventListener('click', (e) => {
        e.preventDefault();
        // event
    })
}
// Name and Title animations on page load

const loadAnimation = () => {
    setTimeout(function () {
        document.querySelector(".title").setAttribute("style", "border-right:0");
    }, 6000);
    setTimeout(function () {
        document.querySelector(".name").textContent = "Daniel Salazar Steven Uribe";
    }, 6000);
    setTimeout(function () {
        document.querySelector("#screen").setAttribute("class", "lock transition-down");
        setTimeout(function () {
            document.querySelector("#screen").removeAttribute("class", "lock transition-down")
        }, 2000);
    }, 5500);
}

// Start Web

window.onload = () => {
    loadAnimation()
    console.log("Ready")

}