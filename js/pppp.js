$(document).ready(function() {

    $('a.Menu').on('click', function() {

        $('a.Menu').find('i').toggleClass('fa-times');
        $(this).parent().prev().toggleClass('hidden')
    });

    $('li.services a').on('click', function() {


        $(this).parent().find($('.servicesBox')).toggleClass('hidden');
    });

    $('li.services .fa-caret-down').on('click', function() {


        $(this).parent().find($('.servicesBox')).toggleClass('hidden');
    });


    if ($('body').width() <= 768) {

        $('.navLinks > li a').on('click', function() {

            $(this).parent().addClass('active').siblings().removeClass('active');
            $(this).parent().addClass('active').siblings().find($('.servicesBox li')).removeClass('active').parent().addClass('hidden')



        })


        $('.navLinks > li .fa-caret-down').on('click', function() {

            $(this).parent().addClass('active').siblings().removeClass('active');
            $(this).parent().addClass('active').siblings().find($('.servicesBox li')).removeClass('active').parent().addClass('hidden')



        });
    }

    $('.Sign .signLinks li').on('click', function() {

        $($(this).data('class')).addClass('active').siblings().removeClass('active');

        $("." + $(this).data('class')).removeClass('hiden').siblings().addClass('hiden');



    });


    $(window).on('load', function() {

        if (window.location.href == "file:///C:/Users/user/MY-Github/GraduationProject/Sign.html") {

            window.location.href = "file:///C:/Users/user/MY-Github/GraduationProject/Sign.html#signin";
            $("#signin").removeClass('hiden').siblings().addClass('hiden');


        } else if (window.location.href == "file:///C:/Users/user/MY-Github/GraduationProject/Sign.html#signup") {

            window.location.href = "file:///C:/Users/user/MY-Github/GraduationProject/Sign.html#signup";
            $("#signup").removeClass('hiden').siblings().addClass('hiden');
        }

    });

    $('.Sign .signLinks li a').on('dblclick', function() {


        console.log(document.location.href)


    });


});