$(document).ready(function () {
  //회원로그인, 비회원(주문조회) 제목/내용 변겅
  $(
    ".login_box:not(" + $("#login_list li a.selected1").attr("href") + ")"
  ).hide();

  $("#login_list li a").click(function () {
    $("#login_list li a").removeClass("selected1");
    $(this).addClass("selected1");
    $(".login_box").hide();
    $($(this).attr("href")).show();
    return false;
  });
  //회원로그인 로그인 버튼
  $("#btn_wrap1")
    .mouseover(function () {
      $("#s_btn1").stop().animate({ top: -60 }, "fast");
    })
    .mouseout(function () {
      $("#s_btn1").stop().animate({ top: 0 }, "fast");
    });
  $("#btn_wrap2")
    .mouseover(function () {
      $("#s_btn3").stop().animate({ opacity: "0" }, "fast");
    })
    .mouseout(function () {
      $("#s_btn3").stop().animate({ opacity: "1" }, "fast");
    });
  //아이디 저장, 로그인 상태 유지
  $("#chk1, #chk2").change(function () {
    var chk1 = $("#chk1").prop("checked");
    var chk2 = $("#chk2").prop("checked");
    if (chk1 == true) {
      $(".type02").addClass("checked");
    } else {
      $(".type02").removeClass("checked");
    }
    if (chk2 == true) {
      $(".type03").addClass("checked");
    } else {
      $(".type03").removeClass("checked");
    }
  });
  //   주문자 휴대전화 번호\
  $("#tel2").keyup(function () {
    if ($("#tel2").val().length > 3) {
      $("#tel3").focus();
    }
  });
});
