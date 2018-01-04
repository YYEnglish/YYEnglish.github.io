$(function(){
    $('.WGI').hover(function(){
        $('.lorems').show();
    },function(){
        $('.lorems').hide();
    })
    // 模态框
    $('.apply_Coupon').click(function(){
        $('.motai_bg').show();
    })
    $('.motai_bg_s').click(function(){
        $('.motai_bg').hide();
    })
    $('.motai_closs_s').click(function(){
        $('.motai_bg').hide();
    })
    $('.motai_true>button').click(function(){
        if($('.moatai_input>input').val() != '123'){
            $('.moatai_input>div').show();
        }else{
            $('.moatai_input>div').hide();
        }
    })
    // 模态框
})