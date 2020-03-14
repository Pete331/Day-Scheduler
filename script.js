$(document).ready(function() {
  for (i = 9; i < 19; i++) {
    $("#row-0")
      .clone()
      .attr("id", i - 1)
      .insertBefore("#row-0");
    $("#time").attr("id", i - 1);
    $("#time").text(i + "00");
    $("#input").attr("id", i - 1);
    $("#description").attr("id", i - 1);
  }

  // once all html elements are created, remove the initial copy as id's dont match up
  $("#row-0").remove();

  function colourCode() {
    // creates a variable of the current date
    var nowScreen = moment().format("dddd, MMMM Do YYYY");
    //   displays current date at top of screen
    $("#currentDay").text(nowScreen);

    var now = moment();
    // for testing - uncomment one of the below lines and change hour number
    // now.add(3, 'hours');
    // now.subtract(7, "hours");

    // gets the moment and returns the hour and stores in now variable

    var now = now.hour();
    $(".description").each(function() {
      var timeQuery = parseInt($(this).attr("id"));
      if (now === timeQuery) {
        $(this).addClass("present");
      } else if (now > timeQuery) {
        $(this).addClass("past");
      } else {
        $(this).addClass("future");
      }
    });
  }

  function getEntries() {
    $('[id="8"]').val(JSON.parse(localStorage.getItem("800")));
    $('[id="9"]').val(JSON.parse(localStorage.getItem("900")));
    $('[id="10"]').val(JSON.parse(localStorage.getItem("1000")));
    $('[id="11"]').val(JSON.parse(localStorage.getItem("1100")));
    $('[id="12"]').val(JSON.parse(localStorage.getItem("1200")));
    $('[id="13"]').val(JSON.parse(localStorage.getItem("1300")));
    $('[id="14"]').val(JSON.parse(localStorage.getItem("1400")));
    $('[id="15"]').val(JSON.parse(localStorage.getItem("1500")));
    $('[id="16"]').val(JSON.parse(localStorage.getItem("1600")));
    $('[id="17"]').val(JSON.parse(localStorage.getItem("1700")));
  }

  $(".saveBtn").click(function() {
    localStorage.setItem(
      $(this)
        .parent()
        .siblings(".time-block")
        .text(),
      JSON.stringify(
        $(this)
          .parent()
          .siblings(".description")
          .children()
          .val()
      )
    );
  });


$(".clear-btn").on("click", function() {
  window.localStorage.clear();
  window.location.reload();
});

  // run functions
  getEntries();
  colourCode();
});
