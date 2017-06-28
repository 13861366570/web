        
$('#cxscroll_t').cxScroll({
	direction: 'top',
	speed: 800,
	time: 3000,
	plus: false,
	accel:1000,
	auto:false,
	minus: false
});
 
$(window).load(function(){
	$(".ItemList img").each(function(){
		var $imgH = $(this).outerHeight();
		var $imgW = $(this).outerWidth();
		var $divH = $(this).parent("span").height();
		if($imgW>$imgH){
			$(this).width("100%");
			var $imgH2 = $(this).outerHeight();
			$(this).css("margin-top",($divH-$imgH2)/2+"px")
			}
		else if($imgW<$imgH){
			$(this).height("100%");
			}
	})
});
 
$(function(){
	var W=0;
$(".da").click(function(){
					if(W<($(".ShowBox").height()-40) && $(".Door").html()!="")
					{
						W+=W*0.05;
						$(".Door").width(W);
						$(".DoorBorder").css("width",$(".Door").width());
						$(".DoorBorder").css("height",$(".Door").height());

					}
				})
			$(".xi").click(function(){
					if(W>100  && $(".Door").html()!="")
					{
					W-=W*0.05;
					$(".Door").width(W);
						$(".DoorBorder").css("width",$(".Door").width());
						$(".DoorBorder").css("height",$(".Door").height());
					}
				})
	
	$(".BgList li").click(function(){
		$(".DoorBg").html($(this).html());
		})
	
	$(".ItemList li").click(function(){
		$(".Door").html($(this).html());
		$(".Door").css("left",$(".ShowBox").offset().left+200);
		$(".Door").css("top",$(".ShowBox").offset().top+100);
		$(".Door").css("width",250);
		$(".DoorBorder").css("left",$(".Door").css("left"));
		$(".DoorBorder").css("top",$(".Door").css("top"));
		$(".DoorBorder").css("width",$(".Door").css("width"));
		$(".DoorBorder").css("height",$(".Door").css("height"));
				W=$(".Door").width();
			    H=$(".Door").height();

		})
	})

		$(".DoorBorder").mousedown( 
				function (event) {
					$('.DoorBorder').css("cursor","move")
					var isMove = true; 
					var abs_x = event.pageX - $('div.DoorBorder').offset().left; 
					var abs_y = event.pageY - $('div.DoorBorder').offset().top; 
					var minTop=$('.ShowBox').offset().top;
					var minLeft=$('.ShowBox').offset().left;
					var maxTop=$('.ShowBox').offset().top+$('.ShowBox').height()-$('div.DoorBorder').height();
					var maxLeft=$('.ShowBox').offset().left+$('.ShowBox').width()-$('div.DoorBorder').width();
					
					$(document).mousemove(function (event) { 
							if (isMove) { 
							var obj = $('div.DoorBorder'); 
							var door = $('div.Door'); 
								var Nleft=event.pageX - abs_x;
								var Ntop=event.pageY - abs_y;
							if(Nleft>minLeft && Nleft<maxLeft)
							{
							obj.css({'left':Nleft}); 
							door.css({'left':Nleft}); 
							}
							if(Ntop>minTop && Ntop<maxTop)
							{
							obj.css({'top':Ntop}); 
							door.css({'top':Ntop}); 
							}							
							} 
						}).mouseup( 
								function () { 
								$('.DoorBorder').css("cursor","default")
								isMove = false; 
								} 
							);
							
					}); 

