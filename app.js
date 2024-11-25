  $(function() {
    $("#toggleButton").click(function(){
      $("#myParagraph").toggle();
    });
  });

  $(function() {
    $("#colorButton").click(function() {
      $("#colorDiv").css(
        "background-color", "yellow"
      )
    })
  })

  $(function() {
    $("#addClassButton").click(function() {
      $("#classDiv").addClass("newClass")
    })
    $("#removeClassButton").click(function() {
      $("#classDiv").removeClass("newClass")
    })
  })

  $(function() {
    $("#fadeInButton").click(function() {
      $("#fadeDiv").fadeIn()
    })
    $("#fadeOutButton").click(function() {
      $("#fadeDiv").fadeOut()
    })
  })

  $(function() {
    $("#slideUpButton").click(function() {
      $("#slideDiv").slideUp()
    })
    $("#slideDownButton").click(function() {
      $("#slideDiv").slideDown()
    })
  })

