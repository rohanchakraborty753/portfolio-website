$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dot',
        dotsClass: 'dots'
    })

    let hamburger = document.querySelector('.hamburger-button');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    let menuhome = document.querySelector('.menu-home');
    let menuabout = document.querySelector('.menu-about');
    let menuskills = document.querySelector('.menu-skills');
    let menuproject = document.querySelector('.menu-project');
    let menucontact = document.querySelector('.menu-contact');

    hamburger.addEventListener('click',function(){
        mobileNav.classList.add('open');
    });
    
    times.addEventListener('click',function(){
        mobileNav.classList.remove('open')
    });

    menuhome.addEventListener('click',function(){
        mobileNav.classList.remove('open')
    });

    menuabout.addEventListener('click',function(){
        mobileNav.classList.remove('open')
    });

    menuskills.addEventListener('click',function(){
        mobileNav.classList.remove('open')
    });

    menuproject.addEventListener('click',function(){
        mobileNav.classList.remove('open')
    });

    menucontact.addEventListener('click',function(){
        mobileNav.classList.remove('open')
    });
});