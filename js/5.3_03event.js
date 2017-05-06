$(function(){
	var colorarr=['green','purple','pink','yellow','blue','orange','black','burlywood','blueviolet'];
	
		$('span').each(function(i){
			$(this).css({'background':colorarr[i]});
		})
		$('li').mouseover(function(){
			$(this).children("span").stop().animate({'top':30});
		}).mouseout(function(){
			$(this).children("span").stop().animate({'top':0});
		})    
		
});