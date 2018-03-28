$(function(){
    $('.menu>a').click(function(){
        console.log($(this).index());
        $(this).siblings().removeClass('menuAc');
        $(this).addClass('menuAc');
    })
})