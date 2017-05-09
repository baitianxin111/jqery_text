$(function(){
	var reg1=/^1[0-9]\d{9}$/;  <!-- 匹配手机 -->
	var reg2=/^\w+@\w+\.[a-z]{2,4}$/;  <!-- 匹配邮箱 -->
	var reg3=/\w{6,8}/; <!-- 匹配密码 -->
		$('.name').on('input',function(){
			 
			var username=$('.name').val();
			$.post('from.php',{name:username},function(data){
				if (reg1.test(username)||reg2.test(username)) {
					 
					$('.name1').text('用户名正确');
					
				} else{
					$('.name1').text('非法用户');
				}
			});
			
            });
		$('.pwd').on('input',function(){
			var userpwd=$('.pwd').val();
			 
			$.post('from.php',{pwd:userpwd},function(data){
				if (reg3.test(userpwd) ) {
					 
					$('.pwd1').text('密码正确');
					
				} else{
					$('.pwd1').text('该用户不存在');
				}
			});
			});
	 
		});
		$('.btn').on('click',function(){

			alert('登录成功！')
			});