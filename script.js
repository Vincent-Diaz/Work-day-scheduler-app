$(document).ready(function() {

    // Listen for save button clicks
    $(".saveBtb").on("click", function (){
        //nearby values
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

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
        })
    }

    updateHour();
})