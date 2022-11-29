$(document).ready(function () {
  var w = 320 * $("#notice li").size() + "px";
  $("#notice").css("width", w);
  //   alert(w);

  $("#notice li:last").prependTo("#notice");
  $("#notice").css("margin-left", "-240px");
  $(".photo_bg1 li:not(:first)").fadeOut();
  $(".photo_bg1 li:not(:first)").hide();
  $(".prev_btn").click(function () {
    $("#notice:not(:animated)").animate(
      { marginLeft: parseInt($("#notice").css("margin-left")) - 320 + "px" },
      "slow",
      "swing",
      function () {
        $("#notice li:first").appendTo("#notice");
        $("#notice").css("margin-left", "-320px");

        var n = $("#notice li").attr("data-n");
        n++;
        console.log(n);
        if (n == 6) {
          n = 1;
        }
        $("photo_bg1 li").fadeOut(1000);
        $("photo_bg1 .se" + n).fadeIn(1000);
        $("photo_bg2 li").fadeOut(1000);
        $("photo_bg2 .se2" + n).fadeIn(1000);
      }
    );
  });
  $(".next_btn").click(function () {
    $("#notice:not(:animated)").animate(
      { marginLeft: parseInt($("#notice").css("margin-left")) + 320 + "px" },
      "slow",
      "swing",
      function () {
        $("#notice li:last").prependTo("#notice");
        $("#notice").css("margin-left", "-320px");
        var n = $("#notice li").attr("data-n");
        n++;
        console.log(n);
        if (n == 6) {
          n = 1;
        }
        $("photo_bg1 li").fadeOut(1000);
        $("photo_bg1 .se" + n).fadeIn(1000);
        $("photo_bg2 li").fadeOut(1000);
        $("photo_bg2 .se2" + n).fadeIn(1000);
      }
    );
  });
});
