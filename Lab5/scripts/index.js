
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