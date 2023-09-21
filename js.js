$(document).ready(function() {

$(window).scroll(function() {
    let scrolled = $(window).scrollTop();
    
    if(scrolled > 300) {
        $('#back-to-top').addClass('active');
    } else{
        $('#back-to-top').removeClass('active');
    }
    });

    $('#back-to-top').click(function() {
        $('body, html').animate({scrollTop: 0}, 1000)
    });

});


var engLink = document.getElementById("switchToEng");
    engLink.addEventListener("click", function() {
        window.location.href = "index_eng.html";
    });