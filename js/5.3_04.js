$(function(){
	$('#btn').bind('click',event1);
	$('#btn').bind('click',event2);
	$('#btn').off('click',event2);
	function event1(){
		console.log('event1');
	}
	function event2(){
		console.log('event2');
	}
	$('.div3').click(function(event){
		console.log(event);
		
	});
	$('p').click(function(event){
		console.log(event);
		event.stopPropagation();
//	event.stopImmediatePropagation();
		
	})
	
});
