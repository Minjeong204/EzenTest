$(document).ready(function () {
  //   $("*").css("border", "1px dotted #ff3366");
  $("li *").css({ "font-size": "30px", border: "2px solid #cc0000" });
  $(".img1").css("border", "3px solid #cc0066");
  $(".photo1").css("border-color", "#66ccc");
  $(".photo2").css("padding", "10px");
  $("h1")
    .css("color", "#cc33cc")
    .css("font-size", "30px")
    .css("background-color", "#ffcc66")
    .css("font-weight", "normal");
  $("h2").css({
    color: "#cc33cc",
    "font-size": "30px",
    "background-color": "#ffcc66",
    "font-weight": "normal",
  });
  $("h3").css({
    color: "#cc33cc",
    fontSize: "30px",
    backgroundColor: "#ffcc66",
    fontWeight: "normal",
  });
  $("#ex2_2").css({ backgroundColor: "#eac1ea" });
  $(".box1,.box2,#box3").css({
    border: "1px solid #666666",
    width: "120px",
    height: "100px",
    float: "left",
    margin: "10px",
    textAlign: "center",
    lineHeight: "100px",
    backgroundImage: "url(./01_selector/images/img4.gif)"
  });
});
