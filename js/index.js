/**
 * Created by 孙宇 on 2017/5/29.
 */
$(document).ready(function(){

    //导航栏中部a标签鼠标浮动变色，并去增加下划线
    $(".link a").hover(function(){
        $(this).css("border-bottom","1px solid #c9aa71").css("color","white");
    },function(){
        $(this).css("border-bottom","0px").css("color","#c9aa71");
    });
    $("#aTanSuo").unbind();

    //点击登录按钮
    $("#dologin").click(function(){
        $(".motai").css("display","block");
        $(".loginDiv").css("display","block");
        //$(".motai").attr("style","display:block");
        //$(".loginDiv").attr("style","display:block");
    });
    //点击登录框中  确认登录按钮
    $(".ok").click(function(){
        $(".motai").css("display","none");
        $(".loginDiv").css("display","none");
        $("#unlogin").css("display","none");
        $("#logined").css("display","block");
        //$(".motai").attr("style","display:none");
        //$(".loginDiv").attr("style","display:none");
        //$("#unlogin").attr("style","display:none");
        //$("#logined").attr("style","display:block");
    });

    //点击注销
    $("#dologout").click(function(){
        $("#logined").css("display","none");
        $("#unlogin").css("display","block");
        //$("#logined").attr("style","display:none");
        //$("#unlogin").attr("style","display:block");
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

    //忘忧花园
    $(".wangyou2").hover(function(){

        $(".liWY2").stop().slideDown(200);
    },function(){
        $(".liWY2").stop().slideUp(200);
    });

    //猎
    $(".lie1").hover(function(){
        $(".liL2").stop().slideDown(200);
    },function(){
        $(".liL2").stop().slideUp(200);
    });

    //艾都华
    $(".aiduhua1").hover(function(){
        $(".liADH2").stop().slideDown(200);
    },function(){
        $(".liADH2").stop().slideUp(200);
    });

    //为了德玛西亚
    $(".wldmxy1").hover(function(){
        $(".liWLDMXY2").stop().slideDown(200);
    },function(){
        $(".liWLDMXY2").stop().slideUp(200);
    });
    //猴
    $(".hou1").hover(function(){
        $(".liH2").stop().slideDown(200);
    },function(){
        $(".liH2").stop().slideUp(200);
    });










    //德玛西亚之力
    $(".garen2").hover(function(){

        $(".liGaRen2").stop().slideDown(200);
    },function(){
        $(".liGaRen2").stop().slideUp(200);
    });

    //最后的光辉
    $(".zhdgh1").hover(function(){
        $(".lizhdgh2").stop().slideDown(200);
    },function(){
        $(".lizhdgh2").stop().slideUp(200);
    });

    //霞与洛
    $(".xiayuluo1").hover(function(){
        $(".lixiayuluo2").stop().slideDown(200);
    },function(){
        $(".lixiayuluo2").stop().slideUp(200);
    });

    //影流之主
    $(".yingliuzhizhu1").hover(function(){
        $(".liyingliuzhizhu2").stop().slideDown(200);
    },function(){
        $(".liyingliuzhizhu2").stop().slideUp(200);
    });
    //噩梦工程
    $(".emenggongcheng1").hover(function(){
        $(".liemenggongcheng2").stop().slideDown(200);
    },function(){
        $(".liemenggongcheng2").stop().slideUp(200);
    });





    //亮点英雄

    var count=1;
    //右侧按钮点击
    $(".right").click(function(){

        if(count==1){
            $(".liangdianyingxiong2").stop().fadeOut(1000);
            $(".nuokesasi2").stop().fadeIn(1000);
        };
        if(count==2){
            $(".nuokesasi2").stop().fadeOut(1000);
            $(".guanghui2").stop().fadeIn(1000);
        };
        if(count==3){
            $(".guanghui2").stop().fadeOut(1000);
            $(".eyunxiaojie2").stop().fadeIn(1000);

        };
        if(count==4){
            $(".eyunxiaojie2").stop().fadeOut(1000);
            $(".liangdianyingxiong2").stop().fadeIn(1000);
            count=0;

        };
         return count++;
    });


    //左侧按钮点击
    $(".left").click(function(){
        if(count==1){
            $(".liangdianyingxiong2").stop().fadeOut(1000);
            $(".eyunxiaojie2").stop().fadeIn(1000);
        };
        if(count==2){
            $(".eyunxiaojie2").stop().fadeOut(1000);
            $(".guanghui2").stop().fadeIn(1000);
        };
        if(count==3){
            $(".guanghui2").stop().fadeOut(1000);
            $(".nuokesasi2").stop().fadeIn(1000);

        };
        if(count==4){
            $(".nuokesasi2").stop().fadeOut(1000);
            $(".liangdianyingxiong2").stop().fadeIn(1000);
            count=0;

        };

        return count++;
    });




    //亮点英雄

    var countYX=1;
    //右侧按钮点击
    $(".diquright").click(function(){

        if(countYX==1){
            $(".zuan2").stop().fadeOut(1000);
            $(".bierjiwote2").stop().fadeIn(1000);
        };
        if(countYX==2){
            $(".bierjiwote2").stop().fadeOut(1000);
            $(".demaxiya2").stop().fadeIn(1000);
        };
        if(countYX==3){
            $(".demaxiya2").stop().fadeOut(1000);
            $(".piertewofu2").stop().fadeIn(1000);

        };
        if(countYX==4){
            $(".piertewofu2").stop().fadeOut(1000);
            $(".zuan2").stop().fadeIn(1000);
            countYX=0;

        };
        return countYX++;
    });


    //左侧按钮点击
    $(".diquleft").click(function(){
        if(countYX==1){
            $(".zuan2").stop().fadeOut(1000);
            $(".piertewofu2").stop().fadeIn(1000);
        };
        if(countYX==2){
            $(".piertewofu2").stop().fadeOut(1000);
            $(".demaxiya2").stop().fadeIn(1000);
        };
        if(countYX==3){
            $(".demaxiya2").stop().fadeOut(1000);
            $(".bierjiwote2").stop().fadeIn(1000);

        };
        if(countYX==4){
            $(".bierjiwote2").stop().fadeOut(1000);
            $(".zuan2").stop().fadeIn(1000);
            countYX=0;

        };

        return countYX++;
    });







});





