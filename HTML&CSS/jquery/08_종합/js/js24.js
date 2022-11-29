$(document).ready(function () {
  $("#wrap").on("mousewheel", function (event, delta) {
    // console.log(delta); 1: 위, -1: 아래

    if (delta > 0) {
      //휠 위로
      $("#wrap p img").attr("src", "images/img12_l.jpg");
    } else {
      $("#wrap p img").attr("src", "images/img10_l.jpg");
    }
    return false;
  });
  $("#wrap2").on("mousewheel", function (event, delta) {
    // console.log(delta); 1: 위, -1: 아래

    if (delta > 0) {
      //휠 위로
      $("#wrap2").scrollTop($("#wrap2").scrollTop() + 280);
    } else {
      $("#wrap2").scrollTop($("#wrap2").scrollTop() + -280);
    }
    return false;
  });
  $("#wrap3").on("mousewheel", function (event, delta) {
    // console.log(delta); 1: 위, -1: 아래

    if (delta > 0) {
      //휠 위로
      $("#wrap3").scrollLeft($("#wrap3").scrollLeft() + 300);
    } else {
      $("#wrap3").scrollLeft($("#wrap3").scrollLeft() + -300);
    }
    return false;
  });

  $("#wrap4").on("mousewheel", function (event, delta) {
    // console.log(delta); 1: 위, -1: 아래

    if (delta > 0) {
      //휠 위로
      $("#wrap4")
        .stop()
        .animate({ scrollLeft: $("#wrap4").scrollLeft() + 600 }, 500);
    } else {
      $("#wrap4")
        .stop()
        .animate({ scrollLeft: $("#wrap4").scrollLeft() + -600 }, 500);
    }
    return false;
  });
  $(".wrap5_2").on("mousewheel", function (event, delta) {
    // console.log(delta); 1: 위, -1: 아래

    if (delta > 0) {
      //휠 위로
      $(".wrap5_2").scrollTop($(".wrap5_2").scrollTop() +- 50);
    } else {
      $(".wrap5_2").scrollTop($(".wrap5_2").scrollTop() + 50);
    }
    return false;
  });
});
