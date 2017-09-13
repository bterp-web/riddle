// RESPONSIVE NAVIGATION

var navLinks = document.querySelector('.nav-mobile');
var narrowLinks = document.querySelector('.narrowLinks');

navLinks.addEventListener('click', toggle);

function toggle() {
	narrowLinks.classList.toggle('hidden');
};

// STICKY NAV

$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 290) {
            $('nav.main-nav').addClass('stickytop');
        }
        else {
            $('nav.main-nav').removeClass('stickytop');
        }
    });
});