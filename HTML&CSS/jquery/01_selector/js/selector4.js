$(document).ready(function () {
  $("#ex1 ul li:contains('웹')").css("color", "red");

  //:empty
  $("#ex2 ul li:empty")
    .css("background-color", "#ff66cc")
    .text("jQuery")
    .css("color", "#ffffff");

  //parent
  $("#ex3 ul li:parent").text("parent");

  $("#ex4 div:has(h3)").css("border", "1px solid red");

//   $("#ex4 div:has(h2)").css("background-color", "orange");
  
  $("#ex4 div:not(:has(h2))").css("background-color", "yellow");
    
});
