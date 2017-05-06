$(function(){
	$('li').on('mouseover',function(){

			$('.con').eq($(this).index()).addClass('div1').siblings().removeClass('div1');
			$(this).css('border-bottom','1px solid red');
			$('#lessimg').hover(function(){
			$('#bigdiv').css({'display':'block'});			
		}).mouseout(function(){
			$('#bigdiv').css({'display':'none'});
		});
		 
	}) ;
	 
	 
		 
		
})