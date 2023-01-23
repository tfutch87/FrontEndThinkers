// $(window).scroll(function () {
//     var sticky = $('.sticky'),
//         scroll = $(window).scrollTop();

//     if (scroll >= 100) sticky.addClass('fixed');
//     else sticky.removeClass('fixed');
// });

// nav link active

let links = document.querySelectorAll('.nav-link');

links.forEach(function (link) {
    link.addEventListener('click', (e) => {
        removeClass(links);
        e.target.classList.add('active');
    })
})

function removeClass(elements) {
    elements.forEach(function (element) {
        element.classList.remove('active');
    })
}

const menu_btn = document.querySelector('.hamburger-menu');
const mobile_nav = document.querySelector('.mobile-nav')

menu_btn.addEventListener('click', (e) => {

    menu_btn.classList.toggle('is-active');
    mobile_nav.classList.toggle('is-active')

    if (e.target.classList.contains('is-active')) {

        document.body.classList.add('body-no-scroll');

    } else {

        document.body.classList.remove('body-no-scroll');

    }


})