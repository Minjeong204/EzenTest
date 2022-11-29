$(document).ready(function () {
  //ex1
  //$(selector).prop() selector의 속성
  //$(selector).attr() selector의 속성
  $(".btn1_1").click(function () {
    var a = $(".ex1 a").prop("href");
    alert(a);
  }); //prop
  $(".btn1_2").click(function () {
    var b = $(".ex1 a").attr("href");
    alert(b);
  }); //attr
  $(".btn2_1").click(function () {
    var c = $(".ex2 input:nth-child(1)").prop("checked");
    alert(c);
  }); //prop
  $(".btn2_2").click(function () {
    var d = $(".ex2 input:nth-child(1)").prop("checked");
    alert(d);
  }); //attr

  $("#chk1").change(function () {
    var chk1 = $("#chk1").prop("checked");
    if (chk1 == true) {
      $("#chk2, #chk3").prop("checked", true);
      $(".type01").addClass("checked");
    } else {
      $("#chk2, #chk3").prop("checked", false);
      $(".type01").removeClass("checked");
    }
  });
  //-개인정보처리방침(선택)/개인정보 제3자제공 동의(선택)
  $("#chk2,#chk3").change(function () {
    var chk2 = $("#chk2").prop("checked");
    var chk3 = $("#chk3").prop("checked");
    if (chk2 == true) {
      $(".type03").addClass("checked");
    } else {
      $(".type03").removeClass("checked");
    }
    if (chk3 == true) {
      $(".type04").addClass("checked");
    } else {
      $(".type04").removeClass("checked");
    }
    if (chk2 == true && chk3 == true) {
      $(".type02").addClass("checked");
    } else {
      $(".type02").removeClass("checked");
    }
  });
});
