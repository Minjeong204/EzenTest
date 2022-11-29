$(document).ready(function () {
  $(".btn1").click(function () {
    $(".box1").html("<p>변경</p>");
    $(".box1").css("border", "1px solid blue");
    $(".box1 p").css("border", "1px solid red");
  });
  $(".btn2").click(function () {
    $(".box1").html($(".box2").html());
  });
  $(".btn3").click(function () {
    var k = $(".box2").html();
    $(".box1").html(k);
  });
  $(".btn4").click(function () {
    $(".text_wrap").remove();
  });
  $(".btn5").click(function () {
    $(".text_wrap").detach();
  });
  $(".btn6").click(function () {
    $(".text_wrap").empty();
  });
  $(".ex3_t").mouseover(function(){
    // $(this).text("그런가요??");
    $(this).html("그런가<br>요??");
  })
});
