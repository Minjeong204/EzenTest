$(document).ready(function () {
  $(".btn1").click(function () {
    $("p.result1").append("<img src='images/btn_next.jpg'>");
  }); //append
  $(".btn2").click(function () {
    $("p.result1").prepend("<img src='images/btn_next.jpg'>");
  }); //prepend
  $(".btn3").click(function () {
    $("p.result2 .photo").appendTo("p.result2");
  }); //appendTo
  $(".btn4").click(function () {
    $("p.result2 .photo").prependTo("p.result2");
  }); //prependTo
  $(".btn5").click(function () {
    $("#ex2 ol").append("<li>확인</li>");
  }); //append
  $(".btn6").click(function () {
    $("#ex2 ol").prepend("<li>확인</li>");
  }); //prepend
  $(".btn7").click(function () {
    $(".box3 img:first").clone().appendTo($(".box3"));
  }); //실행1
  $(".btn8").click(function () {
    $(".box3 img:first").clone(true).appendTo($(".box3"));
  }); //실행2
  $(".box3 img").bind("click", function () {
    alert("clone 테스트");
  }); //실행2
});
