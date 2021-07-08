// Look for .hamburger
const mediaQuery = window.matchMedia('(max-width: 600px)')


    var hamburger = document.querySelector(".hamburger");
    // On click
    hamburger.addEventListener("click", function() {
        // Toggle class "is-active"
        hamburger.classList.toggle("is-active");
        $(".menu").toggleClass("sidenav-open");
        $(".menu-links").toggleClass("menu-links-open");
        $(".socials").toggleClass("socials-open");
        if (mediaQuery.matches) {
            $(".page-title").toggle();
            // Do something else, like open/close menu
        }
    });




    $('.faq-question:even').addClass('green');
    $('.faq-answer:even').addClass('green');
    $('.arrow-faq').click(function() {
        jQuery(this).parent().next().toggle();
        $(this).toggleClass('ri-arrow-up-s-line');
    });



    if (mediaQuery.matches) {
        $('.team-img').click(function(){
            $(this).next().toggle()
        })
    }
    else {
        $('.team-img').hover(function(){
            console.log('hi');
            $(this).next().toggle()
        })
    }
