$(function(){
	function init(){
		cur($('nav ul li'));
		cur($('.main aside ul li'));
		cur($('.main .list ul li'));
		banner($('.banner'));
		search($('.txt'));
		lunbo($('.hot ul'));
		lunbo($('.proshow .pro ul'));
		product($('.product'));
		imgbt($('.main .show .nr'))
	}
	init();
	
	
	function cur(ele){
		$(ele).hover(function(){
			$(this).addClass('cur').siblings().removeClass('cur');
		})
	}
	
	function banner(ele){
		var liw = $(ele).find($('ul>li')).outerWidth();
		//克隆一个LI放到LI最后
		$(ele).find('ul').append($(ele).find('ul>li').eq(0).clone());
		//创建角标
		var tab = '';
		for(var i=0;i<$(ele).find($('ul>li')).size()-1;i++){
			tab += '<li></li>';
		}
		$(ele).append($('<ol class="tab">'+tab+'</ol>'))
		$(ele).find($('ol.tab li')).eq(0).addClass('cur');
		var lilen = $(ele).find($('ul>li')).size();
		var timer1 = null;
		$(ele).find($('ol.tab li')).mouseover(function(){
			clearTimeout(timer1)
				_this = $(this);
			timer1 = setTimeout(function(){
				var index = _this.index();
				num = index;
				_this.addClass('cur').siblings().removeClass('cur');
				$(ele).find($('ul')).stop().animate({left:-liw*index-80},500).animate({left:-liw*index},500)
			},50)	
		}).mouseout(function(){
			clearTimeout(timer1)
		})
		//自动播放
		var num = 0;
		var timer = null;
		function autoplay(){
			num ++;
			if(num>lilen-1){
				num = 1;
				$(ele).find($('ul')).css({left:0})
			}
			if(num == lilen-1){
				$(ele).find($('ol.tab li')).eq(0).addClass('cur').siblings().removeClass('cur');
			}
			$(ele).find($('ol.tab li')).eq(num).addClass('cur').siblings().removeClass('cur');
			$(ele).find($('ul')).stop().animate({left:-liw*num-80},500).animate({left:-liw*num},500);
		};
		timer = setInterval(autoplay,2500);
		//鼠标移动banner上停止播放，离开继续播放
		$(ele).mouseover(function(){
			clearInterval(timer);
		}).mouseout(function(){
			clearInterval(timer);
			timer = setInterval(autoplay,2500);
		})
		
	}
	
	function search(ele){
		$(ele).focus(function(){
			if($(this).val() =='请输入关键词'){
				$(this).val('')
			}
		})
		$(ele).blur(function(){
			if($(this).val() == ''){
				$(this).val('请输入关键词')
			}
	})
	}
	
	function lunbo(ele){
		var speed = 2;
		var timer = null;
		$(ele).append($(ele).find('li').clone());
		var liw = $(ele).find('li').eq(0).outerWidth();
		var lisize = $(ele).find('li').size();
		function autoplay(){
			speed += 2;
			if(speed >= (liw*lisize)/2){
				$(ele).css({left:0})
				speed = 0;
			}
			$(ele).css({left:-speed})
		}
		timer = setInterval(autoplay,30)
		$(ele).mouseover(function(){
			clearInterval(timer)
		}).mouseout(function(){
			timer = setInterval(autoplay,30)
		})
	}
	
	function product(ele){
		$(ele).find('ol li').mouseover(function(){
			var index = $(this).index();
			$(this).addClass('cur').siblings().removeClass('cur');
			$(ele).find('.pro>div').eq(index).addClass('cur').siblings().removeClass('cur');
		})
	}
	
	function imgbt(ele){
		var img = $(ele).find('img');
		var bt = $(ele).find('img').attr('alt')
		img.after($('<div class="bt">'+bt+'</div>'))	
	}
	
	
	
})

	