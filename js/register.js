//点击生成随机认证码
var register=(function(){
	var num = $('.register').find('.num');
	var userInp=$('.user').find('input');
	var inptips=$('.user').find('.inptips');
	var numinp=$('.pwd').find('input');
	var numtips=$('.pwd').find('.numtips');
	var btn= $('.register').find('button');

	return{
		init(){
			this.randomNum();
			this.phoneNum();
			this.code();
			this.btn();
		},
        randomNum(){
                num.on('click',function(){
					var str='';
					for(var i=0;i<4;i++){		
				        str+=parseInt(Math.random()*10)
					}
					num.html(str);	
			    })
        },
        phoneNum(){
        	userInp.on('blur',function(){
				var userVal=userInp.val();
			    var reg=/^13|15|17|18|19\d{9}$/
				if(reg.test(userVal)){
			       inptips.css('display','none')
				}else{
					inptips.css('display','block')
				}
			})
        },
        code(){
        	numinp.on('blur',function(){  
			    var numVal=numinp.val();
			    var val =num.html();
			    if(val==numVal){
			    	numtips.css('display','none')
			    }else{
			    	numtips.css('display','block')
			    }
			})
        },
        btn(){
        	btn.on('click',function(){
        		var userVal=userInp.val();
			    var reg=/^13|15|17|18|19\d{9}$/;
			    var numVal=numinp.val();
			    var val =num.html();
				if(reg.test(userVal)&&val==numVal){
					location.href="../html/register2.html";	
				}else{
					alert("输入错误")	
					location.href="../html/register.html";	
				}
			})
        }

		
	}
})()

register.init()



/*
//认证手机号码
//onpropertychange
var phoneNum=(function(){
	var userInp=$('.user').find('input');
	var inptips=$('.user').find('.inptips');
	var numinp=$('.pwd').find('input');
	var numtips=$('.pwd').find('.numtips');

	return{
		init(){

		}
	}
})()


userInp.on('blur',function(){
	var userVal=userInp.val();
    var reg=/^13|15|17|18|19\d{9}$/
	if(!reg.test(userVal)){
       inptips.css('display','block')
	}
})

//认证认证码是否输入正确
    
numinp.on('blur',function(){  
	
    var numVal=numinp.val();
    var val =num.val();
    console.log(val)
    // console.log(numVal)
    if(val!=numVal){
    	numtips.css('display','block')
    }
})


//点击按钮提交
var btn= $('.register').find('button');
btn.on('click',function(){
	var userVal=userInp.val();
    var reg1=/^13|15|17|18|19\d{9}$/
    var numVal=numinp.val();
    var reg2=/^[0-9]{4}$/  
	if(reg1.test(userVal) && reg2.test(numVal)){
		location.href="../html/register1.html"		
	}else{
		alert("输入错误")		
	}
})

 */


