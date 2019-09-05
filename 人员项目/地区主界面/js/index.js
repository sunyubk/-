/**
 * Created by 孙宇 on 2017/5/29.
 */
$(document).ready(function(){
    $(".link a").mouseover(function(){
        $(this).css("border-bottom","1px solid white").css("color","white");
    });
    $(".link a").mouseout(function(){
        $(this).css("border-bottom","0px").css("color","#c9aa71");
    });
    //$(".test").click(function(){
    //    alert(1);
    //    $(".motai").attr("style","display:block");
    //});


    //点击登录按钮
    $("#dologin").click(function(){
        $(".motai").css("display","block");
        $(".loginDiv").css("display","block");
    });
    //点击登录框中  确认登录按钮
    $(".ok").click(function(){
        $(".motai").css("display","none");
        $(".loginDiv").css("display","none");
        $("#logined").css("display","block");
        $("#unlogin").css("display","none");
    });

    //点击注销
    $("#dologout").click(function(){
        $("#logined").css("display","none");
        $("#unlogin").css("display","block");
    });

    //鼠标悬浮到集锦上，弹出动画工坊部分
    $("#jijin").hover(function(){
        $(".jjTan").stop().slideDown(300);
        $(".jjTan").mouseover(function(){
            $(".rejjTan").show();
            $(".rejjTan").mouseout(function(){
                $(".rejjTan a").mouseout(function () {
                    $(".rejjTan").stop().slideUp(300);
                });
            });

        });
    },function (){
        setTimeout(function(){
            $(".jjTan").stop().slideUp(300);
        },300);
    });
});