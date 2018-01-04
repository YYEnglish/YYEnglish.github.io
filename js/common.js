$(function(){
    // Currency
    $('#f11>li').click(function(){
        $('#f11>li').eq(0).children('a').html($(this).children('a').html())
    })
    // Currency
    $('.Submenu>ol').mouseover(function(){
        $('.Submenus').show();
    
    })
    $('.Submenu>ol').mouseout(function(){
        $('.Submenus').hide();
    })
    // Submenus_list
    $('.Submenus_list>li').eq(2).nextAll().css('borderTop','1px solid #ccc')
    var numbers = $('#numbers').html();
    for(var i=0;i<11;i++){
        $('.Submenus>ol>li').eq(0).clone(true).appendTo('.Submenus>ol');
        numbers++;
        $('#numbers').html(numbers);
    }
    $('.Submenus>ol>li:even').css('backgroundColor','#eee');
    $('.Submenu>ol>li').mouseover(function(){
        $('.Submenus>ol>li').hide();
        $('.Submenus>ol>li').eq($(this).index()).show();
    })
    // Submenus_list

    $('.Sign_In_MT').click(function () {
        $('#sign_in').fadeIn(500);
    })
    $('.sign_in_bg').click(function () {
        $('#sign_in').fadeOut(500);
    })
    $('#closs_motai').click(function () {
        $('#sign_in').fadeOut(500);
    })
    $('.loging_in_denglu').click(function(){
        if($('.sign_accountNumber').val() != 'admin'||$('.sign_password').val() != '123456'||$('#SSI').prop('checked')!=true){
            $('.sign_warn').show();
        }else{
            $('.sign_warn').hide();
        }
    })

    // 商品列表模态框
    $('.shares_link').click(function(){
        $('.motaikang').fadeIn(500);
        $('.shares_linkContent').fadeIn(500);
    })
    $('.motai_bg').click(function(){
        $('.shares_linkContent').fadeOut(500);
        $('.motaikang').fadeOut(500);
    })
    $('.shares_linkCloss>a').click(function(){
        $('.shares_linkContent').fadeOut(500);
        $('.motaikang').fadeOut(500);
    })
    // 加入购物车
    $('.Shares_addCart').click(function(){
        $('.motaikang').fadeIn(500);
        $('.Shares_addCartContent').fadeIn(500);
    })
    $('.motai_bg').click(function(){
        $('.Shares_addCartContent').fadeOut(500);
        $('.motaikang').fadeOut(500);
    })
    // $('.SCCCloss>a').click(function(){
    //     $('.Shares_addCartContent').fadeOut(500);
    //     $('.motaikang').fadeOut(500);
    // })
    // 加入购物车
    // 商品列表模态框


})
