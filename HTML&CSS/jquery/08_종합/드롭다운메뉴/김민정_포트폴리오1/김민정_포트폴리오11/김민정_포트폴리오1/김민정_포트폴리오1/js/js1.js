$(document).ready(function () {
  var n = 1;
  function slide() {
    $(".btn_wrap button").removeClass("active");
    $(".btn" + n).addClass("active");
    $(".inner-list li")
      .stop()
      .animate({ marginLeft: -510 * (n-1) }, 500, function () {
        $(".inner-list li:first").appendTo(".inner-list")
        $(".inner-list").css("margin-left", -510 + "px");
      });
  }
  $(".btn").click(function () {
    n = $(this).attr("data-n");
    slide();
  });
});
