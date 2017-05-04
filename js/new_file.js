$(function(){
//	$('li:first').css('color','red');
//	$('li').eq(3).css('background','red');
//	$('li'):gt(3).css('background','red');
//	$('li:even').css('color','yellow');
	$('button').click(function(){
//		$('p').toggle();
//		$('p').slideUp();
//		$('p').slideToggle();//向上滑动消失
//		$('p').fadeIn('fast',0.3);
//		$('p').fadeOut(4000);//效果隐藏
//动画效果
//		$('p').animate({width:'70%',opacity:0.4,fontSize:'3em'});
		//执行隐藏后，显示后面的函数效果，弹出
//		$("p").hide(1000,function(){
//		alert("The paragraph is now hidden");
//		});
//进行的html操作
		$('p').html('this is a p' ).append('我自带追加的内容').prepend('预置的').after('after的').before('before的');
//进行的css操作		
		$('p').css({'background':'blue','font-size':'200%'});
		
	})
});