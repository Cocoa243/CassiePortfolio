$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Make the header element stretch across the screen
$(document).ready(function(){
    $('.header').height($(window).height());
  })
  

// Get the button
var btn = document.getElementById("myBtn");

//nav bar
