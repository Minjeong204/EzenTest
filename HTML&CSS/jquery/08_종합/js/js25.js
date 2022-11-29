$(document).ready(function () {
  var page = 1;

  $(window).mousewheel(function () {
    return false;
  });
  $(".box").on("mousewheel", function (event, delta) {
    page = $(this).attr("data-n") - delta;
    var target = $(".box" + page).offset().top;
    $("body, html").stop().animate({ scrollTop: target }, 500);
    return false;
  });
  $(window).scroll(function () {
    var offset1 = $(".box1").offset().top;
    var offset2 = $(".box2").offset().top;
    var offset3 = $(".box3").offset().top;
    var offset4 = $(".box4").offset().top;
    var offset5 = $(".box5").offset().top;

    var st = $(window).scrollTop();

    $("#gnb ul li a").removeClass("sel1");
    $(".circle").removeClass("sel2");

    if (st < offset2) {
      $(".menu1").addClass("sel1");
      $(".circle1").addClass("sel2");
    } else if (st >= offset2 && st < offset3) {
      $(".menu2").addClass("sel1");
      $(".circle2").addClass("sel2");
    } else if (st >= offset3 && st < offset4) {
      $(".menu3").addClass("sel1");
      $(".circle3").addClass("sel2");
    } else if (st >= offset4 && st < offset5) {
      $(".menu4").addClass("sel1");
      $(".circle4").addClass("sel2");
    } else {
      $(".menu5").addClass("sel1");
      $(".circle5").addClass("sel2");
    }
    return false;
  });
  $("#gnb ul li a, .circle").click(function () {
    page = $(this).attr("data-n");
    var target = $(".box" + page).offset().top;
    $("body, html").stop().animate({ scrollTop: target }, 1000);
    return false;
  });
});
