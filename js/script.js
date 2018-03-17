//nav marker show/hide-toggle
var nav__markerLanding = $('.nav__markerLanding');

$('.nav__a').hover(function () {
    $(nav__markerLanding).css('display', 'none');
});

$('.nav__ul').mouseleave(function () {
    $(nav__markerLanding).show();
})
