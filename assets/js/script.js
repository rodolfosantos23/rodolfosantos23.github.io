(function ($) {
  "use strict";

  /* ============================================================ */
  /* PRELOADER START
  /* ============================================================ */
  setTimeout(function () {
    var e = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
        navigator.userAgent
      ),
      s = document.getElementById("preloader");
    e
      ? s && s.parentNode && s.parentNode.removeChild(s)
      : (setTimeout(function () {
          s.classList.add("preloaded");
        }, 1000),
        setTimeout(function () {
          s && s.parentNode && s.parentNode.removeChild(s);
        }, 2000));
  }, 1000);
  /* Preloader End */

  /* ============================================================ */
  /* MOBILE MENU START
    /* ============================================================ */
  function mobile_menu(selector, actionSelector) {
    var mobile_menu = $(selector);
    mobile_menu.on("click", function () {
      $(selector).toggleClass("is-menu-open");
    });

    var hamburgerbtn = $(selector);
    hamburgerbtn.on("click", function () {
      $(actionSelector).toggleClass("is-menu-open");
    });

    $(document).on("click", function (e) {
      var selectorType = $(actionSelector).add(mobile_menu);
      if (
        selectorType.is(e.target) !== true &&
        selectorType.has(e.target).length === 0
      ) {
        $(actionSelector).removeClass("is-menu-open");
        $(selector).removeClass("is-menu-open");
      }
    });
    $(".mobile-menu .main-menu a, .menu-overlay").on("click", function (e) {
      $(actionSelector).removeClass("is-menu-open");
      $(selector).removeClass("is-menu-open");
    });
  }
  mobile_menu(
    ".menu_toggle, .close-menu ",
    ".mobile-menu, .minfo__app, .menu-overlay"
  );
  /* Mobile menu End */

  /* ============================================================ */
  /* Scrollit Scrollspy start
    /* ============================================================ */
  function checkSize() {
    var width = $(window).width();
    if (width < 900) {
      $.scrollIt({
        scrollTime: 150,
        topOffset: -55,
      });
    } else {
      $.scrollIt({
        scrollTime: 600,
        topOffset: 0,
      });
    }
  }
  $(document).ready(function () {
    $(window).on("resize", checkSize);
    checkSize();
  });
  /* Scrollit Scrollspy End */

  /* ============================================================ */
  /* Counterup Fun-facts start
    /* ============================================================ */
  $(".counters .number span").counterUp({
    delay: 10,
    time: 1500,
  });
  /* Counterup Fun-facts End */

  /* ============================================================ */
  /* Hero Section Logo Slider start
    /* ============================================================ */
  let logoSlider = new Swiper(".logo-slider .swiper", {
    spaceBetween: 30,
    slidesPerView: 3,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    allowTouchMove: false,
    breakpoints: {
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 5,
      },
    },
  });

  /* ============================================================ */
  /* Skills Slider start
    /* ============================================================ */
  var skillSlider = new Swiper(".skills-slider .swiper", {
    spaceBetween: 30,
    slidesPerView: 3,
    loop: !1,
    speed: 800,
    breakpoints: {
      600: {
        slidesPerView: 3,
      },
      800: {
        slidesPerView: 5,
      },
    },
    navigation: {
      nextEl: "#skill .button-next",
      prevEl: "#skill .button-prev",
    },
    on: {
      init: function () {
        $(".skills-slider-navigation .counter").html(
          '<span class="text-theme">' +
            (this.realIndex + 1) +
            "</span>" +
            "/" +
            this.slides.length
        );
      },
      slideChange: function () {
        $(".skills-slider-navigation .counter").html(
          '<span class="text-theme">' +
            (this.realIndex + 1) +
            "</span>" +
            "/" +
            this.slides.length
        );
      },
    },
  });
  // Skills Slider End

  /* ============================================================ */
  /* Testimonial Slider start
    /* ============================================================ */
  let testimonialSlider = new Swiper(".testimonial-slider .swiper", {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: false,
    speed: 800,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: ".testimonial-slider-navigation .button-next",
      prevEl: ".testimonial-slider-navigation .button-prev",
    },
    on: {
      init: function () {
        $(".testimonial-slider-navigation .counter").html(
          '<span class="text-theme">' +
            (this.realIndex + 1) +
            "</span>" +
            "/" +
            this.slides.length
        );
      },
      slideChange: function () {
        $(".testimonial-slider-navigation .counter").html(
          '<span class="text-theme">' +
            (this.realIndex + 1) +
            "</span>" +
            "/" +
            this.slides.length
        );
      },
    },
  });
  // Testimonial Slider End

  /* ============================================================ */
  /* Progressbar start
    /* ============================================================ */
  var CroWey = $(".progressbar");
  if (CroWey.length > 0) {
    CroWey.waypoint(
      function () {
        $(".bar").each(function () {
          $(this)
            .find(".progress-content")
            .animate(
              {
                width: $(this).attr("data-percentage"),
              },
              2000
            );
        });
      },
      {
        offset: "100%",
      }
    );
  }
  // Progressbar End

  /* ============================================================ */
  /* Custom Cursor start
    /* ============================================================ */
  if ($(".custom_cursor").length) {
    var cursor = document.querySelector(".custom_cursor_one");
    var cursorInner = document.querySelector(".custom_cursor_two");
    var anchors = document.querySelectorAll("a");

    document.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    });
    document.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursorInner.style.left = x + "px";
      cursorInner.style.top = y + "px";
    });
    document.addEventListener("mousedown", function () {
      cursor.classList.add("click");
      cursorInner.classList.add("custom_cursor_hover");
    });
    document.addEventListener("mouseup", function () {
      cursor.classList.remove("click");
      cursorInner.classList.remove("custom_cursor_hover");
    });
    anchors.forEach((item) => {
      item.addEventListener("mouseover", () => {
        cursor.classList.add("custom_cursor_hover");
      });
      item.addEventListener("mouseleave", () => {
        cursor.classList.remove("custom_cursor_hover");
      });
    });
  }
  // Custom Cursor End

  /* ============================================================ */
  /* Animated Circle Progress start
    /* ============================================================ */
  function animateElements() {
    $(".minfo__sidebar .progressCircle").each(function () {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var percent = $(this).find(".circle").attr("data-percent");
      var animate = $(this).data("animate");
      if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
        $(this).data("animate", true);
        $(this)
          .find(".circle")
          .circleProgress({
            startAngle: -Math.PI / 30,
            value: percent / 100,
            thickness: 2,
            lineCap: "round",
            emptyFill: "#777777",
            // fill: '#0272c6',
            fill: "#00bc91",
            size: $(".circle").width(),
          })
          .on(
            "circle-animation-progress",
            function (event, progress, stepValue) {
              $(this)
                .parent()
                .find(".label")
                .html((stepValue * 100).toFixed(0) + "%");
            }
          )
          .stop();
      }
    });
    $(".skills-slider .progressCircle").each(function () {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var percent = $(this).find(".circle").attr("data-percent");
      var animate = $(this).data("animate");
      if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
        $(this).data("animate", true);
        $(this)
          .find(".circle")
          .circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            thickness: 1.5,
            lineCap: "round",
            emptyFill: "#777777",
            // fill: '#0272c6',
            fill: "#00bc91",
            size: $(".skills-slider .circle").width(),
          })
          .on(
            "circle-animation-progress",
            function (event, progress, stepValue) {
              $(this)
                .parent()
                .find(".label")
                .html((stepValue * 100).toFixed(0) + "%");
            }
          )
          .stop();
      }
    });
  }
  setTimeout(function () {
    animateElements();
    $(window).scroll(animateElements);
  }, 2500);

  function getMediumPosts() {
    let postsCount = 0;
    $.get(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rodolfosantos23"
    ).done(function (data) {
      data.items.map((post) => {
        const formattedDate = new Date(post.pubDate);
        const options = { year: "numeric", month: "long", day: "numeric" };
        const formattedDateStr = formattedDate.toLocaleDateString(
          "pt-BR",
          options
        );

        let html = "";
        html +=
          "<div class='grid md:gap-2 grid-cols-12 overflow-hidden article group bg-metalBlack items-center rounded-2xl p-3.5'>";
        html +=
          '<div class="flex col-span-12 overflow-hidden thumbnail sm:col-span-6 md:col-span-5">';
        html += `<a href="${post.guid}" target="_blank" class="block w-full overflow-hidden rounded-xl">`;
        html += `<img src="assets/img/medium.jpg" class="object-cover object-center w-full h-full min-h-[288px] transition-all duration-300 ease-in-out max-h-60 md:min-h-60 group-hover:scale-105" alt="${post.title}" title="${post.title} - Medium">`;
        html += "</a>";
        html += "</div>";

        html +=
          '<div class="relative flex flex-col col-span-12 px-3 pt-6 pb-2 md:p-5 post-content sm:col-span-6 md:col-span-7">';
        html += '<div class="flex items-center gap-5">';
        html += '<div class="text-sm font-medium tags">';
        html += `<a href="https://rodolfosantos23.medium.com/" target='_blank' class="transition-colors hover:text-theme">${post.author}</a>, <span class="post_date">${formattedDateStr}</span>`;
        html += "</div>";
        html += "</div>";

        html += '<div class="post-title mt-3 md:mt-4.5 mb-6 md:mb-8">';
        html += `<a href="${post.guid}" target="_blank" class="text-xl font-semibold leading-normal text-white transition-colors line-clamp-2 2xl:text-2xl 2xl:leading-normal hover:text-theme">${post.title}</a>`;
        html += "</div>";

        html += '<div class="read-details">';
        html += `<a href="${post.guid}" target="_blank" class="inline-flex items-center gap-2 bg-metalBlack border border-theme text-theme text-sm py-3.5 px-6 rounded-3xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover font-medium hover:text-white">Ler Mais</a>`;
        html += "</div>";

        html += "</div>";
        html += "</div>";
        $("#posts").append(html);

        postsCount++;
        if (postsCount >= 3) {
          return false;
        }
      });
    });
  }

  function setBirthDateAndExperience() {
    const firstJobDate = new Date("2012-01-01");
    const birthDate = new Date("1987-02-23");
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const experience = today.getFullYear() - firstJobDate.getFullYear();
    $("#idade").html(age);
    $("#experience").html(experience - 1);
  }

  $(document).ready(function () {
    setBirthDateAndExperience();
    getMediumPosts();
  });
})(jQuery);
