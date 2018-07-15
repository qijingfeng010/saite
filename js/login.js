var login=(function(){
  

	return{
		init(){
           this.username();
		},
		username(){
			$('.username').on('blur',function(){
				var usernameVal=$('.username').val();
				var reg=/^[a-zA-Z0-9_-]{1,16}$/;
				if(reg.test(usernameVal)){
					$('.tishi1').css('display','none')
					return true;
				}else{
					$('.tishi1').css('display','block')
				}
			})
            
            //密码验证
            $('.password').on('blur',function(){
				var passwordVal=$('.password').val();
				var reg=/^[0-9a-zA-Z_-]{1,17}$/;
				if(reg.test(passwordVal)){
					$('.tishi2').css('display','none')

					return true;
				}else{
					$('.tishi2').css('display','block')
				}
			})
            
            //随机数
            $('.random').on('click',function(){
				var str='';
				for(var i=0;i<4;i++){
					 str += parseInt(Math.random()*10)                     
				}
				$('.random').html(str);
			})
			$('.code').on('blur',function(){
				if($('.code').val()==$('.random').html()){
					$('.tishi3').css('display','none')
					return true;
				}else{
					$('.tishi3').css('display','block')
				}
			})

			//点击按钮
             $('.tijiao').on('click',function(){
				if($('.username') && $('.code') && $('.password')){
					location.href='../php/login.php';
				
				}else{
					location.href='../html/login.html';					
				}
			})	
		}
	}
})()


login.init();