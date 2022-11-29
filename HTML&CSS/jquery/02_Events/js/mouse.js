$(document).ready(function () {
  $(".evt1").click(function () {
    $("#event").css("background-color", "#ccffff");
  });
  $(".evt2").dblclick(function () {
    $("#event").css("border-color", "#990066").text("더블클릭");
  });
  $(".evt3").mouseover(function () {
    $("#event").text("확인!!");
  });

  $(".evt3").mouseout(function () {
    $("#event").text("취소!!");
  });
  $(".evt4").mouseover(function () {
    $("#event").css("width", "150px").text("");
  });

  $(".evt4").mouseout(function () {
    $("#event").css("width", "50px");
  });

  $(".evt5").hover(
    function () {
      $("#event").css("background-image", "url('images/img2.png')");
    },
    function () {
      $("#event").css("background-image", "");
    }
  );
  $(".evt6")
    .mousedown(function () {
      $("#event")
        .css("background-image", "url('images/img4.png')")
        .css("background-repeat", "no-repeat")
        .css("background-position", "center")
        .text("");
    })
    .mouseup(function () {
      $("#event").css("background-image", "url('images/img5.png')");
    });
  $(".evt7")
    .mouseenter(function () {
      $("#event").css("background-image", "url('images/img2.png')");
    })
    .mouseleave(function () {
      $("#event").css("background-image", "url('images/img3.png')");
    });

  $(".evt8").contextmenu(function () {
    $("#event").css("background-color", "green");
  });
  $(".evt9")
    .focusin(function () {
      $("#event").css("border-width", "5px");
    })
    .focusout(function () {
      $("#event").css("border-width", "");
    });

  $(document).mousemove(function (event) {
    $(".evt10 span").text("x좌표: " + event.pageX + "Y좌표: " + event.pageY);
  });

  $(".menu li a:first").css({
    "text-decoration": "underline",
    color: "#ff0000",
  });
  $(".menu li a").click(function () {
    $(this).css({
      "text-decoration": "underline",
      color: "#ff0000",
    });
  });
});
