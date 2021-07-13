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
    
    if (mediaQuery.matches) {
        $('.program-day').click(function(){
            $(this).next().toggle()
            $(this).find('.arrow-program').toggleClass('ri-arrow-up-s-line');
            $(this).find('.arrow-program').toggleClass('ri-arrow-down-s-line');
        })
    }

    $('.faq-question').click(function(){
        $(this).next().toggle()
        $(this).find('.arrow-faq').toggleClass('ri-arrow-up-s-line');
        $(this).find('.arrow-faq').toggleClass('ri-arrow-down-s-line');
    })

    $('.dot-amazonia').click(function(){
        window.location.href='/caipora-v1/amazonia';
    })

    $('.dot-venezuela').click(function(){
        window.location.href='/caipora-v1/guatemala';
    })

    
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
