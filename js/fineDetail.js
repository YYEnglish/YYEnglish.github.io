
  var box = document.getElementById("box");
  var smallBox = document.getElementById("smallBox");
  var mask = document.getElementById("mask");
  var bigBox = document.getElementById("bigBox");
  var bigImg = document.getElementById("bigImg");
    smallBox.onmousemove = function (e) {
    e = e || window.event;
    mask.style.display = "block";
    bigBox.style.display = "block";
    var x = getPage(e).pageX - box.offsetLeft;
    var y = getPage(e).pageY - box.offsetTop;
    x -= mask.offsetWidth/2;
    y -= mask.offsetHeight/2;
    x = x < 0? 0 : x;
    y = y < 0? 0 : y;
    x = x > 225 ? 225 :x; 
    y = y > 225 ? 225 :y;
    mask.style.left = x + "px";
    mask.style.top = y + "px";
    bigImg.style.left = -bigImg.offsetWidth/smallBox.offsetWidth * x + "px";
    bigImg.style.top  = -bigImg.offsetHeight/smallBox.offsetHeight * y + "px";
  }
  smallBox.onmouseout = function () {
    mask.style.display = "none";
    bigBox.style.display = "none";
  }
  function getPage(e){
      e = e.event || window.event;
      return{
          pageX:e.pafeX || e.clientX + document.documentElement.scrollLeft,
          pageY:e.pageY || e.clientY + document.documentElement.scrollTop
      }
  }
    // 评论
    var dates = new Date();
    var mou = dates.getMonth()+1;
    var date = dates.getDate();
    var years = dates.getFullYear();
    var today = years+","+mou+","+date;
    var JD = document.getElementById('joinDate');
    JD.innerHTML = today;
    var ReplyToday = document.getElementById('ReplyToday');
    var ReplyTodaytime = new Date();
    ReplyToday.innerText = ReplyTodaytime;
    // 评论
$(function(){
    // 放大镜轮播图
    (function(){
        var boxs = document.getElementById('boxs');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var imgs = document.getElementById('imgs');
    var lis = imgs.children;
    var arr = document.getElementById('arr');
    var lisleft = lis[0].offsetWidth+14;
    var imgsOW =0;
    imgsOW = lisleft * lis.length;
    imgs.style.width = imgsOW+'px';

    var picCount = 0;
    right.onclick = function(){
      if (picCount < lis.length - 3) {
        picCount++;
        var target = -picCount * lisleft;
        animate(imgs, target);
      }
    }
    left.onclick = function(){
      if (picCount > 0) {
        picCount--;
        var target = -picCount * lisleft;
        animate(imgs, target);
      }
    }
    function animate(tag,target){
      clearInterval(tag.timer);
      tag.timer = setInterval(function(){
        var leader = tag.offsetLeft;
        var step = 9;
        step = leader > target? -step:step;
        if(Math.abs(leader - target)>Math.abs(step)){
          leader = leader + step
          tag.style.left = leader+'px';
        }else{
          tag.style.left = target+'px';
          clearInterval(tag.timer);
        }
      },20)
    }
      })();
      $(function(){
        $('#imgs>li>img').mousemove(function(){
          $('#smallBox>img').attr('src',$(this).attr('src'));
          $('#bigImg').attr('src',$(this).attr('src'));
        })
      })
    // 放大镜轮播图
    var offsetX = 0;
    $('#LB_left').click(function(){
        offsetX -=112;
        if(-offsetX>($('#LB_lunbo>li').width()+20)*3+10){
            return ;
        }
        var num = offsetX+"px";
        
        $('#LB_lunbo').animate({
             'left': num
        }, 500)
    })

    $('.size_border').click(function(){
        $('.size_border').removeClass('actives');
        $(this).addClass('actives');
    })
    // 评分
    $('#stars>ol>li').click(function () {
        $(this).prevAll().css('color','orange').html('★');
        $(this).css('color','orange').html('★');
        $(this).nextAll().css('color','#000').html('☆');
    })
    // 评分
    var flag = true;
  $('#otherReply').click(function(){
    if(flag){
        $('.replyUL').show();
        flag = false;
    }else{
        $('.replyUL').hide();
        flag = true;
    }
  })
})