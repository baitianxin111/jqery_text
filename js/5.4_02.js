$(function(){
	//相当于一个删选器，可接参数，可接函数，filter（）
	$('li').filter(function(index){
		return index%3 == 2;
	}).css('background','red');
	// .has() 方法会用其子集创建一个新的jQuery对象。
//	提供的选择器会一一测试原先那些匹配元素的后代，
//含有匹配后代的元素会保留在结果中。
	//检测里面是否有has（）
	$('li').has('ul').css('background','green');
	//is方法
	$('div').one('click',function(){
		if ($(this).is(":first-child")) {
			$('p').text('it is the first div');
			
		} else if($(this).is(" .blue ,.red")){
			$('p').text('it is the blue or red');
		}
		else if($(this).is(" :contains('Jack')")){
			$('p').text('it is the Jack');
		}
		
		else {
			$('p') .html('is nothing <em>special</em>')
		}
		$('p').hide().slideDown('slow');
		$(this).css({'border-style':'insert',cursor:'default'});
	})
	//slice（）方法  。slice（2，3）.方法。slice(-3,-4).方法，  顺序从结尾开始数
	//树遍历
	
	
});