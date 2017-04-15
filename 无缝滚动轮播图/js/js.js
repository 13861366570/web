;
(function($){
$.fn.lunbo=function(options){
var defaults = {
//各种参数，各种属性
 width:400,//容器宽度
 hieght:200//窗器高度
};
var options = $.extend(defaults,options);
this.each(function(){
//实现功能的代码
 //复制所有图片到LI之后
 	_this = $(this);
	var oli = $(this).find('li').clone();
	$(this).find('ul').append(oli);
	$(this).css({width:options.width+'px'})
	$(this).css({height:options.height+'px'})
	//开启定时器自动轮播
	var timer = null;
	speed = 3;
	var ulwidth = $(this).find('li').outerWidth()*$(this).find('li').size();
	$(this).find('ul').css({width:ulwidth+'px'})
	//轮播代码
	function autoplay(){
		speed+=3;
		if(speed >= ulwidth/2){
			_this.find('ul').css({left:0});
			speed = 3;
		}
		_this.find('ul').css({left:-speed})
	}
	function prevplay(){
		speed-=3;
		if(speed <= 0){
			_this.find('ul').css({left:-ulwidth/2});
			speed = ulwidth/2;
		}
		_this.find('ul').css({left:-speed})
	}
	timer = setInterval(autoplay,30)
	//鼠标移动到大盒子上停止轮播，移出继续轮播
	_this.find('box').mouseover(function(){
		clearInterval(timer)
	})
	_this.find('box').mouseout(function(){
		clearInterval(timer)
		timer = setInterval(autoplay,30)
	})
	//点击向左向右图片轮播切换
	_this.find('.left').click(function(){
		clearInterval(timer)
		timer = setInterval(prevplay,30)
	})
	_this.find('.right').click(function(){
		clearInterval(timer)
		timer = setInterval(autoplay,30)
	})
});

return this;
};

})(jQuery);




$(function(){
	$('#wrap1').lunbo();
	$('#wrap2').trigger('lunbo');

})