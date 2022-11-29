$(document).ready(function () {
  $(".all_menu img").click(function () {
    $(".menu_wrap").animate({ left: 0 }, "fast");
  });
  $(".close_btn").click(function () {
    $(".menu_wrap").animate({ left: "-50%" }, "fast");
  });
});
