$(document).ready(function() {
  // creates a variable of the current date
  //   var now = moment().format("dddd, MMMM Do YYYY");

  function colourCode (){
  // for testing
  var now = moment();
  now.add(3, 'hours');
//   now.subtract(7, "hours");
  var now = now.hour();

  //   displays current date at top of screen
  $("#currentDay").text(now);
  console.log(now);

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
};

function getEntries() {
  $("#8am-input").val(JSON.parse(localStorage.getItem("8am-storage")));
}


$(".saveBtn").click(function() {
  localStorage.setItem("8am-storage", JSON.stringify($("#8am-input").val()));
});

// run functions
getEntries();
colourCode();
});


// not mine
// $(".saveBtn").click(function() {
//     words = $(this).siblings(".input").val();
//     console.log(words);
//     hourInfo = $(this).siblings(".hour").text();
//     console.log(hourInfo);
//     localStorage.setItem(hourInfo, JSON.stringify(words));
    
//     colorChange ();
//     renderText ();
// })

// var saveWords9 = JSON.parse(localStorage.getItem("9:00 am"));
// $("#9").val("");
// $("#9").val(saveWords9);
