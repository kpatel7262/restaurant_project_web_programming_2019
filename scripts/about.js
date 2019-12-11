jQuery(document).ready(function () {
    
    $(".history").hide();
    $(".present-day").hide();
    
    $("#about_us").click(function(){
        $(".history").hide();
        $("present-day").hide;
        $(".about-us").toggle();
    });
    
    $("#history").click(function(){
        $(".about-us").hide();
        $(".present-day").hide();
        $(".history").toggle();
    });
    
    $("#present_day").click(function (){
        $(".about-us").hide();
        $(".history").hide();
        $(".present-day").toggle();
    });
});
