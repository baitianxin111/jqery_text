$(function(){
	$('#btn1').on('click',function(){
//		$('#p1').remove();//包括自己以下的元素都删除
//		$('#p1').children().remove();//只删除不同于自己p标签类的元素，
 
 //removeChild为js中的方法，需要转换，用的方式是数组节点访问的方式
	$('#p1').get(0).removeChild(document.getElementById('p1').childNodes[1]);
	})
});