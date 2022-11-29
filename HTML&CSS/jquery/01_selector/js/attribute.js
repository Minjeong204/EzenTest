$(document).ready(function () {
  //[name]
  //   $("#txt p[class]").css("border", "2px dotted #cc0033");
  //   $("#link1 a[id][title]").css("border", "2px dotted #cc0033");
  //   $("#link1 a[target='_blank']").css("border", "2px dotted #cc0033");
  //   $("#link1 a[href^='http']").css("border", "2px dotted #cc0033");

  //   $("#txt p[class$='css1']").css("border", "2px dotted #cc0033");
  //   $("#txt p[class*='css1']").css("border", "2px dotted #cc0033");

  //   $("#link1 a[target*='n']").css("border", "2px dotted #cc0033");

  //   $("#gallery img[src!='./01_selector/images/img3.gif']").css(
  //     "border",
  //     "2px dotted #cc0033"
  //   );
  //   $("#txt p[id|='html1']").css("border", "2px dotted #cc0033");
  $("#txt p[class~='css1']").css("border", "2px dotted #cc0033");

  $("#txt p[class~='css1']").css("border", "2px dotted #cc0033");


});
