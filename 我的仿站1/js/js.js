$(function(){
	
	function init(){
		windowW();
		banner('.banner');
		inputfocus('.seacth');
		changebg('.product1');
		changebg('.product2');
		changebg('.product3');
		changebg('.shili');
		lunbo('section.shili .con1');
		lunbo('section.shili .con2');
		lunbo('section.shili .con3');
		
	}
	
	function windowW(){//设置窗口最小宽度为1200px;
		var w = $(window).width();
		if(w<1200){
			w = 1200;
		}else{
			w = w;
		}
		
		$('html,body').css({width:w+'px'});
	}
	
	function banner(ele){
		var bannerw  = $(window).width();
		var lilen =$(ele).find('ul').find('li').size();
		//banner图片根据窗口的宽度自适应
		$(ele).find('ul').find('img').css({width:bannerw+'px'});
		//创建角标列表
		var ol = $('<ol></ol>');
		$(ele).append(ol);
		var olli = ''
		for(var i=0;i<lilen;i++){
			olli += '<li></li>'
		}
		$('ol').append(olli);
		$(ele).find('ol').find('li').eq(0).addClass('cur');
		//克隆最一张图LI到最后
		$(ele).find('ul').append($(ele).find('ul').find('li').eq(0).clone(true));
		//创建左右点击箭头
		$(ele).append($('<span class="left">&lt;</span><span class="right">&gt;</span>'))
		//点击角标切换对应的图片
		$(ele).find('ol').find('li').on('click',function(){
			var index = $(this).index();
			num = index;
			$(this).addClass('cur').siblings().removeClass('cur');
			$(ele).find('ul').stop().animate({left:-bannerw*index},500)
		})
		//自动播放
		var num = 0;
		var timer = null;
		function autoplay(){
			num ++;
			if(num>$(ele).find('ul li').size()-1){
				$(ele).find('ul').css({left:0})
				num = 1;
			}
			if(num==$(ele).find('ul li').size()-1){
				$(ele).find('ol li').eq(0).addClass('cur').siblings().removeClass('cur');
			}
			$(ele).find('ol').find('li').eq(num).addClass('cur').siblings().removeClass('cur');
			$(ele).find('ul').stop().animate({left:-bannerw*num},500)
		};
		function prevplay(){
			num --;
			if(num < 0){
				$(ele).find('ul').css({left:-($(ele).find('ul li').size()-1)*bannerw})//不能直接用NUM
				num = $(ele).find('ul li').size()-2;
			}
			$(ele).find('ol').find('li').eq(num).addClass('cur').siblings().removeClass('cur');
			$(ele).find('ul').stop().animate({left:-bannerw*num},500)
		};
		timer = setInterval(autoplay,3000)	
		//点击向左向右进行图片切换
		$(ele).find('span.left').click(function(){
			clearInterval(timer);
			prevplay()
		});
		$(ele).find('span.right').click(function(){
			clearInterval(timer);
			autoplay();
		});
		//鼠标移动banner上。显示向左向右的按钮
		$(ele).mouseover(function(){
			$(this).find('span').show();
		}).mouseout(function(){
			$(this).find('span').hide();
		});
		//鼠标移动到OL SAPN上动画停止；
		$(ele).find('span').mouseover(function(){
			clearInterval(timer)
		}).mouseout(function(){
			clearInterval(timer);
			timer = setInterval(autoplay,3000);
		})
		$(ele).find('ol').mouseover(function(){
			clearInterval(timer)
		}).mouseout(function(){
			clearInterval(timer);
			timer = setInterval(autoplay,3000);
		})
	}
	//搜索框效果(
	function inputfocus(ele){
		$(ele).find('input.txt').focus(function(){
			var val = $(this).val();
			if(val == '请输入关键词搜索'){
				val = '';
			}else{
				val = $(this).val();
			}
			$(this).val(val);
		});
		$(ele).find('input.txt').blur(function(){
			var val = $(this).val();
			if(val == ''){
				val ='请输入关键词搜索';
			}else{
				val = $(this).val();
			}
			$(this).val(val);
		});
		//点击提交验证内容是否为空
		$(ele).find('input.but').click(function(){
			var val = $(ele).find('input.txt').val();
			if(val == '' || val == '请输入关键词搜索'){
				alert('你没有输入内容！')
				return false;
			}
		})
	}
	//背景切换
	function changebg(ele){
		$(ele).find('ul.tab li').mouseover(function(){
			var index = $(this).index();
			$(this).addClass('cur').siblings().removeClass('cur');
			$(ele).find('div.con').eq(index).addClass('cur').siblings().removeClass('cur');
		})
	}
	//多图片轮播
	function lunbo(ele){
		//把图片LI复制一组，放到后面
		$(ele).find('ul').append($(ele).find('li').clone());
		var $liwidth = $(ele).find('li').outerWidth();
		var $lisize = $(ele).find('li').size();
		var timer = null;
		speed = 0;
		function autoplay(){
			speed += 1;
			if(speed>= ($liwidth*$lisize)/2){
				speed = 0;
			}
			$(ele).find('ul').css({marginLeft:-speed});
		}
		timer = setInterval(autoplay,50)
		//鼠标移动到上面轮播停止，移开轮播继续
		$(ele).mouseover(function(){
			clearInterval(timer);
		}).mouseout(function(){
			clearInterval(timer);
			timer = setInterval(autoplay,50);
		})
		
	}
	
	
	init();
	
	$(window).resize(function(){
		windowW();
	})
})


