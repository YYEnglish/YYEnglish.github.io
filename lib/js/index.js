$(function () {
    //屏幕的高度
    var sh = $(window).height();

    $(".shoppingCar").fullpage({
        sectionsColor: ["#f9dd67", "#84a2d4", "#ef674d", "#ffeedd", "#cf4759", "#84d9ed", "#8ac060", "#97dff0"],
        navigation: true,
        // anchorIndex: 锚链接的索引数， index当前第几屏， 从1开始
        afterLoad: function (anchorIndex, index) {
            //把所有屏的js添加的动画全部清掉
            $(".section img, .section div").attr("style", "");

            // 给当前屏，添加animation的类
            //先把其它屏的动画清空
            $(".section").removeClass("animation");
            $(".section").eq(index - 1).addClass("animation");

            //如果是第二屏
            if (index == 2) {
                //jquery的动画实在太爽了，只需要给它指定要变化的属性的终值
                //{"margin-left": -111}动画的参数， 就属性的变化的终值
                //"easeOutBack" 动画效果， 回弹
                //1500， 1500毫秒，动画执行时长
                $(".search01").animate({ "margin-left": -111 }, 1500, "easeOutBack", function () {
                    //回调函数， 就是动画执行完成之后要做的事件
                    //左边的搜索框隐藏起来
                    $(this).hide();
                    $(".search02").show();

                    //search02稍微停顿了一个
                    setTimeout(function () {
                        //中间的搜索框往右上角移动的效果
                        $(".search02").animate({ "width": 155, "bottom": 450, "margin-left": 120 }, 1000);
                    }, 500);
                });
            }

            //第三屏是纯用css来实现的
            if (index == 4) {
                setTimeout(function () {
                    //小车抖动加速向右行驶
                    $(".section4 .car").animate({ "margin-left": 685 }, 2000, "easeInElastic");
                    //沙发抖动加速向右和小车一起移动
                    $(".section4 .sofa").animate({ "margin-left": 850 }, 2000, "easeInElastic", function () {
                        $(".section4 .keyboard").show();
                        //fadeIn改的是display的属性
                        $(".section4 .address").fadeIn();
                        $(".section4 .address").show().animate({ "opacity": 1 }, 500);
                    });
                }, 500);
            }

            //第六屏
            if (index == 6) {
                //所有的动画延迟一秒执行
                setTimeout(function () {
                    //小盒子先从左边移到中间 1s
                    $(".section6 .box").animate({ "margin-left": -85 }, 1000, function () {
                        // 沙发从上面掉下来 2s
                        $(".section6 .sofa").animate({ "bottom": 385 }, 1000, function () {
                            //沙发掉到小盒子里之后，稍微停顿了0.5秒，然后一起往下落
                            setTimeout(function () {
                                //两个一起往下掉, 背景开始滚动3.5
                                $(".section6 .box, .section6 .sofa").animate({ "bottom": 20 }, 1000, function () {
                                    //开始开车（背景开始移动）
                                    $(".section6 .street").animate({ "left": -1000 }, 3000, function () {
                                        //停车， 男人下车
                                        //停车后（3s以后，背景滚动结速以后， 男人就显示出来， 并且变大）7.5s
                                        //给一秒钟的时间停车
                                        setTimeout(function () {
                                            //男人变大
                                            $(".section6 .man").animate({ "opacity": 1, "height": 300 }, 1000, function () {
                                                $(this).animate({ "right": -200 }, 2000, function () {
                                                    //弹出请收货
                                                    $(".section6 .getpackage").animate({ "opacity": 1 }, 500, function () {
                                                        //开门
                                                        $(".section6 .door").animate({ "opacity": 1 }, 500, function () {
                                                            //女人出现并且移动
                                                            //这一步使使css实现
                                                        });
                                                    });
                                                });
                                            });
                                        }, 1000);
                                    });
                                });


                                //过了一会，文字开始显示
                                setTimeout(function () {
                                    //地址文字的动画显示
                                    $(".section6 .address").animate({ "opacity": 1 });
                                }, 1000);

                            }, 500);
                        })
                    });
                }, 1000);

            }

            //第八屏
            if (index == 8) {
                $(".section8").mousemove(function (event) {
                    //拿到鼠标的位置
                    var left = event.pageX;
                    var y = event.pageY;


                    //如果bottom的值太大了， 手就够不着了
                    var bottom = sh - y > 449 ? 0 : sh - y - 449;

                    console.log(bottom);
                    //修改手的css值
                    $(".section8 .hand").css({ "left": left, "bottom": bottom });
                });

                $(".section8 .again").click(function () {
                    //滚动到第一屏
                    $.fn.fullpage.moveTo(1);
                });
            }
        }
    });
});

