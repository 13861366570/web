
$(function(){

    $(".jqfocus").each(function(){
        var aphtml='<div class="bg"></div>';
        aphtml+='<div class="f_btns">';
        aphtml+='<h2></h2>';
        aphtml+='<div class="btn"></div>';
        aphtml+='</div>';
        aphtml+='<div class="prev"></div>';
        aphtml+='<div class="next"></div>';
        var id=0;
        var opphtml="";
        var autoplay=true;
        var speed=5000;
        var $this=$(this); 
        $this.append(aphtml);
        var arrl=$this.find(".prev");
        var arrr=$this.find(".next");
        var li = $this.find("li");
        var count=li.length;
        for (var i=0;i<count; i++){
            opphtml+='<span></span>';
        }
        var opphtml2='<div class="clear"></div>';

        $this.find(".btn").html(opphtml+opphtml2);
        var opp=$this.find(".btn span");
        var opt=$this.find("h2");

        if (autoplay){
            var play=setInterval(auto,speed);
        }
        function auto(){
            if(id<count-1){
                id++;
                showpic(id);
            }else if (id==count-1){
                id=0;
                showpic(id);
            }

        }
        $this.hover(function(){
            arrl.fadeIn(400);
            arrr.fadeIn(400);
            if (autoplay){
                clearInterval(play);
            }

        },function(){
            arrl.fadeOut(400);
            arrr.fadeOut(400);

            if (autoplay){
                play=setInterval(auto,speed)
            }

        })
        function showpic(i){
            li.eq(i).fadeIn(400).siblings().hide();
            oppic(i);
            opt.html(li.eq(i).find("img").attr("alt"));

            2            }
        function oppic(i){
            opp.eq(i).addClass("cur").siblings().removeClass("cur");
        }

        showpic(id);
        arrl.on("click",function(){
            if(id>0){
                id--;
                showpic(id);
            }else if (id==0){
                id=count-1;
                showpic(id);
            }
        })
        arrr.on("click",function(){
            if(id<count-1){
                id++;
                showpic(id);
            }else if (id==count-1){
                id=0;
                showpic(id);
            }
//                console.log(id);
        })
        opp.on("click",function(){
            id=$(this).index();
            oppic(id);
            showpic(id);
        })

    })

})