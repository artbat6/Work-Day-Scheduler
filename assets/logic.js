// display current date at top in div class .time-block

var currentDate = moment().format("dddd, MMM Do YYYY");
$(".time-block").html(currentDate);


$(document).ready(function(){
    $("button").click(function() {

       alert("click is working");
    });


// when I click "save" the event is saved in local storage 
// $(document).ready(function () {
// //     // saveBtn click listener 
//     $(".saveBtn").on("click", function () {
      
//     };

        

// make textarea boxes a certain color (class) depending on the current time of day
// function timeTracker() {
//     //get current number of hours.
//     var timeNow = moment().hour();

//     // loop over time blocks
//     $(".time-block").each(function () {
//         var blockTime = parseInt($(this).attr("id").split("hour")[1]);

//         // To check the time and add the classes for background indicators
//         if (blockTime < timeNow) {
//             $(this).removeClass("future");
//             $(this).removeClass("present");
//             $(this).addClass("past");
//         }
//         else if (blockTime === timeNow) {
//             $(this).removeClass("past");
//             $(this).removeClass("future");
//             $(this).addClass("present");
//         }
//         else {
//             $(this).removeClass("present");
//             $(this).removeClass("past");
//             $(this).addClass("future");

//         }
//     })
// }
// // Get item from local storage if any
// $("#hour8 .description").val(localStorage.getItem("hour8"));
// $("#hour9 .description").val(localStorage.getItem("hour9"));
// $("#hour10 .description").val(localStorage.getItem("hour10"));
// $("#hour11 .description").val(localStorage.getItem("hour11"));
// $("#hour12 .description").val(localStorage.getItem("hour12"));
// $("#hour13 .description").val(localStorage.getItem("hour13"));
// $("#hour14 .description").val(localStorage.getItem("hour14"));
// $("#hour15 .description").val(localStorage.getItem("hour15"));
// $("#hour16 .description").val(localStorage.getItem("hour16"));
// $("#hour17 .description").val(localStorage.getItem("hour17"));

// timeTracker();



