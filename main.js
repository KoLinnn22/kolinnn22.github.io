const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
} 
// Menu Hidden
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU MOBILE  

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}

window.addEventListener('scroll' , blurHeader)

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        :  scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll' , scrollUp)

const sections = document.querySelector('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[herf*=' + sectionId +']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
        
    })
}
window.addEventListener('scroll' , scrollActive)

const sr = ScrollReveal({

    origin:'top',
    distance: '60px',
    durantion: 3000,
    delay: 700,
})

sr.reveal(`.home__data , .explore__data , .explore__user , .footer__container`)
sr.reveal(`.home__card`, {delay: 700, distance: '100px' , interval: 100})
sr.reveal(`.about__data , .join__image`, {origin: 'right'})
sr.reveal(`.about__image , .join__data`, {origin: 'left'})
sr.reveal(`.popular__card`, {interval: 200})