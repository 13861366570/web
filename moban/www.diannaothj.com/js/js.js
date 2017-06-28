$(function(){
			function banner(ele){
				var ele = $(ele);
				var li = ele.find('ul.pic li');
				$('<ol></ol>').appendTo(ele.find('div.hd'))
				var ollist ='';
				li.each(function(i){
					ollist += '<li>'+(i+1)+'</li>';
				})
				ele.find('ol').append(ollist);
				ele.find('ol li').first().addClass('on')
			}
			
			banner($('.banner'))
			jQuery(".banner").slide({mainCell:"ul.pic",effect:"leftLoop",autoPlay:true});	
		})
	