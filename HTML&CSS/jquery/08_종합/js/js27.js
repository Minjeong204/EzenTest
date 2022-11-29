$(document).ready(function () {
  //$(selector).focus() 포커스가 있을 때
  //$(selector).blur() 포커스가 없을 때

  $(".pwd1_con").hide();
  $("#pwd1")
    .focus(function () {
      $(".pwd1_con").show();
    })
    .blur(function () {
      $(".pwd1_con").hide();
    });

  //$(selector).one();  이벤트를 한번만 실행
  $("#name2")
    .val("입력하세요")
    .css("color", "#999999")
    .focus(function () {
      $(this).val("").css("color", "#9966cc");
    })
    .blur(function () {
      if ($(this).val() == "") {
        $(this)
          .val("입력하세요")
          .css("color", "#999999")
          .one("focus", function () {
            $(this).val("").css("color", "#9966cc");
          });
      }
    });
  //$(selector).change()요소의 값 변경
  $("#select3").change(function () {
    //span의 텍스트를 선택한 option의 value로 변경
    $("#txt3 span").text($(this).val());
  });
  $("#email_1").focus().css("color", "#999999");
  $("#email_list").change(function () {
    //span의 텍스트를 선택한 option의 value로 변경
    $("#email4 span input").val($(this).val()).css("color", "#999999");
    if ($(this).val() == "") {
      $("#email4 span input")
        .val("입력하세요")
        .one("focus", function () {
          $(this).val("");
        });
    }
  });

  $("select[name='list5']").change(function () {
    $("#list5_1").val($(this).val());
    if ($("select[name='list5']").val() == "illustrator") {
      $("#list5_2").val("300,000");
    } else if ($("select[name='list5']").val() == "photoshop") {
      $("#list5_2").val("250,000");
    } else if ($("select[name='list5']").val() == "flash") {
      $("#list5_2").val("200,000");
    } else if ($("select[name='list5']").val() == "dreamweaver") {
      $("#list5_2").val("150,000");
    } else {
      $("#list5_1").val("");
      alert("과목을 선택하세요");
    }
  });
  $("#select6").change(function () {
    $("#photo6").html(
      "<img src=" + $(this).val() + " width='300' height='200'>"
    );
  });
});
