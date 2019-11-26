$(function () { // START DOM LOADED

// XXXXXXXXXXXXXXXXXXX   JS FOR ALL PAGES   XXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// UP BUTTON
// display up-button when user scrolls past 2000px
window.onscroll = function (ev) {
    if (window.scrollY >= 1800) {
        $(".upButton").css("display", "block");
    }
    else {
        $(".upButton").css("display", "none");
    }
    // position up-button absolute when user scrolls to bottom of page plus 155px, else fixed
    if ((window.innerHeight + window.scrollY + 155) >= document.body.offsetHeight) {
        $(".upButton").css({
            position: "absolute",
            bottom: "215px",
            left: "50%",
            marginLeft: "-20px",
        });
    }
    else {
        $(".upButton").css({
            position: "fixed",
            bottom: "20px",
            left: "auto",
        });
    }
};
// smooth scroll for up-button
$('.upButton').click(function () {
    window.scroll({ top: 0, behavior: 'smooth' });
});


// MOBILE NAV
// if user clicks document anywhere but the mobileNav and mobileNav has opacity then toggle
$(document).click(function (event) {
    if (!$(event.target).is('.mobileNav')) {
        if ($('.mobileNav').css('opacity') == .95) {
            $(".navBurger").toggleClass("is-active");
            $(".mobileNav").toggleClass("is-active");
            $(".mobileBlackBoxBg").toggleClass("is-active");
        }
    }
});
// burger-nav click-animation for mobile 
$(".navBurger").click(function (event) {
    $(this).toggleClass("is-active");
    $(".mobileNav").toggleClass("is-active");
    $(".mobileBlackBoxBg").toggleClass("is-active");
});


// DYNAMIC DATE
// create instance of date-object
var today = new Date();
// convert today into current year
var year = today.getFullYear();

// get span with year-id
var currentYear = document.getElementById('year');
// set inner-html of currentYear to year
currentYear.innerHTML = year;


// SPECIAL FIX
// media-query from index-page has burger-nav show at page-height < 600px 
// following code prevents this behaviour on all pages except index.html
if (!(window.location.href.includes("index"))) {
    if (window.innerWidth > 570) {
        $(".navBurger").css("display", "none");
        $(".mobileNav").css("display", "none");
    }
    else {
        $(".navBurger").css("display", "block");
        $(".mobileNav").css("display", "block");
    }
    // eventListener for when user resizes window
    window.addEventListener('resize', function (event) {
        if (window.innerWidth > 570) {
            $(".navBurger").css("display", "none");
            $(".mobileNav").css("display", "none");
        }
        else {
            $(".navBurger").css("display", "block");
            $(".mobileNav").css("display", "block");
        }
    });
}


// XXXXXXXXXXXXXXXXXXX   PAGE SPECIFIC JS   XXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

if ($('body').is('.indexBody')) {   // START INDEX-PAGE SPECIFIC 

    //nav marker show/hide-toggle
    var navLanding__markerLanding = $('.navLanding__markerLanding');
    $('.navLanding__a').hover(function () {
        $(navLanding__markerLanding).css('display', 'none');
    });
    $('.navLanding__ul').mouseleave(function () {
        $(navLanding__markerLanding).show();
    });

    //animate intro line and black-box-bg in mobile view
    if ($(window).width() < 570 || $(window).height() < 600) {
        $('.mobileBlackBoxBg').hide().fadeIn(2000);
    }

    //animate name
    $('.fNameLanding').hide().fadeIn(2000);
    if ($(window).width() > 904) {
        $('.nameLanding--hide').hide().fadeIn(2000);
    }
    else {
        $('.lNameLanding').hide().fadeIn(2000);
    }

}  // END INDEX-PAGE SPECIFIC

if ($('body').is('.aboutBody')) {   // START ABOUT-PAGE SPECIFIC

    // if on about-page, and window width < 800px then make aboutBox-div same height as imgAbout-image
    if ($(window).width() < 900) {
        $(".aboutBox").height($(".imgAbout").height());
    }
    else {
        $(".aboutBox").height("24.35em");
    }
    window.addEventListener('resize', function (event) {
        if ($(window).width() < 900) {
            $(".aboutBox").height($(".imgAbout").height());
        }
        else {
            $(".aboutBox").height("24.35em");
        }
    });

    // DOM manipulation on about page. It makes the img-div the first child of it's parent, instead of the txt-div.
    // need for breakpoint < 720px, so img appears before txt.
    var aboutBoxWrapper = document.getElementsByClassName('aboutBoxWrapper')[0];
    var aboutImgWrapper = document.getElementsByClassName('aboutImgWrapper')[0];
    aboutBoxWrapper.prepend(aboutImgWrapper);

    // if on about-page, and window width < 704px then apply auto-height to aboutBox-div
    if ($(window).width() < 704) {
        $(".aboutBox").height("auto");
    }
    window.addEventListener('resize', function (event) {
        if ($(window).width() < 704) {
            $(".aboutBox").height("auto");
        }
    });

} // END ABOUT-PAGE SPECIFIC

if ($('body').is('.galleryBody')) {   // START GALLERY-PAGE SPECIFIC



    // Start Image pre-loading.

    // array that holds img-urls 
    var urlArr = [
    'img/gangster_thumb.jpg',
    'img/business_thumb.jpg',
    'img/retro_thumb.jpg',
    'img/hijab_thumb.jpg',
    'img/theat_thumb.jpg',
    'img/1com_thumb.jpg',
    'img/2com_thumb.jpg',
    'img/3com_thumb.jpg',
    'img/4com_thumb.jpg',
    'img/4com_thumb.jpg',
    'img/kettle_thumb.jpg',
    'img/glove_prep_thumb.jpg',
    'img/jump_rope_thumb.jpg',
    'img/boxing_bag_thumb.jpg',
    'img/sparring_thumb.jpg'
    ];

    var preloadImage = function (url) {
      var img = new Image();
      img.src = url;
    };

    // Loop over array with image urls.
    for (let i = 0; i < urlArr.length; i++) {
      // Call preloadImage-function for every image url.
      preloadImage(urlArr[i]);
    } // End Image pre-loading.


    // array that holds images 
    var boxImages = [
    "url('img/gangster_thumb.jpg')",
    "url('img/business_thumb.jpg')",
    "url('img/retro_thumb.jpg')",
    "url('img/hijab_thumb.jpg')",
    "url('img/theat_thumb.jpg')",
    "url('img/1com_thumb.jpg')",
    "url('img/2com_thumb.jpg')",
    "url('img/3com_thumb.jpg')",
    "url('img/4com_thumb.jpg')",
    "url('img/4com_thumb.jpg')",
    "url('img/kettle_thumb.jpg')",
    "url('img/glove_prep_thumb.jpg')",
    "url('img/jump_rope_thumb.jpg')",
    "url('img/boxing_bag_thumb.jpg')",
    "url('img/sparring_thumb.jpg')"
    ];

    // function that makes use of the event-object, so we can delegate from containing element to element where event occurred 
    function changeBgImg(e) {
        // assign event-target
        var target = e.target;
        // loop through number of columns
        for (var i = 0; i < document.getElementsByClassName('col').length; i++) {
            // if the current target is a column
            if (target == document.getElementsByClassName('col')[i]) {
                // change the columns parent (one of the three imgBox) background to the matching img from the boxImages-array
                target.parentElement.style.background = boxImages[i];
                target.parentElement.style.backgroundSize = "cover";
            }
        }
        // event shouldn't bubble up to containing elements
        e.stopPropagation();
    }
    // get containing element
    var imgBoxWrapper = document.getElementsByClassName('imgBoxWrapper')[0];

    // attach event-listener to containing element that triggers function on mouse-over
    imgBoxWrapper.addEventListener('mouseover', changeBgImg, false);



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
        document.getElementById('project-load').innerHTML = '<object id="object1" type="text/html" data="gallery1.html"></object>';
    }
    function gallery2() {
        document.getElementById('project-load').innerHTML = '<object id="object2" type="text/html" data="gallery2.html"></object>';
    }
    function gallery3() {
        document.getElementById('project-load').innerHTML = '<object id="object3" type="text/html" data="gallery3.html"></object>';
    }
    // get elements
    var imgBox = document.getElementsByClassName('imgBox');
    // gallery-functions are called by onclick-eventHandler which is attached to imgBox-element
    imgBox[0].onclick = gallery1;
    imgBox[1].onclick = gallery2;
    imgBox[2].onclick = gallery3;

} // END GALLERY-PAGE SPECIFIC

if ($('body').is('.resumeBody')) {   // START RESUME-PAGE SPECIFIC

    window.onscroll = function (ev) {
        if (window.scrollY >= 1800) {
            $(".upButton").css("display", "block");
        }
        else {
            $(".upButton").css("display", "none");
        }
        // position up-button absolute when user scrolls to bottom of page plus 155px, else fixed
        if ((window.innerHeight + window.scrollY + 55) >= document.body.offsetHeight) {
            $(".upButton").css({
                position: "absolute",
                bottom: "100px",
                left: "50%",
                marginLeft: "-20px",
            });
        }
        else {
            $(".upButton").css({
                position: "fixed",
                bottom: "20px",
                left: "auto",
            });
        }
    };
}  // END RESUME-PAGE SPECIFIC

if ($('body').is('.contactBody')) {   // START CONTACT-PAGE SPECIFIC

    // placeholder txt on contact-page
    var placeholderMessages = [
        'Enter Your Name',
        'Enter Your Email',
        'Enter Subject',
        'Enter Message'
    ]
    function placeholderMessage(e) {
        var target = e.target;
        console.log(target);
        // loop through placeholder fields
        for (var i = 0; i < document.getElementsByClassName('placeholderBlur').length; i++) {
            // if the current target is a placeholder field
            if (target == document.getElementsByClassName('placeholderBlur')[i]) {
                // assign it placeholder message
                target.placeholder = placeholderMessages[i];
            }
        }
    }
    // get containing element
    var formWrapper = document.getElementsByClassName('contactFormWrapper')[0];
    // attach event-listener to containing element that triggers function on blur. 
    // note that we have to use 'true' here for event-capturing.
    formWrapper.addEventListener('blur', placeholderMessage, true);

}  // END CONTACT-PAGE SPECIFIC


});  // END DOM LOADED
