$(function(){

	function init(){//总的执行函数
		//页面中的调用，传入参数为相对应的总盒子的id;
		lunbo($('#wrap1'));
		lunbo($('#wrap2'));
	}
	
	function lunbo(ele){//轮播代码
		//把所有LI克隆并放到最后面
		var $this = $(ele)
		var ali = $this.find('li').clone();
		$this.find('ul').append(ali);
		//计算并设置UL的宽度
		aliwidth = $this.find('li').outerWidth();
		alisize = $this.find('li').size();
		var ulwidth = aliwidth*alisize;
		$this.find('ul').css({width:ulwidth+'px'})
		//动画开始
		var timer = null;//定时器
		var speed = 0;//速度
		// 动画代码
		function autoplay(){
			speed -=3;
			if(speed >= ulwidth/2){
				$this.find('ul').css({left:0});
				speed = 3;
			}
			$this.find('ul').css({left:speed})
		}
		function prevplay(){
			speed += 3;
			if(speed >= 0){
				$this.find('ul').css({left:-ulwidth/2});
				speed = -ulwidth/2;
			}
			$this.find('ul').css({left:speed})
		}
		timer = setInterval(autoplay,30)
		//鼠标移动到大盒子动画停止，移开动画继续
		$this.find('div').mouseover(function(){
			clearInterval(timer);
		})
		$this.find('div').mouseout(function(){
			clearInterval(timer);
			timer = setInterval(autoplay,30)
		})
		//点击左右按钮进行方向切换
		$this.find('span.left').click(function(){
			clearInterval(timer);
			timer = setInterval(autoplay,30)
		});
		$this.find('span.right').click(function(){
			clearInterval(timer);
			timer = setInterval(prevplay,30)
		});
	}




init();
})