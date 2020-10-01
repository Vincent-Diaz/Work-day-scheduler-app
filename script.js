$(document).ready(function() {
    // display current day and time.
        $("#currentDay").text(moment().format('dddd MMMM Do YYYY'));
    


    // Listen for save button clicks
    $(".saveBtn").on("click", function (){
        //nearby values
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        console.log(value);
        console.log(time);

        // Set in local storage
        localStorage.setItem(time, value);
    });

    // Load saved data from localStorage
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

    function updateHour() {
        // Current number of hours
        var currentHour = moment().hours();
        console.log(currentHour);
        // loop over time blocks
        $(".time-block").each(function () {
            var rowHour = parseInt($(this).attr("id"));
            console.log(rowHour);

            // Check if we've moved past this time
            if (rowHour < currentHour) {
                $(this).addClass("past");
            }
            else if (rowHour === currentHour) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("future");
            }
        })
    }
    updateHour();
})