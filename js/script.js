var nav__markerLanding = $(".nav__markerLanding");

$(".nav__a").hover(function () {
    $(nav__markerLanding).hide();
});

//if ($(".nav__markerLanding").is(":hidden")) {

//    alert('test');

//}

$('.nav__ul').mouseleave(function () {
    $(nav__markerLanding).show();
})