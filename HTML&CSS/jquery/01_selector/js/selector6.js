$(document).ready(function () {
  //   $("#ex1 ul li:first-child").css("background-color", "#cccc66");
  //   $("#ex1 .list1 li:first-child").css("background-color", "#cccc66");
  //   $("#ex1 .list1 li:first").css("background-color", "#cccc66");
  //   $("#ex1 ul li:last-child").css("background-color", "#cccc66");
  //   $("#ex1 ul li:nth-child(4)").css("background-color", "#cccc66");

  //   $("#ex1 ul li:nth-child(odd)").css("background-color", "#cccc66");
  //   $("#ex1 ul li:nth-child(2n)").css("background-color", "#cccc66");
  //ex2
  //1> 번호, 담당자, 비고 (글자색 #cc66ff)
  //2 > 과목, 전화번호 (글자색 #66cc66)
  //3 > 1,3,5,7,9번행 전체(배경색 #ff9999 글자색 #ff0066)
  $("#ex2 th:nth-child(odd)").css("color", "#cc66ff");

  $("#ex2 th:nth-child(even)").css("color", "#66cc66");

  $("#ex2 th:nth-child(odd), #ex2 td:nth-child(odd)")
    .css("background-color", "#ff9999")
    .css("color", "#ff0066");

  //ex3
  //1> 첫번째 p텍스트 변경 -> 1번 이미지
  //2> 짝수 이미지만 border 적용 (점선 2px 붉은색 계열)
  //3> 4,8 텍스트 변경
  //4> 마지막 이미지의 크기를 3배로 커지게 변경
  //5> 6번에서 이미지만 숨기기
  $("#ex3 p:first").text("1번 이미지");

  $("#ex3 p:nth-child(even) img").css("border", "2px dotted red");
  $("#ex3 p:nth-child(4), #ex3 p:nth-child(8)").css("color", "blue");
  $("#ex3 p:last img").css("transform", "scale(3)");

  $("#ex3 p:nth-child(6) img").css("display", "none");
});
