$(function(){
	var k=0;
	$('.div2').click(function(){
		
		 if (k%4==0) {
		 	$(this).css('background','orange');
		 	
		 } else if(k%4==1){
		 	$(this).css('background','purple');
		 	
		 }
		 else if(k%4==2){
		 	$(this).css('background','pink');
		 	
		 }
		 else  {
		 	$(this).css('background','skyblue');
		 	
		 }
		 k++;
	}
	
	);
	
});