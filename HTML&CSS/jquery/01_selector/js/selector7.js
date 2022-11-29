$(document).ready(function () {
  $("#ex1 ul li:nth-of-type(2)").css("background-color", "#ff9933");

  $("#ex2 >p:nth-of-type(2)").css("background-color", "#ff9933");

  $("#ex2 p:nth-of-type(2)").css("color", "blue");

  $("#ex3 .list3 li strong:only-child").css("background-color", "#ff9933");

  $("strong:only-child").css("color", "red");

  $("#ex3 .list3 li strong:only-of-type").css("border", "1px solid green");

  $("strong:only-of-type").css("font-size", "10px");
});
