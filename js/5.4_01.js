$(function(){
	$('#p1').click(function(){
		console.log($('p').html());
		console.log($(this).text());
		$('button').on('click',function(){
			$('a').text('搜狐').attr('href','http://www.souhu.com');
		});		
	});
	 $('#btn').on('click',function(){
	 	console.log( $('input').val() );
	 	
	 })
	$('button').on('click',function(){
			$('#p1').text(function(i,context){
				return 'old:'+context+';   new world  '+i;
			});
	});
	$(function(){
		var k=0;
		$('#btn1').on('click',function(){
			k++;
			$('#pid').append('  this is the insert method '+k).after('after').before('before').prepend(' prepend  ');
		})
		
	});
	$(function(){
		$('#btn2').on('click',function(){
			$('#box').remove();
//			$('#box').empty();
			
		})
	});
	
});