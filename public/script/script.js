$(window).scroll(function () {
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

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