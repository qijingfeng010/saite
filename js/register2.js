var register=(function(){
    var phoneNum=$('.phoneNumInp');
    var username=$('.usernameInp');
    var referrer=$('.referrerInp');
    var compellation=$('.compellationInp');
    var password=$('.passwordInp');
    var confirmPwd=$('.confirmPwdIpn');
    var tijiao=$('.tijiao')

	return{
		init(){
             this.phoneNum();
             this.username();
             this.referrer();
             this.compellation();
             this.password();
             this.confirmPwd();
             this.pushData();
		},
		//手机号码验证
		phoneNum(){			
			phoneNum.on('blur',function(){
				var reg=/^13|15|17|18|19\d{9}$/;				
			    var phoneVal=phoneNum.val();
				if(reg.test(phoneVal)){
					$('.phoneNumR').css('display',"none")
					
				}else{
					$('.phoneNumR').css('display',"block")
				}
				return true;
			})	
					
		},
		//用户名验证
		username(){
			username.on('blur',function(){
				var reg=/^[a-zA-Z0-9_-]{1,16}$/;
				var usernameVal=username.val();
				if(reg.test(usernameVal)){
					$('.usernameR').css('display',"none")
				}else{
					$('.usernameR').css('display',"block")
				}
				return true;
			})
			
		},
		//推荐人验证
		referrer(){
			referrer.on('blur',function(){
				var reg=/^[a-zA-Z0-9_-]{1,16}$/;
				var referrerVal=referrer.val();
				if(reg.test(referrerVal)){
					$('.referrerR').css('display',"none")
				}else{
					$('.referrerR').css('display',"block")
				}
				return true;
			})
			
		},
		//名字验证
		compellation(){
			compellation.on('blur',function(){
				var reg=/^[a-zA-Z0-9_-]{1,16}$/;
				var compellationVal=compellation.val();
				if(reg.test(compellationVal)){
					$('.compellationR').css('display',"none")
				}else{
					$('.compellationR').css('display',"block")
				}
				return true;
			})
			
		},
		//密码验证
		password(){
			password.on('blur',function(){
                var reg=/^[a-zA-Z0-9]\w{2,17}$/;
                var passwordVal=password.val();
                if(reg.test(passwordVal)){
                	$('.passwordR').css('display',"none")
				}else{
					$('.passwordR').css('display',"block")
                }
                return true;
			})
			
		},
		//验证密码
		confirmPwd(){
			confirmPwd.on('blur',function(){
				var confirmPwdVal=confirmPwd.val();
				var passwordVal=password.val();
				if(confirmPwdVal==passwordVal){
					$('.confirmPwdR').css('display',"none")
				}else{
					$('.confirmPwdR').css('display',"block")
				}
              return true;
			})
			
		},
		//提交
		pushData(){
			
			tijiao.on('click',function(){
				var reg1=/^13|15|17|18|19\d{9}$/;				
				var phoneVal=phoneNum.val();

				var reg2=/^[a-zA-Z0-9_-]{1,16}$/;
				var usernameVal=username.val();

				var reg3=/^[a-zA-Z0-9_-]{1,16}$/;
				var referrerVal=referrer.val();

				var reg4=/^[a-zA-Z0-9_-]{1,16}$/;
				var compellationVal=compellation.val();

				var reg5=/^[a-zA-Z0-9]\w{5,17}$/;
	            var passwordVal=password.val();
	            var confirmPwdVal=confirmPwd.val();
				var passwordVal=password.val();
				if(reg1.test(phoneVal)&&reg2.test(usernameVal)&&reg3.test(referrerVal)&&reg4.test(compellationVal)&&reg5.test(passwordVal)&&confirmPwdVal==passwordVal){
		           	
		           	
		        }else{
		           	console.log(2)
		        }
			})
          
		}

	}
})()

register.init();
