$(function(){
    $('.Orders_bars>li').click(function(){
        $(this).siblings().children('a').css('color','#ccc');
        $(this).children('a').css('color','#000');
    })
})