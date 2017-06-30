/**
 * Created by Administrator on 2017/5/8.
 */
window.onload = function () {
    //侧导航栏交互
    var oNav = document.getElementsByClassName("left-nav")[0];
    var aItem = oNav.getElementsByClassName("c-item");
    var oMenu = oNav.getElementsByClassName("n-menu")[0];
    var aLi = oMenu.getElementsByTagName("li");

    for (var i = 0; i < aLi.length; i++) {
        aLi[i].index = i;

        aLi[i].onmouseenter = function () {
            for (var j = 0; j < aItem.length; j++) {
                aItem[j].style.display = "none";
            }
            aItem[this.index].style.display = "block";
        }
    }

    oNav.onmouseleave = function () {
        for (var i = 0; i <aItem.length; i++) {
            aItem[i].style.display = "none";
        }
    }

    //轮播图切换
    var oBanner = document.getElementsByClassName("banner")[0];
    var aLi2 = oBanner.getElementsByTagName("li");
    var aPic = oBanner.getElementsByTagName("a");
    var timer = setInterval(function () {
        num++;
        if (num == 6) {
            num = 0;
        }
        for (var i = 0; i < aLi2.length; i++) {
            aLi2[i].className = "";
            aPic[i].className = "";
        }
        aLi2[num].className = "ac";
        aPic[num].className = "active";

    }, 3000);
    var num = 0;

    for (var i = 0; i < aLi2.length; i++) {
        aLi2[i].index = i;
        aLi2[i].onmouseenter = function () {
            for (var j = 0; j < aLi2.length; j++) {
                aLi2[j].className = "";
            }
            for (var k = 0; k < aPic.length; k++) {
                aPic[k].className = "";
            }
            this.className = "ac";
            aPic[this.index].className = "active";

            num = this.index;
        }
    }

    oBanner.onmouseenter = function () {
        clearInterval(timer);
    }

    oBanner.onmouseleave = function () {
        timer = setInterval(function () {
            num++;
            if (num == 6) {
                num = 0;
            }
            for (var i = 0; i < aLi2.length; i++) {
                aLi2[i].className = "";
                aPic[i].className = "";
            }
            aLi2[num].className = "ac";
            aPic[num].className = "active";

        }, 3000);
    }
}

$(function () {
    //搜索提示
    $( "#autocomplete" ).autocomplete({
        source: [ "c++", "java", "php", "coldfusion", "javascript", "asp", "ruby", "c", "c#", "python"]
    });

    //右侧选项卡
    $(".bianjie .change").mouseenter(function () {
        var _this = $(this);
        if (!$(".bianjie").hasClass("cont")) {
            var index = _this.index();
            $(".bianjie .change a").css("padding-top", 0).children("i").css("height", 0);
            $(".bianjie .change span").css("border-top-color", "transparent");
            _this.find("span").css("border-top-color", "#c81623");
            $(".j_tab").css("top", 37);
            $(".j_tab .item").eq(index).show().siblings(".item").hide();
            return;
        }
        _this.mouseleave(function () {
            $(".bianjie").removeClass("cont");
        })
    });

    $(".j_close").click(function () {
        $(".bianjie .change a").css("padding-top", 10).children("i").css("height", 24);
        $(".bianjie .change span").css("border-top-color", "transparent");
        $(".j_tab").css("top", 213);
        $(".j_tab .item").hide();
        $(".bianjie").addClass("cont");
    });

    //跳转楼层
    //console.log($(".main1").offset().top)
    $(window).scroll(function () {

        if ($(window).scrollTop() >= 1600) {
            $(".LocationFloorList").fadeIn();
        } else {
            $(".LocationFloorList").fadeOut();
        }

        $(".LocationFloorList li").each(function () {
            var _this = $(this);
            var index = _this.index();

            if ($(window).scrollTop() + $(window).height() / 3 >= $(".main .box").eq(index).offset().top) {
                _this.addClass("ac").siblings().removeClass("ac");
            }
        })

    });

    $(".LocationFloorList li").each(function () {
        var _this = $(this);
        _this.click(function () {
            var index = _this.index();
            var target_h = $(".main .box").eq(index).offset().top;
            $("html, body").animate({"scrollTop":target_h}, 1000, function () {
                _this.addClass("ac").siblings().removeClass("ac");
            });
        });
    });

    //回到顶部
    $(".back").click(function () {
        $("html, body").animate({"scrollTop": 0}, 1000);
    });
})