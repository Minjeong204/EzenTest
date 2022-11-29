$(document).ready(function () {
  $(".show1").text(parseInt("12.78")); /* 소수점 아래 버림*/
  $(".show2").text(parseInt("12 78")); /* 공백이 있으면 앞숫자만*/
  $(".show3").text(parseInt("5 비와")); /* 숫자+문자 -> 숫자만 */
  $(".show4").text(parseInt("비가 5")); /* 문자+숫자 NaN(Not a Number)*/
  //   $(selector).resize()브라우저 창 크기가 변경 될 때 발생(Browser Event)

  $(window)
    .resize(function () {
      var w = parseInt($(this).width());
      $(".txt span").text(w);
      if (w >= 1024) {
        $(".photo img")
          .attr("src", "images/banner1.jpg")
          .css("border-color", "red");
      } else if (w >= 761 && w < 1024) {
        $(".photo img")
        .attr("src", "images/banner2.jpg")
        .css("border-color", "green");
      } else {
        $(".photo img")
        .attr("src", "images/banner3.jpg")
        .css("border-color", "pink");
      }
    })
    .resize();
});
