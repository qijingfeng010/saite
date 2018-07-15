// 显示/隐藏侧面导航栏

var Nav=(function(){
   var _h5=$('.nav').find('h5');
   var titleL=$('.nav').find('.titleL');
    return{
        init(){
           this.mouseenter();
           this.mouseleave();
        },
        //移入显示
        mouseenter(){
            var _this=this;
            _h5.on('mouseenter',function(){
            titleL.css('display','block');
            _this.mouseover();
            _this.mouseout();
          }) 
        },
        //移出隐藏
        mouseleave(){
            titleL.on('mouseleave',function(){
                titleL.css('display','none')
            })
        },
        //鼠标滑过每个li
        mouseover(){
            titleL.on('mouseover','li',function(event){
                 var target=$(event.target);
                    target.css('background','green') 
                               
            })
        },
       mouseout(){
          titleL.on('mouseout','li',function(event){
                 var target=$(event.target);
                     target.css('background','rgba(0,0,0,0.5)')               
            })
       }
    }
})()

Nav.init();

//淡入淡出轮播图
var Banner=(function(){
    var ul=$('#banner>ul');
    var btn=$('#banner>.btn>a')
    var timer=null;
    var index=0;
	return{
		init(){
			this.autoPlay();
			this.onmouseenter();
			this.onmouseleave();
			this.btnOver()
			
		},
		/*点击按钮切换图片*/
		btnOver(){
           var _this=this;
           btn.on('mouseenter',function(){
           	index=$(this).index();
           	_this.toImg();
           	_this.autoPlay();
           })
		},
		/*鼠标移入停止轮播*/
		onmouseenter(){
           ul.on('mouseenter',function(){
           	  clearInterval(timer)
           })
		},
		/*鼠标移出自动轮播*/
		onmouseleave(){
			var _this=this;
			ul.on('mouseleave',function(){
           	  _this.autoPlay();
           })
		},

		/*运动原理*/
		toImg(){
			ul.children('li').eq(index).fadeIn().siblings().fadeOut();
			btn.eq(index).addClass('current').siblings().removeClass('current');
		},

		/*自动轮播*/
		autoPlay(){
			var _this=this;
			clearInterval(timer)
			timer=setInterval(function(){
				index++;
				if(index==ul.children('li').length){
					index=0;
				}
				_this.toImg()
			},2000)
		}
	}
})()

Banner.init()

/*异步代码同步操作*/
var p1=new Promise(function(resolve,reject){
  $.post('json/saite.json',function(json){
      var data=json.floor;
      resolve(data)
  },"json")
})



p1.then(function(data){

  /*楼层遍历数据*/
  var str1='';
  var str2='';
  var str3='';
  var str4='';
  for(var i=0;i<data.length;i++){
    // 头部<a href="##"></a>
    str1 =`<h5><span><img src=${data[i][0].img} >
                  </span>
                ${data[i][0].title}
            </h5>`
      //左侧图片
        str2 =`<div class="item1" >
                     <img src=${data[i][1].img} data-id=${data[i][1].id}>
                 </div>`
        //右侧图片
        str3 =`<li data-id=${data[i][2].id}>
                 <img src=${data[i][2].img}>
                 <p> ${data[i][2].title}</p>
                 <span>￥${data[i][2].price}</span>
             </li>
             <li data-id=${data[i][3].id}>
                 <img src=${data[i][3].img}>
                 <p> ${data[i][3].title}</p>
                 <span>￥${data[i][3].price}</span>
             </li>
             <li data-id=${data[i][4].id}>
                 <img src=${data[i][4].img}>
                 <p> ${data[i][4].title}</p>
                 <span>￥${data[i][4].price}</span>
             </li>
             <li data-id=${data[i][5].id}>
                 <img src=${data[i][5].img}>
                 <p> ${data[i][5].title}</p>
                 <span>￥${data[i][5].price}</span>
             </li>
             <li data-id=${data[i][6].id}>
                 <img src=${data[i][6].img}>
                 <p> ${data[i][6].title}</p>
                 <span>￥${data[i][6].price}</span>
             </li>
             <li data-id=${data[i][7].id}>
                 <img src=${data[i][7].img}>
                 <p> ${data[i][7].title}</p>
                 <span>￥${data[i][7].price}</span>
             </li>
             <li data-id=${data[i][8].id}>
                 <img src=${data[i][8].img}>
                 <p> ${data[i][8].title}</p>
                 <span>￥${data[i][8].price}</span>
             </li>
             <li data-id=${data[i][9].id}>
                 <img src=${data[i][9].img}>
                 <p> ${data[i][9].title}</p>
                 <span>￥${data[i][9].price}</span>
             </li>`
        //字符串拼接
     str4=`<div class="floor1">
              ${str1}
              <div class="content">
                    ${str2}
                    <ul class="list">
                      ${str3}
                    </ul>
               </div>
            </div>`
         $('.floor').append(str4)
  }

  /*点击跳转至详情页*/
  var Skip=(function(){
    
   
    return {
       init(){
          this.click();
       },
       click(){
          var _this=this;
          $('.list').children('li').on('click',['img','p','span'],function(){   
             this.id = this.getAttribute('data-id');
              location.href="html/detail.html?id="+this.id
              console.log(this.id)
        })
        // $('.floor1').on('click','img',function(){
        //     this.id=this.getAttribute('data-id');
        //     location.href="html/detail.html?id="+this.id
        //     console.log(this.id)
        // })

        }

    }
  })()
  
  Skip.init();

})


//回到顶部
backTop=(function(){	
	return {
		init(){
			this.scroll();
			this.closeClick();
			this.topClick();
			this.autoClose()
		},
		scroll(){
			window.onscroll=function(){
				var _top=document.documentElement.scrollTop || document.body.scrollTop;
				if(_top>600){
					$('.backTop').find('span').css('display','block')					
				}
				if(_top<600){
					$('.backTop').find('span').css('display','none')	
				}			
			}
			
			
		},
		autoClose(){
			setInterval(function(){
				$('.backTop').css('display','none')
			},10000)
		},
		closeClick(){
			$('.backTop').find('.close').on('click',function(){
				$('.backTop').css('display','none')
			})
		},
		topClick(){
			$('.backTop').find('span').on('click',function(){
				var timer=setInterval(function(){
					document.body.scrollTop -= 80;
					if(document.body.scrollTop<=0){
						//条件要写小于等于0;不能写小于0;否则会卡在顶部
						document.body.scrollTop=0;
						clearInterval(timer);
					}
			
				},30)
				
			})
		}
	}
})()

backTop.init();
	
var _time=(function(){
	
	
	return {
		init(){
			this.countTime();
		},
		countTime(){
             
             function zone(n){
             	if(n<10){
             		n='0'+n
             	}else{
             		n=''+n
             	}
             	return n;
             }
			setInterval(function(){
				
		    var iNow=new Date();
			var iNow=iNow.getTime();
			var d=new Date('2018-09-25');
			var time=d.getTime()-iNow;
			var day=parseInt((time/(60*60*1000*24)))
			var h= parseInt((time%(1000*60*60*24))/(1000*60*60));
			var m=parseInt((time%(1000*60*60*24))%(1000*60*60)/(1000*60));
			var s=parseInt((time%(1000*60*60*24))%(1000*60*60)%(1000*60)/1000);            
			$('._time').html(zone(day)+'天'+zone(h)+'小时'+zone(m)+'分'+zone(s)+'秒')
				},1000)		
		}

	}
})()
	
 _time.init();  
   


