$(document).ready(function() {
    // display current day and time.
    $("#currentDay").text(moment().format('dddd MMMM Do YYYY'));


    // Listen for save button clicks
    $(".saveBtb").on("click", function (){
        //nearby values
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        console.log(value);
        console.log(time);

        // Set in local storage
        localStorage.setItem(time, value);
    });

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