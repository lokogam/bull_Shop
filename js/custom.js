var control_timeout, footerHeight;
$(document).foundation();
$(document).ready(function() {
    $("html").niceScroll({ autohidemode: false });
    $('#menu').localScroll({ hash: true, onAfterFirst: function() { $('html, body').scrollTo({ top: '-=25px' }, 'fast'); } });
    $('.flexslider').flexslider({
        animation: "fade",
        directionNav: true,
        controlNav: false,
        pauseOnAction: true,
        pauseOnHover: true,
        direction: "horizontal",
        slideshowSpeed: 5500
    });
});