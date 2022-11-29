$(document).ready(function () {
  $("body").append("<div id='layer'></div>");

  $("#login, #layer").hide();

  $("#quick li:nth-child(2) a").click(function () {
    // $("#login, #layer").show();
    $("#login, #layer").fadeIn();
  });
  $(".close_login").click(function () {
    $("#login, #layer").fadeOut();
  });
  $("#quick li:nth-child(1) a").addClass("sel");
  $("#quick li a").click(function () {
    $("#quick li a").removeClass("sel");
    $(this).addClass("sel");
  });
  $("#q1_menu").hide();
  $("#quick li:nth-child(1) a").click(function () {
    $("#q1_menu").fadeIn();
  });
  $(".close_btn a").click(function () {
    $("#q1_menu").fadeOut();
  });
});
