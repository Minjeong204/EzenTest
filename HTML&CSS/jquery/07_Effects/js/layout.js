$(document).ready(function () {
  // ex1
  $(".btn1").click(function () {
    $(".box1").show();
  }); //show
  $(".btn2").click(function () {
    $(".box1").hide();
  }); //hide
  $(".btn3").click(function () {
    $(".box1").toggle();
  }); //toggle
  $(".btn4").click(function () {
    $(".box1").show(1000, function () {
      alert("hello!!");
    });
  }); //callback
  $(".btn5").click(function () {
    $(".box2").slideUp(1000);
  }); //slideUp
  $(".btn6").click(function () {
    $(".box2").slideDown(1000);
  }); //slideDown
  $(".btn7").click(function () {
    // $(".box2").slideToggle(1000);
    $(".box2:not(:animated)").slideToggle(1000);
  }); //SlideToggle
  $(".btn8").click(function () {
    $(".box2").slideUp(1000, function () {
      $(".box2").slideDown();
    });
  }); //callback

  //   ex3
  $(".list_li2 div").hide();
  $(".list_li2").toggle(
    function () {
      $(".list_li2 div:not(:animated)").slideDown();
      $("#list_li2a").addClass("sel");
      $(".list_li2 span").text("-");
    },
    function () {
      $(".list_li2 div:not(:animated)").slideUp();
      $("#list_li2a").removeClass("sel");
      $(".list_li2 span").text("+");
    }
  );
});
