$(document).ready(() => {
    var headerText = $("h1").text();
    $(window).resize(() => {
      var windowWidth = $(window).width();
      var newHeader = headerText + " " + windowWidth + "px";
      $("h1").text(newHeader);
      $(".size").text($(".box").css("width"));
      if ($(".box").width() < 600) {
        $(".box").css("background-color", "#9CCC65");
      } else {
        $(".box").css("background-color", "#FF80AB");
      }
    });
  });