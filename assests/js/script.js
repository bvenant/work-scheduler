$(document).ready(function() {

// Current day displayed in calendar
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

var saveBtn = $(".saveBtn");

});


$("#9").addClass("past");
$("#6").addClass("past");
console.log(moment().hour()-12);
// =========
var currentHour = moment().hour();
  
if (currentHour > 12) {
    currentHour = currentHour - 12
}
if (currentHour === 5) {
    $("#6").addClass("present");
} 
// =========

for (var i; i < currentHour.length; i++) {

}

saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var description = 
})


var hours = [
    9, 10, 11, 12, 1, 2, 3, 4, 5
]

// iterate over hours array
//  if current hour is less than element
//      then add past class
//  if else current hour is equal to element
//      then add present class
//  else element is the future