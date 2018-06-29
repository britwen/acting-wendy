document.addEventListener("DOMContentLoaded", function () {  // START FIRST DOM-LOADER

//nav marker show/hide-toggle
var navLanding__markerLanding = $('.navLanding__markerLanding');

$('.navLanding__a').hover(function () {
    $(navLanding__markerLanding).css('display', 'none');
});

$('.navLanding__ul').mouseleave(function () {
    $(navLanding__markerLanding).show();
})

// FOLLOWING SECTION: IMG ANIMATION ON GALLERY PAGE

// creates an array with the three image boxes 
var imgBox = document.getElementsByClassName("imgBox");
// creates five arrays with each three columns
var col1 = document.getElementsByClassName("col1");
var col2 = document.getElementsByClassName("col2");
var col3 = document.getElementsByClassName("col3");
var col4 = document.getElementsByClassName("col4");
var col5 = document.getElementsByClassName("col5");

// START 1ST IMG-BOX

// assigns the first image box to its var
var imgBox1 = imgBox[0];
// assigns the columns of the first image-box to its vars
var imgBox1__col1 = col1[0];
var imgBox1__col2 = col2[0];
var imgBox1__col3 = col3[0];
var imgBox1__col4 = col4[0];
var imgBox1__col5 = col5[0];

// if user hovers over first column of the first image box display img
imgBox1__col1.addEventListener("mouseenter", function () {
    imgBox1.style.background = "url('/img/wendy_about.jpg')";
    imgBox1.style.backgroundSize = "cover";
});
// if user hovers over second column of the first image box display img
imgBox1__col2.addEventListener("mouseenter", function () {
    imgBox1.style.background = "url('/img/wendy_landing.png')";
    imgBox1.style.backgroundSize = "cover";
});
// if user hovers over 3rd column of the first image box display im
imgBox1__col3.addEventListener("mouseenter", function () {
    imgBox1.style.background = "url('/img/wendy_about.jpg')";
    imgBox1.style.backgroundSize = "cover";
});
// if user hovers over 4th column of the first image box display im
imgBox1__col4.addEventListener("mouseenter", function () {
    imgBox1.style.background = "url('/img/wendy_landing.png')";
    imgBox1.style.backgroundSize = "cover";
});
// if user hovers over 5th column of the first image box display im
imgBox1__col5.addEventListener("mouseenter", function () {
    imgBox1.style.background = "url('/img/wendy_about.jpg')";
    imgBox1.style.backgroundSize = "cover";
});

// START 2ND IMG-BOX

// assigns the 2nd image box to its var
var imgBox2 = imgBox[1];
// assigns the columns of the 2nd image-box to its vars
var imgBox2__col1 = col1[1];
var imgBox2__col2 = col2[1];
var imgBox2__col3 = col3[1];
var imgBox2__col4 = col4[1];
var imgBox2__col5 = col5[1];

// if user hovers over first column of the 2nd image box display img
imgBox2__col1.addEventListener("mouseenter", function () {
    imgBox2.style.background = "url('/img/wendy_about.jpg')";
    imgBox2.style.backgroundSize = "cover";
});
// if user hovers over second column of the 2nd image box display img
imgBox2__col2.addEventListener("mouseenter", function () {
    imgBox2.style.background = "url('/img/wendy_landing.png')";
    imgBox2.style.backgroundSize = "cover";
});
// if user hovers over 3rd column of the 2nd image box display im
imgBox2__col3.addEventListener("mouseenter", function () {
    imgBox2.style.background = "url('/img/wendy_about.jpg')";
    imgBox2.style.backgroundSize = "cover";
});
// if user hovers over 4th column of the 2nd image box display im
imgBox2__col4.addEventListener("mouseenter", function () {
    imgBox2.style.background = "url('/img/wendy_landing.png')";
    imgBox2.style.backgroundSize = "cover";
});
// if user hovers over 5th column of the 2nd image box display im
imgBox2__col5.addEventListener("mouseenter", function () {
    imgBox2.style.background = "url('/img/wendy_about.jpg')";
    imgBox2.style.backgroundSize = "cover";
});

// START 3RD IMG-BOX

// assigns the 3rd image box to its var
var imgBox3 = imgBox[2];
// assigns the columns of the 3rd image-box to its vars
var imgBox3__col1 = col1[2];
var imgBox3__col2 = col2[2];
var imgBox3__col3 = col3[2];
var imgBox3__col4 = col4[2];
var imgBox3__col5 = col5[2];

// if user hovers over first column of the first image box display img
imgBox3__col1.addEventListener("mouseenter", function () {
    imgBox3.style.background = "url('/img/wendy_about.jpg')";
    imgBox3.style.backgroundSize = "cover";
});
// if user hovers over second column of the first image box display img
imgBox3__col2.addEventListener("mouseenter", function () {
    imgBox3.style.background = "url('/img/wendy_landing.png')";
    imgBox3.style.backgroundSize = "cover";
});
// if user hovers over 3rd column of the first image box display im
imgBox3__col3.addEventListener("mouseenter", function () {
    imgBox3.style.background = "url('/img/wendy_about.jpg')";
    imgBox3.style.backgroundSize = "cover";
});
// if user hovers over 4th column of the first image box display im
imgBox3__col4.addEventListener("mouseenter", function () {
    imgBox3.style.background = "url('/img/wendy_landing.png')";
    imgBox3.style.backgroundSize = "cover";
});
// if user hovers over 5th column of the first image box display im
imgBox3__col5.addEventListener("mouseenter", function () {
    imgBox3.style.background = "url('/img/wendy_about.jpg')";
    imgBox3.style.backgroundSize = "cover";
});



//when user clicks on one of three imgBoxes on gallery page, the page transitions left to reveal larger image section
$('.imgBox').click(function () {
    $('.imgBelt').css('left', '-100%');
    $('.largeImg-container').show(); /* this shows the largeImg-container ..which is longer than the imgBox container */
});

$('.largeImg-return').click(function () {
    $('.imgBelt').css('left', '0%');
    $('.largeImg-container').hide(800);
});
// three functions that switch out content for large gallery container
function gallery1() {
    document.getElementById('testi').innerHTML = '<object type="text/html" data="index.html" width="100%" height="900px"></object>';
}
function gallery2() {
    document.getElementById('testi').innerHTML = '<object type="text/html" data="about.html" width="100%"></object>';
}
function gallery3() {
    document.getElementById('testi').innerHTML = '<object type="text/html" data="contact.html" width="100%"></object>';
}
// gallery-functions are called by onclick-eventHandler which is attached to imgBox-element
imgBox[0].onclick = gallery1;
imgBox[1].onclick = gallery2;
imgBox[2].onclick = gallery3;

});  //END FIRST DOM-LOADER


document.addEventListener("DOMContentLoaded", function() {   // START SECOND DOM-LOADER

// START PLACEHOLDER TXT ON CONTACT-PAGE

// functions to set input text for placeholder property
function namePlaceholderTxt(e) {
    placeholderBlur[0].placeholder = "Enter Your Name";
    e.preventDefault();
}
function emailPlaceholderTxt(e) {
    placeholderBlur[1].placeholder = "Enter Your Email";
    e.preventDefault();
}
function subjectPlaceholderTxt(e) {
    placeholderBlur[2].placeholder = "Enter Subject";
    e.preventDefault();
}
function textareaPlaceholderTxt(e) {
    placeholderBlur[3].placeholder = "Enter Message";
    e.preventDefault();
}
var placeholderBlur = document.getElementsByClassName('placeholderBlur');
// placeholderTxt-function is called by onblur-eventHandler which is attached to placeholderBlur-element
placeholderBlur[0].onblur = namePlaceholderTxt;
placeholderBlur[1].onblur = emailPlaceholderTxt;
placeholderBlur[2].onblur = subjectPlaceholderTxt;
placeholderBlur[3].onblur = textareaPlaceholderTxt;
// END PLACEHOLDER TXT ON CONTACT-PAGE


});  //END SECOND DOM-LOADER