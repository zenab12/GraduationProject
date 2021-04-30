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



    // create slider of books on mobile screen 

    let rows = $('.books').children().length - 1;

    console.log(rows);


    $('.recentlyStories .fa-chevron-left').on('click', function() {

        if ($('.books .row').eq(0).hasClass('active') === true) {

            console.log($('.books .row').eq(0).hasClass('active'));
            $('.books .row').eq(`${rows}`).addClass('active').siblings().removeClass('active');
            $('.indicators li').eq(`${rows}`).addClass('active').siblings().removeClass('active');


        } else {
            $('.books .row.active').prev().addClass('active').siblings().removeClass('active');
            $('.indicators li.active').prev().addClass('active').siblings().removeClass('active');


        };


    });



    $('.recentlyStories .fa-chevron-right').on('click', function() {


        if ($('.books .row').eq(`${rows}`).hasClass('active') === true) {

            console.log($('.books .row').eq(`${rows}`).hasClass('active'));
            $('.books .row').eq(0).addClass('active').siblings().removeClass('active');
            $('.indicators li').eq(0).addClass('active').siblings().removeClass('active');


        } else {
            $('.books .row.active').next().addClass('active').siblings().removeClass('active');
            $('.indicators li.active').next().addClass('active').siblings().removeClass('active');



        };


    });



    for (let index = 0; index < $('.books').children().length; index++) {


        let row = $('.books').children()[index];
        $($('.books').children()[index]).addClass(`${index}`);

        console.log(row);

        // create li based on row numbers 

        let li = $(`<li data-row=${index}></li>`);
        $('.indicators').append(li);
        $('.indicators li').css('width', `${($('.indicators').width()) / (($('.books').children().length))}`)
        $('.indicators li:first-of-type').addClass('active');

    }

    $('.indicators li').on('click', function() {


        $(this).addClass('active').siblings().removeClass('active');
        $("." + $(this).data('row')).addClass('active').siblings().removeClass('active');



    });


    $('.questionContainer p.question i').on('click', function() {

        $(this).parent().siblings().slideToggle();
        $(this).parent().parent().siblings().find($('p.Answer')).slideUp();
        $(this).parent().parent().siblings().find($('i')).removeClass('fa-sort-up');
        $(this).toggleClass('fa-sort-up');
        $(this).parent().toggleClass('border');
        $(this).parent().parent().siblings().find($('p.question')).removeClass('border');



    });


});