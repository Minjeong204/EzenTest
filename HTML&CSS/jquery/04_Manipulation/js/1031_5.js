function ex1() {
  $("#ex1 p").first().appendTo("#ex1");
}
setInterval("ex1()", 2000);

$(document).ready(function () {
  //ex2
  var ex2 = setInterval(function () {
    $("#ex2 p").first().appendTo("#ex2");
  }, 2000);
  // ex3
  var banner = setInterval(function () {
    $("#ex3 p").first().appendTo("#ex3");
  }, 2000);

  $("#ex3")
    .mouseover(function () {
      clearInterval(banner);
      //   $(".txt").text("멈췄나요?");
    })
    .mouseout(function () {
      $("#ex3 p").first().appendTo("#ex3");
    });
});
