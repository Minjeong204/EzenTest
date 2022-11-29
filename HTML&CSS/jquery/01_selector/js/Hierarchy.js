$(document).ready(function () {
  $("#ex1 > p")
    .css("background-image", "url('./01_selector/images/img3.gif')")
    .css("width", "120px")
    .css("height", "100px")
    .css("color", "#ff3333")
    .text("뽀로로");
  $("#ex2 p").css({
    "border-bottom": "3px double #9900cc",
    width: "120px",
    "text-align": "center",
  });
  $(".ex3_1 + li").css(
    "background-image",
    "url('./01_selector/images/img3.gif')"
  );
  $(".ex4_2 ~ li").css("background-color", "yellow");
});
