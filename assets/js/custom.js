/* Vinay Gola UI Developer 16-02-2025  */
$(window).on("load", function () {

})

$(document).ready(function () {
  
  // $('.navbar-toggler').click(function () {
  //   $('.navigation').css('right', '0');
  //   $('body').css('overflow', 'hidden');
  //   $('.backdrop').css('position', 'fixed');
  // })
  // $('.closeBox i,.backdrop').click(function () {
  //   $('.navigation').css('right', '-100%');
  //   $('body').css('overflow', 'initial');
  //   $('.backdrop').css('position', 'initial');
  // })
  // $('a[href="#"]').click(function (e) {
  //   e.preventDefault();
  // });
  // $("section , footer").click(function () {
  //   $(".navigation").css("right", "-100%");
  // });
  if ($(window).width() < 1000) {
    // $(".mid-nav nav .navigation>ul>li.menu-item-has-children").click(function (e) {
    //   if (e.target == this) {
    //     $(this).children(".sub-menu").slideToggle();
    //     $(this).toggleClass("after-icon");
    //     $(this).siblings().children(".sub-menu").slideUp();
    //   }
    // });
    // $(".mid-nav nav .navigation ul li>ul.sub-menu>li").click(function (e) {
    //   $(this).children("ul").slideToggle();
    // });
  }
  // AOS.init({ easing: "ease-in-out-sine", once: true });
});



// $(window).scroll(function () {
//   if ($(window).scrollTop() >= 200) {
//     // $('header').addClass('sticky')
//     $(".top i").addClass("sticky-to");
//   } else {
//     // $('header').removeClass('sticky')
//     $(".top i").removeClass("sticky-to");
//   }
// });
function inviewExample() {
  // var $example = $('.counter');

  var inview;

  inview = new Waypoint.Inview({
    element: $(".counter")[0],

    entered: function (direction) {
      $("span").each(function () {
        var $this = $(this);

        var val = $(this).attr("vit-value");

        jQuery({ Counter: 0 }).animate(
          { Counter: val },
          {
            duration: 2000,

            easing: "swing",

            step: function () {
              $this.text(Math.ceil(this.Counter));
            },
          }
        );
      });
    },
  });
}
$(window).on("load", function () {
  inviewExample();
});
