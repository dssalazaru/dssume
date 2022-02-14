// Variables

const nav = document.querySelectorAll(".nav li")
const content = document.querySelectorAll(".main-content section")

// Click events | set var clickEvent with => click("#name")

// const click = (item) => {
//     let ce = document.querySelector(item);
//     ce.addEventListener('click', (e) => {
//         e.preventDefault();
//         console.log("button 1")
//     })
// }


nav.forEach(e => {
    e.addEventListener('click', e => {
        e.preventDefault()
        let opt = e.target.textContent
        // console.log(opt)
        nav.forEach(e => {
            e.removeAttribute('class', 'active')
        });
        e.target.setAttribute('class', 'active')
        loadData(opt)
    })
})

let loadData = (opt) => {
    content.forEach(e => {
        e.classList.add('hide')
        if (e.classList.contains(opt)){
            e.classList.remove('hide')
        }
    })
    // document.querySelector(active).removeAttribute('class', 'hide')
}



// Name and Title animations on page load

const loadPage = () => {
    setTimeout(function () {
        document.querySelector(".title").setAttribute("style", "border-right:0");
    }, 6000);
    setTimeout(function () {
        document.querySelector(".name").textContent = "Daniel Steven Salazar Uribe";
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
    loadPage()
    console.log(">_ Ready!")
}