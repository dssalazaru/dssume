const display = document.querySelector(".display")
// const n = document.querySelectorAll("td.n")
const td = document.querySelectorAll("td")

td.forEach((e) => {
    e.addEventListener("click", (e) => {
        isCero()
        let inClass = e.target.getAttribute("class")
        let elem = e.target.textContent
        if (inClass == "n") {
            display.textContent += e.target.textContent
        }
        if (inClass == "o") {
            switch (elem) {
                case "+":
                    display.textContent += elem
                    break
                case "-":
                    display.textContent += elem
                    break
                case "/":
                    display.textContent += elem
                    break
                case "x":
                    display.textContent += "*"
                    break
                default:
                    console.error("xd")
            }
        }
        if (inClass == "ac") {
            console.log(data.replace)
        }
    })
})

const sum = (n1, n2) => {
    display.textContent = n1 + n2
}


// Array.shift


let isCero = () => {
    if (display.textContent == 0)
        display.textContent = ""
}

let reset = () => {
    display.textContent = 0
}

window.onload = () => {
    reset()
};