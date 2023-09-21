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
    
    
    var uaLink = document.getElementById("switchToUa");
        uaLink.addEventListener("click", function() {
            window.location.href = "index.html";
        });