/* ---------------------------------------
-----------------MOBILE VIEW--------------
--------------------------------------  */
hamburger = document.querySelector('.hamburger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
});

/* ---------------------------------------
---------------LIFE IN ZIPPY--------------
--------------------------------------  */
var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch

images[0] = "./images/life1.JPG";
images[1] = "./images/life2.JPG";
images[2] = "./images/life3.JPG";
images[3] = "./images/life4.JPG";
images[4] = "./images/life5.JPG";
images[5] = "./images/life6.JPG";

function changeImg() {
    document.slide.src = images[i];

    // Check If Index Is Under Max
    if (i < images.length - 1) {
        // Add 1 to Index
        i++;
    } else {
        // Reset Back To O
        i = 0;
    }

    setTimeout("changeImg()", time);
}
window.onload = changeImg;
/* ---------------------------------------
---------------Window Scroll Smooth-------
--------------------------------------  */
window.scroll({
    top: 2500,
    left: 0,
    behavior: 'smooth'
});
window.scrollBy({
    top: 100, // could be negative value
    left: 0,
    behavior: 'smooth'
});



