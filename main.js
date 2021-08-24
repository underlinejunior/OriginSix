/*abre e fecha o menu*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
console.log(document.querySelectorAll('nav .toggle'))
for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}
/* fechar menu ao clicar em um item do menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}
/*mudar o header da pagina quando der scrool*/

function headerEffect() {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

/*carrocel  testimonials swiper*/
const swiper = new Swiper('.swiper-container', {

        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
        },
        mousewheel: true,
        keyboard: true,
    })
    /*carregar pagina durante a rolagem scrollreveal*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    reset: true,
})
scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonial,
    #contact .text, #contact .links,
    footer .brand, footer .social`, { interval: 100 })

/* botao voltar para o topo*/
function backToTop() {
    const backToTopButton = document.querySelector('.to-top')
    if (window.scrollY >= 500) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

/* Efeitos no Scroll*/
window.addEventListener('scroll', function() {
    backToTop()
    headerEffect()
})