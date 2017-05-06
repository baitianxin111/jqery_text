$(function(){
	 
		$('li').on('mouseover',function(){

			$('.con').eq($(this).index()).addClass('div1');
			$(this).css('border-bottom','1px solid red');
			 
			 
		}) ;
		$('li:hover').mousemove(function(){
			alert(111);
		})
//		$('li').on('mouseout',function(){
//			$(".con").eq($(this).index()).removeClass('div1');
//			$(this).css('border-bottom','1px solid #ccc ');
//			
//		})
// 
});