var saveBtn = $(".saveBtn");


$(document).ready(function() {

// Current day displayed in calendar
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// Saves when button is clicked
saveBtn.on("click", function() {
    var plan = $(this).siblings(".planner").val();
    var clock = $(this).parent().attr("id");

    // Text for the event is saved in local storage
    localStorage.setItem(plan, clock);
});

// Color coded to verify past, present, or future
var colorCode = function() {
    var currentHour = moment().hour();

    $(".time-block").each(function() {
        var hours = parseInt($(this).attr("id"));

        // console.log(this);

        if (hours > currentHour) {
            $(this).addClass("future");
        } else if (hours === currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    });
};
colorCode();
});


// $("#9").addClass("past");
// $("#6").addClass("past");
// console.log(moment().hour()-12);
// // =========
// var currentHour = moment().hour();
  
// if (currentHour > 12) {
//     currentHour = currentHour - 12
// }
// if (currentHour === 5) {
//     $("#6").addClass("present");
// } 
// // =========

// for (var i; i < currentHour.length; i++) {

// }

// iterate over hours array
//  if current hour is less than element
//      then add past class
//  if else current hour is equal to element
//      then add present class
//  else element is the future