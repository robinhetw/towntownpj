/*幻燈片*/
$("#example, .main").vegas({
  timer: false,
  slides: [{ src: "css/img/1600_930_slider1.jpg" },{ src: "css/img/1600_930_slider2.jpg" },
  { src: "css/img/1600_930_slider3.jpg" }],
 
  animation: "random",
  overlay: "JS/vegas/overlays/06.png"
});

/*視差捲動*/

//var scene = document.getElementById('scene');
//var parallaxInstance = new Parallax(scene);

/*light box*/
$(document).ready(function() {
  $("#lightSlider").lightSlider({
    auto: true,
    loop: true,
    pauseOnHover: true
  });
});

$("#imageGallery").lightSlider({
  gallery: true,
  item: 1,
  loop: true,
  thumbItem: 9,
  slideMargin: 0,
  enableDrag: false,
  currentPagerPosition: "left",
  onSliderLoad: function(el) {
    el.lightGallery({
      selector: "#imageGallery .lslide"
    });
  }
});

/*index light box*/
$("#aniimated-thumbnials").lightGallery({
  thumbnail: true
});

/*scrolling*/

$(function() {
  $("html").smoothScroll(500);
});

/* 變換 logo size */

$(window).scroll(function() {
  if ($(document).scrollTop()> 20) {
    $('#logo').addClass('logoChangeImg');
    $('#logo').removeClass('logoTopImg ');
  } else {
    $('#logo').removeClass('logoChangeImg');
    $('#logo').addClass('logoTopImg');
  }
});
