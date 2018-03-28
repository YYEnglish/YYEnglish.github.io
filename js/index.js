$(function(){
    $('.grade_stars>li').click(function(){
        $(this).prevAll().css('color','orange').html('★');
        $(this).css('color','orange').html('★');
        $(this).nextAll().css('color','#000').html('☆');
    })
    for (var i=0; i<7;i++){
        $('#HS>li').eq(0).clone(true).appendTo('#HS');
        $('#BD>li').eq(0).clone(true).appendTo('#BD');
        $('#NA>li').eq(0).clone(true).appendTo('#NA');
    }
})