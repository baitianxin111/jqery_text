$(function(){
	 
		$('li').on('mouseover',function(){
//			alert(111);
			$('.con').eq($(this).index()).addClass('div1');
			$(this).css('border-bottom','1px solid red');
			 
			 
		}) 
		$('li').on('mouseout',function(){
			$(".con").eq($(this).index()).removeClass('div1');
			$(this).css('border-bottom','1px solid #ccc ');
			
		})
 
});