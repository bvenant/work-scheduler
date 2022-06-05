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

// Load data from local storage
$("#9 .planner").val(localStorage.getItem("9"));
$("#10 .planner").val(localStorage.getItem("10"));
$("#11 .planner").val(localStorage.getItem("11"));
$("#12 .planner").val(localStorage.getItem("12"));
$("#13 .planner").val(localStorage.getItem("13"));
$("#14 .planner").val(localStorage.getItem("14"));
$("#14 .planner").val(localStorage.getItem("15"));
$("#16 .planner").val(localStorage.getItem("16"));
$("#17 .planner").val(localStorage.getItem("17"));

});