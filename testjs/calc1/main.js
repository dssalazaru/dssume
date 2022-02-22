const display = document.querySelector(".display")
// const n = document.querySelectorAll("td.n")
const td = document.querySelectorAll("td")

td.forEach((e) => {
    e.addEventListener("click", (e) => {
        e.preventDefault()
        let inClass = e.target.getAttribute("class")
        let elem = e.target.textContent
        if (inClass == "display"){
            e.preventDefault()
        }
        else if (inClass == "n") {
            isCero()
            display.textContent += e.target.textContent
        }
        else if (inClass == "o") {
            if(display.textContent == 0){
                e.preventDefault()
            }else {
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
                    case "*":
                        display.textContent += elem
                        break
                    default:
                        console.error("xd")
                }
            }
            
        }
        else if (inClass == "ac") {
            let data = display.textContent
            display.textContent = ""
            for (let i = 0; i < (data.length -1); i++) {
                display.textContent += data[i]
            }
        }else {
            let dat = display.textContent
            // let num = display.textContent.split(/[$*\-+/]/g)
            // let ope = display.textContent.replace(/[$1-9]/g,'')
            let num = ""
            let ope = []
            let n = [0,1,2,3,4,5,6,7,8,9]
            let o = ['+', '-', '*', '/']
            let con = 0
            Array.from(dat).forEach((e) => {
                if (e in n){
                    num += e
                    con = 0
                } else if (o.includes(e)){
                    // e.replace(/[$*\-\+/]+/g,e)
                    if (num != '') {ope.push(num); num = ""}
                    if (con == 0){
                        ope.push(e)
                        con++
                    }
                }
            }) 
            if (num != '') {ope.push(num); num = ""}
            while (o.includes(ope[ope.length - 1]) || ope[ope.length - 1] == ''){
                    ope.pop()
            }
            display.textContent = eval(ope.join(' '))
        }
    })
})

const lastElement = (lst) => {
    lst 
}


const sum = (n1, n2) => {
    display.textContent = n1 + n2
}

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