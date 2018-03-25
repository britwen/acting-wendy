//nav marker show/hide-toggle
var navLanding__markerLanding = $('.navLanding__markerLanding');

$('.navLanding__a').hover(function () {
    $(navLanding__markerLanding).css('display', 'none');
});

$('.navLanding__ul').mouseleave(function () {
    $(navLanding__markerLanding).show();
})



var imgBox = document.getElementsByClassName("imgBox");
imgBox = imgBox[0];


var col1 = document.getElementsByClassName("col1");
col1 = col1[0];
var col2 = document.getElementsByClassName("col2");
col2 = col2[0];
var col3 = document.getElementsByClassName("col3");
col3 = col3[0];
var col4 = document.getElementsByClassName("col4");
col4 = col4[0];
var col5 = document.getElementsByClassName("col5");
col5 = col5[0];


col1.addEventListener("mouseenter", function () {
    imgBox.style.background = "url('/img/wendy_about.jpg')";
    imgBox.style.backgroundSize = "cover";
});
col2.addEventListener("mouseenter", function () {
    imgBox.style.background = "url('/img/wendy_landing.png')";
    imgBox.style.backgroundSize = "cover";
});
col3.addEventListener("mouseenter", function () {
    imgBox.style.background = "url('/img/wendy_about.jpg')";
    imgBox.style.backgroundSize = "cover";
});
col4.addEventListener("mouseenter", function () {
    imgBox.style.background = "url('/img/wendy_landing.png')";
    imgBox.style.backgroundSize = "cover";
});
col5.addEventListener("mouseenter", function () {
    imgBox.style.background = "url('/img/wendy_about.jpg')";
    imgBox.style.backgroundSize = "cover";
});
