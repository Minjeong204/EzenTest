$(document).ready(function () {
  //#notice 개수
  var w = 320 * $("#notice li").size() + "px"; // .size selector의 개수
  $("#notice").css("width", w);
  //   console.log(w);
  $("#notice li:last").prependTo("#notice"); //마지막 li를 맨앞으로 이동
  $("#notice").css("margin-left", "-320px");

  $(".prev_btn").click(function () {
    $("#notice:not(:animated)").animate(
      { marginLeft: parseInt($("#notice").css("margin-left")) - 320 + "px" },
      "slow",
      "swing",
      function () {
        $("#notice li:first").appendTo("#notice");
        $("#notice").css("margin-left", "-320px");
      }
    );
  });
  $(".next_btn").click(function () {
    $("#notice:not(:animated)").animate(
      { marginLeft: parseInt($("#notice").css("margin-left"))+ 320 + "px" },
      "slow",
      "swing",
      function () {
        $("#notice li:last").prependTo("#notice");
        $("#notice").css("margin-left", "-320px");
      }
    );
  });
});
