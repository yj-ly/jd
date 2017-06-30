/**
 * Created by hxsd on 2017/5/6.
 */

;$(function () {
    //控制big-pic和picList的图片切换
    $(".pic-list .pic").mouseenter(function () {
        $(".pic-list .pic").removeClass("ac");
        $(this).addClass("ac");
        var index = $(this).parent().index();
        console.log(index);
        $(".big-pic .box1 img").attr("src", "images/bbs" + index + ".jpg");
        $(".big-pic .box2 img").attr("src", "images/bbsb" + index + ".jpg");
    });

    //控制big-pic的放大镜
    $(".big-pic .box1").mousemove(function (ev) {
        var l = ev.pageX - $(this).offset().left - $('#zoom').width() / 2;
        var t = ev.pageY - $(this).offset().top - $('#zoom').height() / 2;

        if(l < 0){
            l = 0;
        }
        if(t < 0){
            t = 0;
        }
        var max_l = $(this).width() - $('#zoom').width();
        var max_t = $(this).height() - $('#zoom').height();

        if(l > max_l){
            l = max_l;
        }
        if(t > max_t){
            t = max_t;
        }
        $('#zoom, .box2').show();
        $('#zoom').css({"top": t, "left": l});
        $('.box2 img').css({"top": -t * (16 / 7), "left": -l * (16 / 7)});
    });

    $(".big-pic .box1").mouseleave(function () {
        $('#zoom, .box2').hide();
    });

    //控制配送地址下拉菜单
    $(".address-total-tab li").click(function () {
        var index = $(this).index();
        $(this).addClass("ac").siblings().removeClass("ac");
        $("#tab-add-list .tabCon").eq(index).addClass("show").siblings().removeClass("show");
    });

    //控制选择size的切换
    $(".size-list li").click(function () {
        $(this).addClass("ac").siblings().removeClass("ac");
    });

    //控制购物车数量
    $("#addBtn").click(function () {
        var num = $("#shop_text").val();
        num++;
        $("#shop_text").val(num);
        $(this).blur();
    });
    $("#subBtn").click(function () {
        var num = $("#shop_text").val();
        num--;
        if (num < 1) {
            num = 1;
        }
        $("#shop_text").val(num);
        $(this).blur();
    });

    //控制推荐tab的切换
    $("#tuijian li").mouseenter(function () {
        var index = $(this).index();
        $(this).addClass("change").siblings().removeClass("change");
        $(".two .tabList").eq(index).addClass("show").siblings().removeClass("show");
    })
});