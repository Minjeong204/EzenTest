$(document).ready(function () {
  $(".btn1_1").click(function () {
    $(".ex1_i img")
      .css({ left: "0", top: "10px" })
      .animate({ left: 800 }, 3000);
  });
  $(".btn1_2").click(function () {
    $(".ex1_i img").stop();
  });
  $(".btn1_3").click(function () {
    $(".ex1_i img").finish();
  });
  $(".ex2_t li").hover(
    function () {
      var bg = $(this).attr("data-bg");
      $(this).stop().animate({ backgroundColor: bg }, 800);
    },
    function () {
      $(this).stop().animate({ backgroundColor: "#ccccff" }, 800);
    }
  );
  $(".btn3").click(function () {
    var easing = $(this).attr("data-easing");
    $(".ex3_1")
      .animate({ left: 800 }, 500, easing)
      .animate({ top: 100 }, 500, easing)
      .animate({ left: 0 }, 500, easing)
      .animate({ top: 0 }, 500, easing);
    $(".ex3_2:not(:animated)").slideUp(1000, easing, function () {
      $(this).slideDown(1000);
    });
  });
  $(".ex4_1 p,.ex4_2").text("");
  $(".btn4").click(function () {
    $(".ex4_1 p").animate(
      { width: 400 },
      {
        duration: 5000,
        easing: "linear",
        step: function (x) {
          $(".ex4_2").text(Math.round((x * 100) / 400) + "%");
        },
      }
    );
  });
  $(".ex5 p:nth-child(1)").text("");

  $(".ex5 p:nth-child(1)")
    .delay(1000)
    .animate(
      { width: 500 },
      {
        duration: 3000,
        easing: "linear",
        step: function (k) {
          $(".ex5 p:nth-child(2)").text(Math.round((k * 100) / 500) + "%");
        },
      }
    );
});
