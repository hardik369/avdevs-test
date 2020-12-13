$(document).ready(function () {
  function isInteger(num) {
    return (num ^ 0) === num;
  }
  function myIsNaN(o) {
    return typeof o === "number" && isNaN(o);
  }
  // Fixed header
  // if ($(window).width() > 767) {
    $(window).scroll(function () {
      var sticky = $("header"),
        scroll = $(window).scrollTop();
      if (scroll >= 40) {
        sticky.addClass("fixHeader");
      } else {
        sticky.removeClass("fixHeader");
      }
    });
  // }

  // Mobile close menu
  if ($(window).width() < 768) {
    $("html").click(function (event) {
      if ($(event.target).closest(".Header--mainWrapper nav").length === 0) {
        $(".Header--mainWrapper nav, .Header--Logo").removeClass("active");
      }
    });
    $(".Mobile--menuIcon").click(function () {
      $(".Header--mainWrapper nav, .Header--Logo").addClass("active");
    });

    $(".Mobile--menuIcon").click(function (event) {
      event.stopPropagation();
    });
  }
});

/* ========
Debugger plugin, simple demo plugin to console.log some of callbacks
======== */
var myPlugin = {
  name: "debugger",
  params: {
    debugger: false,
  },
  on: {
    init: function (swiper) {
      if (!swiper.params.debugger) return;
    },
    click: function (swiper, e) {
      if (!swiper.params.debugger) return;
    },
    tap: function (swiper, e) {
      if (!swiper.params.debugger) return;
    },
    doubleTap: function (swiper, e) {
      if (!swiper.params.debugger) return;
    },
    sliderMove: function (swiper, e) {
      if (!swiper.params.debugger) return;
    },
    slideChange: function (swiper) {
      if (!swiper.params.debugger) return;
    },
    slideChangeTransitionStart: function (swiper) {
      if (!swiper.params.debugger) return;
    },
    slideChangeTransitionEnd: function (swiper) {
      if (!swiper.params.debugger) return;
    },
    transitionStart: function (swiper) {
      if (!swiper.params.debugger) return;
    },
    transitionEnd: function (swiper) {
      if (!swiper.params.debugger) return;
    },
    fromEdge: function (swiper) {
      if (!swiper.params.debugger) return;
    },
    reachBeginning: function (swiper) {
      if (!swiper.params.debugger) return;
    },
    reachEnd: function (swiper) {
      if (!swiper.params.debugger) return;
    },
  },
};

// Install Plugin To Swiper
Swiper.use(myPlugin);

// More News slider
var swiper = new Swiper(".news-swiper-container.swiper-container", {
  navigation: {
    nextEl: ".news_content--title-box .swiper-button-next",
    prevEl: ".news_content--title-box .swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
  // Enable debugger
  debugger: true,
});

// news content
var swiper = new Swiper(".news_content--swiper-container.swiper-container", {
  navigation: {
    nextEl: ".news_content--title-box .swiper-button-next",
    prevEl: ".news_content--title-box .swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
  // Enable debugger
  debugger: true,
});

// Multiple-Items Swiper
var swiper = new Swiper(".Trending--Carousel", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".trending .swiper-button-next",
    prevEl: ".trending .swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 993px
    993: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
  },
});

// news content
var swiper = new Swiper(
  ".happening-slider--swiper-container.swiper-container",
  {
    navigation: {
      nextEl: ".happening .swiper-button-next",
      prevEl: ".happening .swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
    },
    // Enable debugger
    debugger: true,
  }
);
