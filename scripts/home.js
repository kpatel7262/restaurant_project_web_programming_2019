
// hovering over menu items
$("li").mouseover(function(){
  $(this).css("border-bottom", "1px solid #fff").css( "color", "red");
});

$("li").mouseleave(function(){
  $(this).css("border-bottom", "none").css("color", "#fff");
});

//hovering over social icons
$(".icon").mouseover(function(){
  $(this).css("transform", "scale(1.4)");
});

$(".icon").mouseleave(function(){
  $(this).css("transform", "scale(1)");
});
//hovering over the buttons
$(".btn-light").mouseover(function(){
  $(this).css("color", "#fff").css("background", "transparent").css("border", "1px solid #fff");
});

$(".btn-light").mouseleave(function(){
  $(this).css("color", "#000").css("background", "#fff");
});

$(".btn-border").mouseover(function(){
  $(this).css("color", "#000").css("background", "#fff");
});

$(".btn-border").mouseleave(function(){
  $(this).css("color", "#fff").css("background", "transparent").css("border", "1px solid #fff");
});
//animation for the pizza picture
$(".pizza").css("opacity", "0.5").slideToggle(1400).animate({opacity: 1});
