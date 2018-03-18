//nav marker show/hide-toggle
var navLanding__markerLanding = $('.navLanding__markerLanding');

$('.navLanding__a').hover(function () {
    $(navLanding__markerLanding).css('display', 'none');
});

$('.navLanding__ul').mouseleave(function () {
    $(navLanding__markerLanding).show();
})
