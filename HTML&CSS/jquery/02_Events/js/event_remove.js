$(document).ready(function () {
  $(".evt1").click(function () {
    alert("evt1 이벤트");
  });

  $(".evt2").click(function () {
    alert("evt1 이벤트");
  });
  function event1() {
    alert("hello!");
  }
  $(".evt2").click(event1);
  $(".evt3").contextmenu(event1);

  $(".evt4").bind("dblclick mouseout", function () {
    $(this).text("Hi!!!!");
  });
  $(".evt5").bind("click mouseout", function () {
    alert("on테스트");
  });
  $(".evt4").unbind("dblclick");
  $(".evt5").off("click");
});
