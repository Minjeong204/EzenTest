$(document).ready(function () {
  var li_w = $(".food li").width(); // .size selector의 개수
  var w = li_w * $(".food li").size() + "px";
  $(".food").css("width", w);
  //   console.log(w);
  $(".food li:last").prependTo(".food"); //마지막 li를 맨앞으로 이동
  $(".food").css("margin-left", -li_w + "px");

  $(".prev").click(function () {
    $(".food:not(:animated)").animate(
      { marginLeft: parseInt($(".food").css("margin-left")) - li_w + "px" },
      "slow",
      "swing",
      function () {
        $(".food li:first").appendTo("#notice");
        $(".food").css("margin-left", -li_w + "px");
      }
    );
  });
  $(".next").click(function () {
    $(".food:not(:animated)").animate(
      { marginLeft: parseInt($(".food").css("margin-left")) + li_w + "px" },
      "slow",
      "swing",
      function () {
        $(".food li:last").prependTo(".food");
        $(".food").css("margin-left", -li_w + "px");
      }
    );
  });
});
