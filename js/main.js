// Variables

const nav = document.querySelectorAll('.nav li')
const content = document.querySelectorAll('.main-content section')
const startBtn = document.querySelector('#start')
let aboutTxt = `Hi, my name is Daniel Salazar, I am from Colombia;¡
I am Infrastructure Enginner/Junior Developer¡
with 3 years of experiences working in IT;¡
I have knowledge in cloud services(AWS, Private Cloud),¡
Windows & Linux, SQL databases, troubleshoot, etc.¡
Now, i have 1 year learning about programming.¡¡
Main languajes: Python, Java, JavaScript`

// Click events | set var clickEvent with => click('#name')

// const click = (item) => {
//     let ce = document.querySelector(item);
//     ce.addEventListener('click', (e) => {
//         e.preventDefault();
//         console.log('button 1')
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
        if (e.classList.contains(opt)) {
            e.classList.remove('hide')
        }
    })
}

// Name and Title animations on page load

const welcome = () => {
    document.querySelector('.main-title').setAttribute('style', 'cursor:none')
    setTimeout(function () {
        get('.title').setAttribute('style', 'border-right:0');
    }, 6000);
    setTimeout(function () {
        // get('.name').textContent = 'Daniel Steven Salazar Uribe';
        get('#start').removeAttribute('class', 'hide');
        document.querySelector('.main-title').removeAttribute('style', 'cursor:none')
    }, 6000);
    setTimeout(function () {transitionDown()}, 5400);
}

startBtn.addEventListener('click', (e) => {
    e.preventDefault()
    transitionDown()
    setTimeout(function () {    
    document.querySelector('#footer').classList.remove('hide')
    document.querySelector('#header').classList.remove('hide')
    document.querySelector('.main-title').classList.add('hide')
    loadData('about')
    typing(aboutTxt, get('.about .txt'))
}, 700);
})


// Utils

const get = (item) => {return document.querySelector(item)}

const transitionDown = () => {
    get('#screen').setAttribute('class', 'lock transition-down')
        setTimeout(function () {
            get('#screen').removeAttribute('class', 'lock transition-down')
        }, 2000);
}

const typing = (str,item) => {
    let dat = Array.from(str)

    const letters = setInterval(function () {
        if (dat.length > 0) {
            l = dat.shift()
            if (l == '¡') {
                document.querySelector('.about .txt').innerHTML += '<br />'
            }else{
                document.querySelector('.about .txt').innerHTML += l
                
            }
        }else {
            clearTimeout(letters)
            console.log('stopped')
        }
    }, 120)
}


// Start Web

window.onload = () => {
    welcome()
    console.log('>_ Ready!')
}