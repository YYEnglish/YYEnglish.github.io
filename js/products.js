$(function(){
    // 右侧导航
    // price
    $('.filter_navBar>li').eq(5).prevAll().click(function(){
        $(this).siblings().removeClass('fil_li');
        $(this).addClass('fil_li');
    })
    var filterPriceflag = null;
    $('#filterPrice').click(function(){
        $('.Price_r').addClass('Price_rTop');
        if(filterPriceflag == true){
            $('.Price_r').removeClass('Price_rBottom').addClass('Price_rTop');
            filterPriceflag = false;
        }else{
            $('.Price_r').removeClass('Price_rTop').addClass('Price_rBottom');
            filterPriceflag = true;
        }
    })
    $('.filter_navBar>li').eq(4).prevAll().click(function(){
        $('.Price_r').removeClass('Price_rBottom Price_rTop');
    })
    // price
    // scroll-date
    $('.scroll-dates>li').click(function(){
        $('.scrollDate').html($(this).children('a').html());
    })
    $('#scrollFenye_r').click(function(){
        for (var i=0;i<$('.scroll-dates>li').length;i++){
            if($('.scrollDate').html() == $('.scroll-dates>li').eq(i).children('a').html()){
                $('.scrollDate').html($('.scroll-dates>li').eq(i).prev().children('a').html());
                return;
            }
        }
    })
    $('#scrollFenye_l').click(function(){
        for (var i=0;i<$('.scroll-dates>li').length;i++){
            if($('.scrollDate').html() == $('.scroll-dates>li').eq(i).children('a').html()){
                $('.scrollDate').html($('.scroll-dates>li').eq(i).next().children('a').html());
                return;
            }
        }
    })
    // scroll-date

    // 右侧导航
    // prod_list
    $('.prod-list>ul>li').mouseover(function(){
        var num = $(this).index();
        $('.Shares').eq(num).stop().animate({
            'top':'335px',
            'opacity':'1'
        },300)
    })
    $('.prod-list>ul>li').mouseout(function(){
        var num = $(this).index();
        $('.Shares').eq(num).stop().animate({
            'top':'270px',
            'opacity':'0'
        },300)
    })

    for (var i=0; i<39;i++){
        $('.prod-list>ul>li').eq(0).clone(true).appendTo('.prod-list>ul');
    }
    for(var i=0; i<4;i++){
        $('.Special_list>li').eq(0).clone(true).appendTo('.Special_list')
    }
    // prod_list
// 评分
    $('#stars>ul>li').click(function () {
        $(this).prevAll().css('color','orange').html('★');
        $(this).css('color','orange').html('★');
        $(this).nextAll().css('color','#000').html('☆');
    })
// 评分
// 右侧底部分页
// 右侧底部分页
// 登录模块
// 登录模块
    $('#pageFenye>a').click(function(){
        $(this).addClass('actives').siblings().removeClass('actives');
    })
// fenye
})
