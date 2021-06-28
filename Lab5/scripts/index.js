
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

//Some code based off of sample code found here https://stackoverflow.com/questions/23076191/jquery-scrolltop-with-offset