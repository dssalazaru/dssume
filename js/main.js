// Variables

const nav = document.querySelectorAll('.nav li')
const content = document.querySelectorAll('.main-content section')
const startBtn = document.querySelector('#start')

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
}, 700);

})

// Start page

const start = () => {
    // fadeIn
}


// Utils

const get = (item) => {
    return document.querySelector(item)
}

const transitionDown = () => {
    get('#screen').setAttribute('class', 'lock transition-down')
        setTimeout(function () {
            get('#screen').removeAttribute('class', 'lock transition-down')
        }, 2000);
}

const typing = (str,item) => {
    dat = Array.from(str)
    let i = 0
    
const repeat = setInterval(function () {
    if (dat.length > 0) {
    get('.test').textContent += dat.shift()
    }else {
        clearTimeout(repeat)
    }
}, 150)
}

// Start Web

window.onload = () => {
    welcome()
    var dat = 'Hi, my name is Daniel Salazar, i am from Colombia, i am infrastructure enginner with 3 years of experiences     in IT working with cloud services, Windows & Linux, SQL databases, troubleshoot and 1 year learning about     programming with languages like.'
    typing(dat, get('.test'))
    console.log('>_ Ready!')
}