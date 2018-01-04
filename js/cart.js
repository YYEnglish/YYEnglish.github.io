/**
 * Created by yy on 2017/12/12.
 */
$(function(){
    for ( var i=0;i<6;i++){
        $('.cart-History_list>li').eq(0).clone(true).appendTo('.cart-History_list');
    }
})