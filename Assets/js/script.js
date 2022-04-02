// Moment
var today = moment().format("dddd, MMMM Do"); // Today
$("#currentDay").text(today); // Print Today to Screen

var now = moment(); // Right Now

// Day Planner Elements
var time = $('#time');
var events = $('#events');
var saveBtn = $('.saveBtn');

// Times
var nineAm = moment (9, "HH").format("h a");
$("#9am").text(nineAm);

var tenAm = moment (10, "HH").format("h a");
$("#10am").text(tenAm);

var elevenAm = moment (11, "HH").format("h a");
$("#11am").text(elevenAm);

var twelvePm = moment (12, "HH").format("h a");
$("#12pm").text(twelvePm);

var onePm = moment (13, "HH").format("h a");
$("#1pm").text(onePm);

var twoPm = moment (14, "HH").format("h a");
$("#2pm").text(twoPm);

var threePm = moment (15, "HH").format("h a");
$("#3pm").text(threePm);

var fourPm = moment (16, "HH").format("h a");
$("#4pm").text(fourPm);

var fivePm = moment (17, "HH").format("h a");
$("#5pm").text(fivePm);

// SaveEvents to Local Storage
function saveEvent() {
  var activity = $(this).siblings(".events").val();
  var hourKey = $(this).parent().attr("id");
  localStorage.setItem(hourKey, activity);
}

for (var i = 9; i < 18; i++) {
  $(`#event${i}`).val(localStorage.getItem(i))
}


$(".row").each(function(){
  var hour=parseInt($(this).attr("id"));
  var momentHour=moment().hour();
  console.log(hour, momentHour);

// Conditional Class Changes
if (momentHour===hour) {
  $(".events").addClass("present");
}
if (momentHour<hour) {
  $(".events").addClass("future");
}
if (momentHour>hour) {
  $(".events").addClass("past");
}
})

// Save Button calls saveEvent Function upon user click
saveBtn.on("click", saveEvent);