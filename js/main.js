(function ($) {
  "use strict";

  // Initiate the wowjs
  new WOW().init();

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 24,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });
})(jQuery);

// // set focus when modal is opened
// $("#modal-content").on("shown.bs.modal", function () {
//   $("#txtname").focus();
// });

// // show the modal onload
// $("#modal-content").modal({
//   show: true,
// });

// // everytime the button is pushed, open the modal, and trigger the shown.bs.modal event
// $("#openBtn").click(function () {
//   $("#modal-content").modal({
//     show: true,
//   });
// });

// set focus when modal is opened
// document
//   .getElementById("modal-content")
//   .addEventListener("shown.bs.modal", function () {
//     document.getElementById("txtname").focus();
//   });

// // show the modal onload
// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("modal-content").classList.add("show");
// });

// // every time the button is pushed, open the modal, and trigger the shown.bs.modal event
// document.getElementById("openBtn").addEventListener("click", () => {
//   document.getElementById("modal-content").classList.add("show");
//   var event = new Event("shown.bs.modal");
//   document.getElementById("modal-content").dispatchEvent(event);
// });
