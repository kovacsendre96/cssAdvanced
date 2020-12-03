

  


/*



// Task 14.6
  $(document).ready(() => {
    var headerText = $("h1").text();
    var secondHeader = $("h2").text();
    $(window).resize(() => {
      var windowWidth = $(window).width();
      var newHeader = headerText + " " + windowWidth + "px";
      $("h1").text(newHeader);
      
      var pageFontSize = $(".wrapper p").css("font-size");
      var newSecondHeader = secondHeader + " " + pageFontSize;
      $("h2").text(newSecondHeader);
    });
  });
//Task 14.5

$(document).ready(() => {
    var headerText = $("h1").text();
    var secondHeader = $("h2").text();
    $(window).resize(() => {
      var windowWidth = $(window).width();
      var newHeader = headerText + " " + windowWidth + "px";
      $("h1").text(newHeader);
      
      var headerFontSize = $("h2").css("font-size");
      var newSecondHeader = secondHeader + " " + headerFontSize;
      $("h2").text(newSecondHeader);
    });
  });


Task14.4
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
  });*/