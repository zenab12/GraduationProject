$(document).ready(function() {

    $('a.Menu').on('click', function() {

        $('a.Menu').find('i').toggleClass('fa-times');
        $(this).parent().prev().toggleClass('hidden')
    });

    $('li.services a').on('click', function() {


        $(this).parent().find($('.servicesBox')).toggleClass('hidden');
    });


    if ($('body').width() <= 768) {

        $('.navLinks > li a').on('click', function() {

            $(this).parent().addClass('active').siblings().removeClass('active');
            $(this).parent().addClass('active').siblings().find($('.servicesBox li')).removeClass('active').parent().addClass('hidden')




        })
    }


    $('.Sign .signLinks li').on('click', function() {

        $(this).removeClass('active').siblings().addClass('active');

        $("." + $(this).data('class')).removeClass('hiden').siblings().addClass('hiden');
    });


    $('input.checkbox').on('click', function() {

        $(this).css('color', '#592A20')
    })



});