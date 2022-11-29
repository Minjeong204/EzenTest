$(document).ready(function () {
  //   $("#main1 p").first().css("background-color", "#cccccc");
  //   $("#main1 p:first").css("background-color", "#cccccc");
  //   $("#main1 > p").first().css("background-color", "#ffcc33");
  //   $("#main1 p").last().css("background-color", "#ffcc33");
  //   $("#main1 p").eq(2).css("background-color", "#ffcc33");
  //   $("#main1 div").filter(".middle2").text("middle2적용");
  $("#main1 div").not("#sub1").hide();
  $("#slice1 p").slice(1, 5).css("background-color", "#ff99ff");
  $("#slice1 p")
    .slice(2)
    .css({ "border-width": "4px", "border-color": "#cc0033" });
  $("#slice1 p").slice(-5).css("color", "green");
  //   $("#main2").find("p").css("background-color", "#ff99ff");
  //   $("#main2").children("p").css("background-color", "#ff9900");
  //   $("p.txt2").closest("div").css("background-color", "#ff9900");
  $("p.txt2").closest("#main2").css("background-color", "#ff9900");
  //   $("p.txt3").prev().css("background-color", "#ff9900");
  //   $("p.txt3").prevAll().css("background-color", "#ff9900");

  // $("p.part3").next().css("background-color", "#ff9900");
  //   // $("p.part3").nextAll().css("background-color", "#ff9900");
  //   $("p.part3").siblings().css("background-color", "#ff9900");
  //   $("#main4 h2")
  //     .nextUntil("#main4 h5")
  //     .css({ color: "#cc0033", border: "2px solid #cc0033" });
  $("#main4 span")
    .parent()
    .css({ color: "#cc0033", border: "2px solid #cc0033" });

  //   $("#main5 span").parent().css({ color: "green", border: "2px solid green" });
  //   $("#main5 span").parents("ul").css({ color: "green", border: "2px solid green" });
  //   $("#main5 span").parents("div").css({ color: "green", border: "2px solid green" });
  $("#main5 span")
    .parentsUntil("div")
    .css({ color: "green", border: "2px solid green" });
  $(".btn1").click(function () {
    $("#main6 div").css("background-color", "#ff9933");
  });
  $(".btn2").click(function () {
    $("#main6 div").add("#main6 span").css("background-color", "#ccffcc");
  });
  $(".btn3").click(function () {
    $("#main6 div").add("#main6 span").add("#main6 p").css("background-color", "#66ff99");
  });
});
