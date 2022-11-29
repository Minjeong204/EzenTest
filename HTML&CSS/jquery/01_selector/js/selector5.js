$(document).ready(function () {
  //:hidden
  //숨겨져있는 p요소를 3초동안 화면에 보이게 해라
  $("#ex1 p:hidden").show(3000);

  $("#ex1 p:visible").hide(2000);
});
//3초 후 show를 한번만 실행해라
function show() {
  $(".none_img:hidden").show(5000);

  $("#photo img:first").hide(3000);
  $("#photo img:first").show("fast");
}
setTimeout("show()", 3000);
