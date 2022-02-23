// Variables

const nav = document.querySelectorAll('.nav li')
const section = document.querySelectorAll('.section')
const startBtn = document.querySelector('#start')
const aboutText = `
Name: Daniel Salazar | Age: 22 | Country: Colombia¡
Current Job: Infrastructure Analyst¡
Desired Job: Python/Java/JavaScript Developer¡
Experience: 3 years working in IT¡
Knowledges: Cloud Computing(AWS, Private Cloud), Windows, Linux,¡
SQL DBs, troubleshoot, Git, Agile, Virtualization, Scripting¡¡
Programming Skills: 1 year learning about Software Development
`
const aboutLang = `Python        [||||||||||||||||||||          ]  68%
Java          [|||||||||||||                 ]  43%
JavaScript    [|||||||||||                   ]  35%`

nav.forEach(e => {
    e.addEventListener('click', e => {
        let opt = e.target.textContent || 'about'
        nav.forEach(e => {
            e.removeAttribute('class', 'active')
        });
        e.target.setAttribute('class', 'active')
        console.log(opt)
        loadData(opt)
    })
})

let loadData = (opt) => {
    section.forEach(e => {
        e.classList.add('hide')
        if (e.getAttribute('id') == opt) {
            e.classList.remove('hide')
        }
    })
}

// Name and Title animations on page load

const welcome = () => {
    get('.main-title').setAttribute('style', 'cursor:none')
    setTimeout(function () {
        get('.title').setAttribute('style', 'border-right:0');
    }, 6000);
    setTimeout(function () {
        get('#start').removeAttribute('class', 'hide');
        get('.main-title').removeAttribute('style', 'cursor:none')
    }, 6000);
    setTimeout(function () {
        transitionDown()
    }, 5400);
}

startBtn.addEventListener('click', (e) => {
    e.preventDefault()
    transitionDown()
    setTimeout(function () {
        get('#footer').classList.remove('hide')
        get('#header').classList.remove('hide')
        get('.main-title').classList.add('hide')
        loadData('about')
        typing(aboutText, get('#about .block .txt'))
    }, 700);
    setTimeout(function () {
        get('.h3').classList.remove('hide')
        get('.pre.txt').classList.remove('hide')
        get('.h3').innerHTML = 'Main languajes'
        get('.pre.txt').innerHTML = aboutLang
    }, 24000)
})

//&ensp;
//&emsp;

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

const typing = (str, item) => {
    let words = Array.from(str)

    const letters = setInterval(function () {
        if (words.length > 0) {
            l = words.shift()
            if (l == '¡') {
                item.innerHTML += '<br />'
            } else {
                item.innerHTML += l
            }
        } else {
            clearTimeout(letters)
            console.log('stopped')
        }
    }, 80)
}


// Start Web

window.onload = () => {
    welcome()
    console.log('>_ Ready!')
}