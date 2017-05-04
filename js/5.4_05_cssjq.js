$(function(){
	var div1=$('<div></div>');
//	$('div').css('width')
	$('body').append(div1);
	
	$('div').css({'width':'200px','height':'100px','padding':'5px','border':'3px solid #ccc' ,'margin':'10px'});
	var obtn=$('<button>click me</button>');
	$('body').append(obtn);
	$('button').on('click',function(){
//		$('div').addClass('div2');
		$('div').toggleClass('div1');
		
	})
});