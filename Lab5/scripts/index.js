$("#buttonServices").click(function() {
    console.log($("#navbar").outerHeight())
    console.log()
    $('html, body').animate({
        scrollTop: $("#servicesHeader").offset().top - $("#navbar").outerHeight()
    }, 50);
});
    
$("#buttonProfessionals").click(function() {
    console.log()
    $('html, body').animate({
        scrollTop: $("#professionalsHeader").offset().top - $("#navbar").outerHeight()
    }, 50);
});
$("#buttonHome").click(function() {
    console.log()
    $('html, body').animate({
        scrollTop: $("body").offset().top
    }, 50);
});

// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://flaviocopes.com/javascript-regular-expressions/
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/; //https://stackoverflow.com/questions/9315647/regex-credit-card-number-tests
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^(\([-+]?[0-9]+)\)$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

var doctor = 1;
function selectDoctor(){
    var selectBox = document.getElementById("doctors");
    doctor = selectBox.options[selectBox.selectedIndex].value;
    console.log(doctor)
}
//https://stackoverflow.com/questions/3487263/how-to-use-onclick-or-onselect-on-option-tag-in-a-jsp-page

// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)

const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    var jensonUnavailableDates = ["06/29/2021","07/07/2021","07/10/2021", "07/01/2021"];
    var kimUnavailableDates = ["06/22/2021","07/04/2021","07/19/2021", "07/01/2021"];
    var EriksonUnavailableDates = ["06/24/2021","07/03/2021","07/10/2021", "07/11/2021", "07/01/2021"];
    var unavailable = [jensonUnavailableDates, kimUnavailableDates, EriksonUnavailableDates]
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() === 0 || date.getDay() === 6)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [unavailable[doctor].indexOf(string) === -1 ]
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Wrong format for phone");
            $("#phone").val("(xxxx)");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });

    $("#credit").on("change", function(){
        if (!validatePhone("credit")){
            alert("Wrong format for credit Card");
            $("#credit").val("(xxxx)");
            $("#credit").addClass("error");
        }
        else {
            $("#credit").removeClass("error");
        }
    });
    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });


});

//Some code based off of sample code found here https://stackoverflow.com/questions/23076191/jquery-scrolltop-with-offset