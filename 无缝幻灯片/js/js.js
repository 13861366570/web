$(function(){
	function init(){
		banner($('#banner1'));
		banner($('#banner2'))
	}

function banner(ele){
	var $this = $(ele);
	var liwidth = $this.find('ul li').outerWidth();
	var lilen = $this.find('ul li').size();//获取添加前的LI数量
	$this.find('ul li').eq(0).clone().appendTo($this.find('ul'));
	//点击角标来切换对应的图片
	$this.find('ol li').click(function(){
		var index = $(this).index();
		num = index;
		$(this).addClass('current').siblings().removeClass('current');
		$this.find('ul').stop().animate({left:-liwidth*index},500)
	})
	//自动循环播放
	var num = 0;
	var timer = null;
	//轮播代码
	function autoplay(){
		num++;
		if(num > lilen){
			num=1;
			$this.find('ul').css({left:0})
		}
		if(num == 5){
			$this.find('ol li').eq(0).addClass('current').siblings().removeClass('current');
		}
		$this.find('ol li').eq(num).addClass('current').siblings().removeClass('current');
		$this.find('ul').stop().animate({left:-liwidth*num},500)
	}
	function prevplay(){
		num--;
		if(num < 0){
			num=lilen-1;
			$this.find('ul').css({left:-liwidth*(lilen)})
		}
		// if(num == 5){
		// 	$this.find('ol li').eq(0).addClass('current').siblings().removeClass('current');
		// }
		$this.find('ol li').eq(num).addClass('current').siblings().removeClass('current');
		$this.find('ul').stop().animate({left:-liwidth*num},500)
	}
	timer  = setInterval(autoplay,2000)
	//点击向左向右图片切换
	$this.find('span.left').click(function(){
		clearInterval(timer);
		prevplay();
	});
	$this.find('span.right').click(function(){
		clearInterval(timer);
		autoplay();
	});

	//鼠标移动到大盒子上显示左右按钮
	$this.mouseover(function(){
		$this.find('span').css({display:'block'})
		clearInterval(timer);
	}).mouseout(function(){
		$this.find('span').css({display:'none'})
		clearInterval(timer);
		timer  = setInterval(autoplay,2000);
	});


}


	init();//执行代码
})