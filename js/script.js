$(document).ready(function () {
    console.log("ok");
    menubar();
    upSter();
    buttons2();
    buttons1();
    buttons3();
    buttons4();
    buttons5();
    buttons6();
    buttons7();
    buttons8();
    buttons222();
    buttonsBlog();
    buttonsBlog1();
    buttonBlog3();
    buttonBlog4();
    menuBars();
    hideMenuBars();
    positionMenuColor();
    paralax();
    elementRevalScroll();
    scrollMenu();
    scrollMenuBarss();



    $(".buttons .span1").addClass("active");
    $(".owl.dots button").addClass("active");
    $(".pricing .container .text #p1").addClass("active");
})
$(document).ready(function () {

    $(".owl-carousel").owlCarousel();
});
// $(document).ready(function () {

//     $('.count').countTo();

// });

function menubar() {
    $(window).on('scroll', function (e) {
        let removal = $("html").scrollTop();
        // console.log('removal: ', removal);
        if (removal > 110) {
            setTimeout(function () {
                $("#menu1, .fa-arrow-circle-up, .fa-bars").addClass("active");
                $("#menu2 .logo").css("display", "none");

            }, 200);

            // $(".navMenu, .fa-arrow-circle-up").addClass("active");
        } else {
            setTimeout(function () {
                $("#menu1, .fa-arrow-circle-up, .fa-bars").removeClass("active");
                $("#menu2 .logo").css("display", "block");

            }, 200);


            // $(".navMenu, .fa-arrow-circle-up").removeClass("active");
        }




    })
}

function upSter() {
    $(".fa-arrow-circle-up, .logo, .homeColor").on('click', function () {
        $("html, body").animate({
            'scrollTop': 0
        }, 700)
    })
}
//przewijanie listy pracownikow//
function buttons2() {
    $(".buttons .span2").on("click", function () {

        $(".team .wrapper").removeClass("active1 active3 active4 active5 active6 active7 active8");
        $(".team .wrapper").addClass("active2");
        $("#span11, #span13, #span14, #span15, #span16, #span17, #span18").removeClass("active");
        $("#span12").addClass("active");




    })
}


function buttons1() {
    $(".buttons .span1").on("click", function () {
            $(".team .wrapper").removeClass("active2 active3 active4 active5 active6 active7 active8");
            $(".team .wrapper").removeClass("active1");
            $("#span12, #span13, #span14, #span15, #span16, #span17, #span18").removeClass("active");
            $("#span11").addClass("active");



        }

    )
}

function buttons3() {
    $(".buttons .span3").on("click", function () {

        $(".team .wrapper").removeClass("active1 active2 active4 active5 active6 active7 active8");
        $(".team .wrapper").addClass("active3");
        $("#span11, #span12, #span14, #span15, #span16, #span17, #span18").removeClass("active");
        $("#span13").addClass("active");



    })
}

function buttons4() {
    $(".buttons .span4").on("click", function () {

        $(".team .wrapper").removeClass("active1 active2 active3 active5 active6 active7 active8");
        $(".team .wrapper").addClass("active4");
        $("#span11, #span12, #span13, #span15, #span16, #span17, #span18").removeClass("active");
        $("#span14").addClass("active");




    })
}

function buttons5() {
    $(".buttons .span5").on("click", function () {

        $(".team .wrapper").removeClass("active1 active2 active3 active4 active6 active7 active8");
        $(".team .wrapper").addClass("active5");
        $("#span11, #span12, #span13, #span14, #span16, #span17, #span18").removeClass("active");
        $("#span15").addClass("active");




    })
}

function buttons6() {
    $(".buttons .span6").on("click", function () {

        $(".team .wrapper").removeClass("active1 active2 active3 active4 active5 active7 active8");
        $(".team .wrapper").addClass("active6");
        $("#span11, #span12, #span13, #span14, #span15, #span17, #span18").removeClass("active");
        $("#span16").addClass("active");




    })
}

function buttons7() {
    $(".buttons .span7").on("click", function () {

        $(".team .wrapper").removeClass("active1 active2 active3 active4 active5 active6 active8");
        $(".team .wrapper").addClass("active7");
        $("#span11, #span12, #span13, #span14, #span15, #span16, #span18").removeClass("active");
        $("#span17").addClass("active");




    })
}

function buttons7() {
    $(".buttons .span7").on("click", function () {

        $(".team .wrapper").removeClass("active1 active2 active3 active4 active5 active6 active8");
        $(".team .wrapper").addClass("active7");
        $("#span11, #span12, #span13, #span14, #span15, #span16, #span18").removeClass("active");
        $("#span17").addClass("active");




    })
}

function buttons8() {
    $(".buttons .span8").on("click", function () {

        $(".team .wrapper").removeClass("active1 active2 active3 active4 active5 active6 active7");
        $(".team .wrapper").addClass("active8");
        $("#span11, #span12, #span13, #span14, #span15, #span16, #span17").removeClass("active");
        $("#span18").addClass("active");




    })
}










//end przewijanie listy pracowników//

// przełacznik opłaty rocznej i m-c//

function buttons222() {
    $(".pricing .container .buttons").on("click", function () {
        $(".pricing .container .button").toggleClass("active");
        $(".pricing .container .text #p1").toggleClass("active");
        $(".pricing .container .text #p2").toggleClass("active");


    })
}

//end przelacznik cen//

// przełacznik cen na tabeli//



let bnt = document.querySelector("#buttonJS");

bnt.addEventListener("click", function () {
    let x = document.getElementById("price01");
    let y = document.getElementById("price02");
    let z = document.getElementById("price03");


    if (x.innerHTML === "12,99 zł/rok", y.innerHTML === "14,99 zł/rok", z.innerHTML === "18,99 zł/rok") {
        x.innerHTML = "18.99 zł/m-c", y.innerHTML = "20.99 zł/m-c", z.innerHTML = "24.99 zł/m-c";
    } else {
        x.innerHTML = "12,99 zł/rok", y.innerHTML = "14,99 zł/rok", z.innerHTML = "18,99 zł/rok";
    }


})
//end przełacznik cen na tabeli//

//przlcznik blog//

function buttonsBlog() {
    $("#buttonBlog").on("click", function () {

        $(".blissful .container").removeClass("active2 active3");
        $(".blissful .container").addClass("active");
        $("#buttonBlog1, #buttonBlog3, #buttonBlog4 ").removeClass("active");
        $("#buttonBlog").addClass("active");

    })
}

function buttonsBlog1() {
    $("#buttonBlog1").on("click", function () {
        $(".blissful .container").removeClass("active active2 active3");
        $("#buttonBlog, #buttonBlog3, #buttonBlog4").removeClass("active");
        $("#buttonBlog1").addClass("active");
    })
}

function buttonBlog3() {
    $("#buttonBlog3").on("click", function () {

        $(".blissful .container").removeClass("active active3");
        $(".blissful .container").addClass("active2");
        $("#buttonBlog, #buttonBlog1, #buttonBlog4").removeClass("active");
        $("#buttonBlog3").addClass("active");



    })
}

function buttonBlog4() {
    $("#buttonBlog4").on("click", function () {
        $(".blissful .container").removeClass("active active2");
        $(".blissful .container").addClass("active3");
        $("#buttonBlog, #buttonBlog1, #buttonBlog3").removeClass("active");
        $("#buttonBlog4").addClass("active");
    })
}

//hamburger

function menuBars() {
    $(".fa-bars").on("mousemove", function () {
        $(".menuList").addClass("active");
    })
    $(".menuList").on("mouseleave", function () {
        $(".menuList").removeClass("active");
    })
}


//parlaxx

function paralax() {
    $(document).on("scroll", function () {
        let Bgoffset = $(document).scrollTop() * -0.5;
        // console.log({ a });
        $("body .homeSection").css("background-position-y", Bgoffset);

    })
}


/// liczniki



function elementRevalScroll() {
    let trigger1 = $(".statistic .heading h1").position().top;
    $(document).on("scroll", trigger1, checkingTrigger1);
}



function checkingTrigger1(event) {

    if ($(document).scrollTop() > event.data) {
        console.log("dotarlem na dol");
        $(document).off("scroll", checkingTrigger1);
        $(document).on("scroll", event.data, checkingTrigger2);
        $('.count').countTo();
    }

}

function checkingTrigger2(event) {

    if ($(document).scrollTop() < event.data) {
        console.log("dotarlem na gore ");
        $(document).off("scroll", checkingTrigger2);
        $(document).on("scroll", event.data, checkingTrigger1);
    }

}

//scrollMenu

function scrollMenu() {
    $(".homeSection .navMenu ul li a").on('click', function () {
        const scrollMenu = "#" + $(this).attr('class');
        $('body, html').animate({
            scrollTop: $(scrollMenu).offset().top - 100
        }, 1000)

    })

}

function scrollMenuBarss() {
    $(".menuList ul li a").on('click', function () {
        const scrollMenu = "#" + $(this).attr('class');
        $('body, html').animate({
            scrollTop: $(scrollMenu).offset().top - 30
        }, 2000)

    })

}

function positionMenuColor() {
    $(document).on('scroll', function () {
        const windowHight = $(window).height();
        const scrollValue = $(this).scrollTop();


        const manuButtonHome = $(".navMenu .home1");
        const sectionHome = $("#home1");
        const homeTop = sectionHome.offset().top;
        const homeHeigth = sectionHome.outerHeight();


        const menuButtonAbaut = $(".navMenu .abaut1");
        const sectionAbaut = $("#abaut1");
        const abautTop = $('#abaut1').offset().top;
        const abautHeigth = $('#abaut1').outerHeight();

        const menuButtonServices = $(".navMenu .services1");
        const sectionServices = $("#services1");
        const servicesTop = $(sectionServices).offset().top;
        const servicesHeight = $(sectionServices).outerHeight();

        const menuButtonPortfolio = $(".navMenu .portfolio");
        const sectionPortfolio = $("#portfolio");
        const portolioTop = $(sectionPortfolio).offset().top - 150;
        const portfolioHeight = $(sectionPortfolio).outerHeight();

        const menuButtonTeam = $(".navMenu .team1");
        const sectionTeam = $("#team1");
        const teamTop = $(sectionTeam).offset().top - 150;
        const teamHeight = $(sectionTeam).outerHeight();

        const menuButtonCeny = $(".navMenu .ceny");
        const sectionCeny = $("#ceny");
        const cenyTop = $(sectionCeny).offset().top - 250;
        const cenyHeight = $(sectionCeny).outerHeight();

        const menuButtonBlog = $(".navMenu .blog");
        const sectionBlog = $("#blog");
        const blogTop = $(sectionBlog).offset().top;
        const blogHeight = $(sectionBlog).outerHeight();

        const menuButtonContact = $(".navMenu .contact1");
        const sectionContact = $("#contact1");
        const contactTop = $(sectionContact).offset().top - 100;
        const contactHeight = $(sectionContact).outerHeight();

        const sectionServicesNext = $("#servicesNext");
        const sectionServicesNextTop = $(sectionServicesNext).offset().top - 300;
        const sectionServicesNextHeigth = $(sectionServicesNext).outerHeight();

        if (scrollValue > sectionServicesNextTop + sectionServicesNextHeigth - windowHight - 800) {
            $(".boxs .box:nth-child(1), .boxs .box:nth-child(2), .boxs .box:nth-child(3), .boxs .box:nth-child(4), .boxs .box:nth-child(5), .boxs .box:nth-child(6)").addClass("active");
        }



        if (scrollValue > homeTop + homeHeigth - windowHight) {
            $(manuButtonHome).addClass("activeScroll");
            if (scrollValue > abautTop + abautHeigth - windowHight) {
                $(manuButtonHome).removeClass("activeScroll");
            }
        }

        if (scrollValue > abautTop + abautHeigth - windowHight - 400) {
            $(".img .box:nth-child(1), .img .box:nth-child(2), .img .box:nth-child(3), .img .box:nth-child(4)").addClass("active");
        }



        if (scrollValue > abautTop + abautHeigth - windowHight) {
            $(menuButtonAbaut).addClass("activeScroll");


            if (scrollValue > servicesTop) {
                $(menuButtonAbaut).removeClass("activeScroll");
            }
        }

        if (scrollValue < abautTop + abautHeigth - windowHight) {
            $(menuButtonAbaut).removeClass("activeScroll");
        }



        if (scrollValue > servicesTop + servicesHeight - windowHight) {
            $(menuButtonServices).addClass("activeScroll");
            if (scrollValue > portolioTop) {
                $(menuButtonServices).removeClass("activeScroll");
            }

        }
        if (scrollValue < servicesTop + servicesHeight - windowHight) {
            $(menuButtonServices).removeClass("activeScroll");
        }

        if (scrollValue > portolioTop + portfolioHeight - windowHight - 500) {
            $(".portfolio .container").addClass("active");
        }

        if (scrollValue > portolioTop + portfolioHeight - windowHight) {
            $(menuButtonPortfolio).addClass("activeScroll");
            if (scrollValue > teamTop) {
                $(menuButtonPortfolio).removeClass("activeScroll");
            }
        }
        if (scrollValue < portolioTop + portfolioHeight - windowHight) {
            $(menuButtonPortfolio).removeClass("activeScroll");
        }


        if (scrollValue > teamTop + teamHeight - windowHight) {
            $(menuButtonTeam).addClass("activeScroll");
            if (scrollValue > cenyTop) {
                $(menuButtonTeam).removeClass("activeScroll");
            }
        }
        if (scrollValue < teamTop + teamHeight - windowHight) {
            $(menuButtonTeam).removeClass("activeScroll");
        }

        if (scrollValue > cenyTop + cenyHeight - windowHight) {
            $(menuButtonCeny).addClass("activeScroll");
            if (scrollValue > blogTop) {
                $(menuButtonCeny).removeClass("activeScroll");
            }
        }
        if (scrollValue < cenyTop + cenyHeight - windowHight - 1500) {
            $(menuButtonCeny).removeClass("activeScroll");
        }

        if (scrollValue > blogTop + blogHeight - windowHight) {
            $(menuButtonBlog).addClass("activeScroll");
            if (scrollValue > contactTop) {
                $(menuButtonBlog).removeClass("activeScroll");
            }
        }
        if (scrollValue < blogTop + blogHeight - windowHight) {
            $(menuButtonBlog).removeClass("activeScroll");
        }

        if (scrollValue > contactTop + contactHeight - windowHight) {
            $("#contact1").addClass("active");
        }
        if (scrollValue > contactTop + contactHeight - windowHight) {
            $(menuButtonContact).addClass("activeScroll");
            // if (scrollValue > contactTop) {
            //     $(menuButtonBlog).removeClass("activeScroll");
            // }
        }
        if (scrollValue < contactTop + contactHeight - windowHight) {
            $(menuButtonContact).removeClass("activeScroll");
        }
    })
}

function hideMenuBars() {
    $(".fa-arrow-circle-right").on("click", function () {
        $(".menuList").removeClass("active");
    })
}
















//odliczanie w statystykach//






// let x = document.getElementById("price01");
// if (x.interHTML === "12,99 zł") {
//     x.innerHTML = "19,00";
// } else {
//     x.innerHTML = "12,99";
// }















// $(".buttons .span2").on("click", function () {
//     $(".team .wrapper").removeClass("active");
//     $(".buttons .span2").addClass("active");
//     $(".buttons .span1").removeClass("active");


// })