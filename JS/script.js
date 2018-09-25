/*幻燈片*/
$("#example, .main").vegas({
  timer: false,
  slides: [
    { src: "css/img/1600_930_slider1.jpg" },
    { src: "css/img/1600_930_slider2.jpg" },
    { src: "css/img/1600_930_slider3.jpg" }
  ],

  animation: "random",
  overlay: "JS/vegas/overlays/06.png"
});

/*視差捲動*/

//var scene = document.getElementById('scene');
//var parallaxInstance = new Parallax(scene);

/*light box*/
$(document).ready(function() {
  $("#lightSlider").lightSlider({
    autoWidth: true,
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
  if ($(document).scrollTop() > 20) {
    $("#logo").addClass("logoChangeImg");
    $("#logo").removeClass("logoTopImg ");
  } else {
    $("#logo").removeClass("logoChangeImg");
    $("#logo").addClass("logoTopImg");
  }
});

/* read more*/
$("#readMoreButton").click(function() {
  /*$('#readMoreBlock').removeClass('readClose');
  $('#readMoreBlock').addClass('readOpen');*/
  $("#readMoreBlock").show(300);
  $("#readMoreButton").remove();
});
/* menu*/

(function() {
  $(".menu-wrapper").on("click", function() {
    $(".hamburger-menu").toggleClass("animate");
    $("#js-open").toggleClass("active");
  
  });
})();
$('.navUl li').click(function(){
  $("#js-open").removeClass("active");
  $(".hamburger-menu").removeClass("animate");
});

/*animated move */

$(document).ready(function() {
  $(".js--wp--1").waypoint(function() {
      $(".js--wp--1").addClass("animated fadeInUp");
    },
    {
      offset: "60%"
    }
  );

  $(".js--wp--2").waypoint(function() {
    $(".js--wp--2").addClass("animated fadeInUp");
  },
  {
    offset: "60%"
  }
);

$(".js--wp--3").waypoint(function() {
  $(".js--wp--3").addClass("animated fadeInUp");
},
{
  offset: "60%"
}
);
$(".js--wp--4").waypoint(function() {
  $(".js--wp--4").addClass("animated fadeInUp");
},
{
  offset: "60%"
}
);

$(".js--wp--5").waypoint(function() {
  $(".js--wp--5").addClass("animated fadeInLeft");
},
{
  offset: "60%"
}
);

$(".js--wp--6").waypoint(function() {
  $(".js--wp--6").addClass("animated fadeInRight");
},
{
  offset: "60%"
}
);


});
