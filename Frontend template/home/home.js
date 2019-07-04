$(document).ready(function () {

    $(window).scroll(function () {

        if ($(window).scrollTop() >= 100) {
       $(".buttonup").css("display","block")           
        } 
        if ($(window).scrollTop() <= 100){
            $(".buttonup").css("display","none")
        }
    })
    $(".buttonup").click(function(){
        $("html, body").animate({ scrollTop: 0})    })

    // about header
    {
    $("#fashion-item").click(function () {
        if ($(".fashiondropdown").css("display") == "none") {
            $(".fashiondropdown").css("display", "flex");
        }
        else { $(".fashiondropdown").css("display", "none") }
    })
    $(".btnsearch").click(function () {
        if ($(".res-search").css("display") == "none") {
            $(".res-search").css("display", "flex");
        }
        else { $(".res-search").css("display", "none") }
    })
    $(".moneyy").click(function(){
        var usdeuro=$(this).text()
        $(".usdeuro").text(usdeuro)
    })
    
    $(".lng").click(function(){
        var languagemain=$(this).html()
        $(".mainlang").html(languagemain)
    })    
    
}
// responsive tab menu
{
    $(".responive-tabmenu").click(function () {
        $(".side-navbar").css({ "width": "250px", "padding": "25px" })
        $(".all").css("margin-left", "250px")
    })
    $(".close").click(function () {
        $(".all").css("margin-left", "0px")
        $(".side-navbar").css({ "width": "0px", "padding": "0px" })
    })
    
    $(".fashion").click(function () {
        if ($(".fashionlinks").css("display") == "none") {
            $(".fashionlinks").css("display", "block");
        }
        else { $(".fashionlinks").css("display", "none") }
    })
    $(".women").click(function () {
        if ($(".womenlinks").css("display") == "none") {
            $(".womenlinks").css("display", "block");
        }
        else { $(".womenlinks").css("display", "none") }
    })

    $(".man").click(function () {
        if ($(".manlinks").css("display") == "none") {
            $(".manlinks").css("display", "block");
        }
        else { $(".manlinks").css("display", "none") }
    })

    $(".kids").click(function () {
        if ($(".kidslinks").css("display") == "none") {
            $(".kidslinks").css("display", "block");
        }
        else { $(".kidslinks").css("display", "none") }
    })

    $(".accessories").click(function () {
        if ($(".accessorieslinks").css("display") == "none") {
            $(".accessorieslinks").css("display", "block");
        }
        else { $(".accessorieslinks").css("display", "none") }
    })

    $(".pages").click(function () {
        if ($(".pageslinks").css("display") == "none") {
            $(".pageslinks").css("display", "block");
        }
        else { $(".pageslinks").css("display", "none") }
    })

    $(".level").click(function () {
        if ($(".levellink").css("display") == "none") {
            $(".levellink").css("display", "block");
        }
        else { $(".levellink").css("display", "none") }
    })
}
// color palet 
{
    $(".palet-icon").click(function () {
        if (($(".colors").css("width") == "0px")) {
            $(".colors").css("width", "50px")
        }
        else { $(".colors").css("width", "0px") }
    })

    $(".green").click(function () {
        $(".home").css("background", "rgb(104, 159, 56)")
        $(".header").css("background", "rgb(104, 159, 56)")
        $(".footer").css("background", "rgb(104, 159, 56)")
        $(".shopnow").css("background", "rgb(104, 159, 56)")
        $(".owl-nav button.owl-prev").css("background", "rgb(104, 159, 56)")
        $(".owl-nav button.owl-next").css("background", "rgb(104, 159, 56)")

    })
    $(".blue").click(function () {
        $(".home").css("background", "#1976d2")
        $(".header").css("background", "#1976d2")
        $(".footer").css("background", "#1976d2")
        $(".shopnow").css("background", "#1976d2")
        $(".owl-nav button.owl-prev").css("background", "#1976d2")
        $(".owl-nav button.owl-next").css("background", "#1976d2")

    })
    $(".red").click(function () {
        $(".home").css("background", "#d32f2f")
        $(".header").css("background", "#d32f2f")
        $(".footer").css("background", "#d32f2f")
        $(".shopnow").css("background", "#d32f2f")
        $(".owl-nav button.owl-prev").css("background", "#d32f2f")
        $(".owl-nav button.owl-next").css("background", "#d32f2f")
    })
    $(".pink").click(function () {
        $(".home").css("background", "#c2185b")
        $(".header").css("background", "#c2185b")
        $(".footer").css("background", "#c2185b")
        $(".shopnow").css("background", "#c2185b")
        $(".app-carusel .owl-carousel .owl-nav button.owl-prev").css("background", "#c2185b !important")
        $(".owl-nav button.owl-next").css("background", "#c2185b")
    })
    $(".puple").click(function () {
        $(".home").css("background", "#7b1fa2")
        $(".header").css("background", "#7b1fa2")
        $(".footer").css("background", "#7b1fa2")
        $(".shopnow").css("background", "#7b1fa2")
        $(".owl-nav button.owl-prev").css("background", "#7b1fa2")
        $(".owl-nav button.owl-next").css("background", "#7b1fa2")
    })
    $(".grey").click(function () {
        $(".home").css("background", "#455a64")
        $(".header").css("background", "#455a64")
        $(".footer").css("background", "#455a64")
        $(".shopnow").css("background", "#455a64")
        $(".owl-nav button.owl-prev").css("background", "#455a64")
        $(".owl-nav button.owl-next").css("background", "#455a64")
    })
}
// first carousel
    $(".owl-first").owlCarousel({
        navigation: true,
        nav: true,
        loop: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true
    });
    $(".owl-nav>button").removeClass("disabled");
    // cards
    $('.owl-tab').owlCarousel({
        margin: 10,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 2,
                nav: true
            },
            768: {
                items: 3,
                nav: true,
            },
            960: {
                items: 5,
                nav: true,
            }
        }
    })
    $(".cards ul li").click(function () {
        $(".cards ul li").removeClass("border")
        $(this).addClass("border")
    })
    // logos
    $(".owl-logos").owlCarousel({
        margin: 10,
        nav: true,
        loop: true,
        responsiveClass: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            320: {
                items: 2,
                nav: true
            },
            480: {
                items: 3,
                nav: true
            },
            768: {
                items: 4,
                nav: true,
            },
            960: {
                items: 5,
                nav: true,
            }
        }
    })


})