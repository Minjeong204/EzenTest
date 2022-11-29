$(document).ready(function () {
  $("#ex1 p").click(function () {
    alert("너비" + $(this).width()); //300
    alert("높이" + $(this).height()); //200
  });
  $("#ex2 p").click(function () {
    alert("innerWidth: " + $(this).innerWidth() + "px"); //510

    alert("innerHeight: " + $(this).innerHeight() + "px"); //310
  });
  $("#ex3 p").click(function () {
    alert("outerWidth: " + $(this).outerWidth() + "px"); //116

    alert("outerWidth(true): " + $(this).outerWidth(true) + "px"); //132
  });
  $("#ex4 p").click(function () {
    alert("outerHeight: " + $(this).outerHeight() + "px"); //116

    alert("outerHeight(true): " + $(this).outerHeight(true) + "px"); //132
  });
  $("#ex5 img").click(function () {
    var pos_img = $(this).position();
    alert(
      "이미지의 position-left 위치:" +
        pos_img.left +
        "이미지의 position-top위치 :" +
        pos_img.top
    );
  });
  $("#ex6 button").click(function () {
    var offset1 = $(this).offset();
    alert("left : " + offset1.left + ", top : " + offset1.top);
  });
});
