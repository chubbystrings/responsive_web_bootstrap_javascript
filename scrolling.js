$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
        $(".fill-screen").css("width", window.innerWidth);

    });

    

    $('body').scrollspy({ 
        target: '#navbar-example',
        offset: 160
     });

    //smooth scrolling
    $('nav a, .down-button a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1500, 'easeInOutExpo');

        event.preventDefault();
    });

    //Parallax scrolling

    // $(window).stellar();

    //Wow Js initialization

    // new WOW().init();
});