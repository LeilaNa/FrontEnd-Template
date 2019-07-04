$(document).ready(function () {
    $(window).scroll(function () {

        if ($(window).scrollTop() >= 100) {
            $(".buttonup").css("display", "block")
        }
        if ($(window).scrollTop() <= 100) {
            $(".buttonup").css("display", "none")
        }
    })
    $(".buttonup").click(function () {
        $("html, body").animate({ scrollTop: 0 })
    })

    // about header
    {
        $("#fashion-item").click(function () {
            if ($(".drop-items").css("display") == "none") {
                $(".drop-items").css("display", "flex");
            }
            else { $(".drop-items").css("display", "none") }
        })
        $(".btnsearch").click(function () {
            if ($(".res-search").css("display") == "none") {
                $(".res-search").css("display", "flex");
            }
            else { $(".res-search").css("display", "none") }
        })
        $(".moneyy").click(function () {
            var usdeuro = $(this).text()
            $(".usdeuro").text(usdeuro)
        })

        $(".lng").click(function () {
            var languagemain = $(this).html()
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

    // left categories

    {
        $(".categoriesleft").click(function () {
            if ($(".allcategoriesleft").css("height") == "0px") {
                $(".allcategoriesleft").css("height", "auto");
            }
            else { $(".allcategoriesleft").css("height", "0px") }
        })

        $(".price").click(function () {
            if ($(".slideranges").css("display") == "none") {
                $(".slideranges").css("display", "block");
            }
            else { $(".slideranges").css("display", "none") }
        })
        $(".color").click(function () {
            if ($(".allcolors").css("display") == "none") {
                $(".allcolors").css("display", "flex");
            }
            else { $(".allcolors").css("display", "none") }
        })
        $(".size").click(function () {
            if ($(".allsizes").css("display") == "none") {
                $(".allsizes").css("display", "flex");
            }
            else { $(".allsizes").css("display", "none") }
        })
        $(".condition").click(function () {
            if ($(".checkbox").css("display") == "none") {
                $(".checkbox").css("display", "flex");
            }
            else { $(".checkbox").css("display", "none") }
        })
        $(".brands").click(function () {
            if ($(".allbrands").css("display") == "none") {
                $(".allbrands").css("display", "flex");
            }
            else { $(".allbrands").css("display", "none") }
        })
        $(".startingat").click(function () {
            if ($(".comp").css("display") == "none") {
                $(".comp").css("display", "flex");
            }
            else { $(".comp").css("display", "none") }
        })
        // range slider

        var slider1 = document.getElementById("myRange");
        var output1 = document.getElementById("demo");
        output1.innerHTML = $(".slider").value;

        slider1.oninput = function () {
            output1.innerHTML = this.value;
        }

        var slider2 = document.getElementById("myRange2");
        var output2 = document.getElementById("demo2");
        output2.innerHTML = $(".slider").value;

        slider2.oninput = function () {
            output2.innerHTML = this.value;
        }

    }
    // right
    $(".sortul li").click(function () {
        var text = $(this).text()
        $(".sort").text(text)
    })

    $(".sortnumber li").click(function () {
        var text = $(this).text()
        $(".number").text(text)
    })


    $(".show36").click(function () {
        $(".single-products").css("display","none");
        $(".products").css("display","flex")
        $(".card").css("width", "calc(100%/4 - 20px)")

    })
    $(".show24").click(function () {
        $(".single-products").css("display","none");
        $(".products").css("display","flex")
        $(".card").css("width", "calc(100%/3 - 20px)")
    })
    $(".show12").click(function () {
      $(".single-products").css("display","block");
      $(".products").css("display","none")
    })

})