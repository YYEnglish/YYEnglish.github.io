
$(function () {
    showtime();
    function showtime(){
        var dates = new Date();
        var hours = dates.getHours();
        var min = dates.getMinutes();
        var sec = dates.getSeconds();
        if(hours<10){
            hours = "0"+hours;
        }
        if(min<10){
            min = "0"+min;
        }
        if(sec<10){
            sec = "0"+sec;
        }
        var str = hours+':'+min+":"+sec;
            $('.dates_clock1').html(str);
    }
    setInterval(showtime,1000);
    $('#title_nav_ul>li').hover(function () {
        $('#title_nav_ul>li').removeClass('title_nav_ul_li_hover');
        $(this).addClass('title_nav_ul_li_hover');
    })
    $('#title_nav_ul>li').click(function () {
        $('#title_nav_ul>li').removeClass('title_nav_bg');
        $(this).addClass('title_nav_bg');
    })
    for( var i=0;i<8;i++){
        $('.HIUL_list>li').eq(0).clone(true).appendTo('.HIUL_list');
    }

    $('.DUP>a').click(function(){
        $(this).siblings().removeClass('DUPAc');
        $(this).addClass('DUPAc');
    })
})
