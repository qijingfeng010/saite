
/*获取id*/
var id = location.search.split('=')[1];

var content = (function(){

  return{
      init(){
         this.data();
      },
      data(){
      	//ajax获取json数据
      	var p1 = new Promise(function(resolve,reject){
            $.get('../json/saite.json',function(data){
               resolve(data);
         },'json')
      	})
      	//插入数据
        p1.then(function(data){
	         var str1=null;
	         var str2=null;
	         var str3=null;
	         var str4=null;
	         for(var i=0;i<data.floor.length;i++){
	              for(var j=0;j<data.floor[i].length;j++){
	                if(data.floor[i][j].id==id){
	                    str1=`<h3>您的位置：${data.floor[i][j].title}</h3>`;
	                    str2=`<div class="detail">
	                          <!-- 放大镜 -->
	                          <div class="detail-L">
	                                <!-- 中图 -->
	                                <div class="middle">
	                                    <div class="filter"></div>
	                                    <img src=${data.floor[i][j].img}>
	                                </div>
	                                <!-- 小图 -->
	                                <div class="small">
	                                    <img src=${data.floor[i][j].img}>
	                                    <img src=${data.floor[i][j].img}>
	                                </div>
	                              <!-- 大图 -->
	                                <div class="max">
	                                   <img src=${data.floor[i][j].img}>      
	                                </div>                
	                          </div> `;
	                    str3=` <div class="detail-R">
	                          <div class="title">
	                            <h3>${data.floor[i][j].title}</h3>
	                            <h4>天然竹纤维面层：柔软滑爽、亲和肌肤，丝般感受，瞬间吸湿、透气干爽，杀菌抑菌、绿色保健、预防和杜绝炎症的发生，不易引起过敏，并可生物降解，被专家称为会呼吸的纤维。
	                            </h4>
	                          </div>
	                          <div class="markePrice"><del>市 场 价：¥ 30.00</del></div>
	                          <div class="salePrice">售价：<span>¥&ensp;<i>${data.floor[i][j].price}</i> </span></div>
	                          <div class="integral">积分： <span>0.00 pv</span> </div>
	                          <div class="SerialNumber">商品编号: ${data.floor[i][j].id}</div>
	                          <div class="score">商品评分：  （已有0人评价） （月销 37 件/总销 148 件）</div>
	                          <div class="weight">商品重量：0.0420 kg</div>
	                          <div class="service">服务：由公司发货并提供售后服务。</div>
	                          <div class="number">
	                               购买数量：
	                            
	                                   <button class="reduce">-</button><input value="1"></input><button class="plug">+</button>
	                          </div>
	                          <div class="buy">
	                            <button class="buy">立即购买</button>
	                            <button class="addCart">加入购物车</button>
	                            <span>加入收藏</span>
	                          </div>
	                         </div>`
	                         str4=str1+str2+str3;
	                         $('.content').append(str4)	                      
	                }
	            }
	         }     

        })
        //放大镜
        .then(function(){
        	var middleBox=$('.middle');
			var smallImg=$('.small').children('img');
			var middleImg=$('.middle').children('img')[0];
			var maxBox=$('.max');
			var maxImg=maxBox.children('img');
			var filter=$('.filter');
			var detailL=$('.detail-L');

            //滑过小图
			smallImg.on('mouseover',function(){
				middleImg.src=$(this)[0].src;
				maxImg.src=$(this)[0].src;
			})

			//划入中图时
			middleBox.on('mouseover',function(){
				filter.css('display','block');
				maxBox.css('display','block');
				middleMove();
			})

			//在中图中移动
			middleMove=function(){
				document.onmousemove=function(e){
                    var e=e||event;
                    var l=e.clientX-middleBox[0].offsetLeft-filter[0].offsetWidth/2-detailL[0].offsetLeft;
                    var t=e.clientY-middleBox[0].offsetTop-filter[0].offsetHeight/2+document.documentElement.scrollTop-detailL[0].offsetTop;
                    l=l>middleBox[0].offsetWidth-filter[0].offsetWidth?middleBox[0].offsetWidth-filter[0].offsetWidth:(l<0?0:l);
                    t=t>middleBox[0].offsetHeight-filter[0].offsetHeight?middleBox[0].offsetHeight-filter[0].offsetHeight:(t<0?0:t);
                    filter.css({'left':l,'top':t});
                    maxImg.css({'left':-2*l,'top':-2*t});
				}   

			}
			//划出中图时
			middleBox.on('mouseout',function(){
				filter.css('display','none');
				maxBox.css('display','none');
			})      		      
        })
        //数据加减
        .then(function(){
        	var i=1;
        	// <button class="reduce">-</button><input value="1"></input><button class="plug">+</button>
        	$('.plug').on('click',function(){
        		i++;
        		$(this).siblings('input').val(i);    		
        	})

        	$('.reduce').on('click',function(){
        		if($(this).siblings('input').val()==1){
        			i=1
        		}else{
        			i--
        		}
                $(this).siblings('input').val(i);
        	})
        })
        //localStorage
        //点击购买获取商品数量
        .then(function(){
        	var shopList = localStorage.shopList || '[]';
            shopList = JSON.parse(shopList);
        	console.log(shopList)
            $('.addCart').on('click',function(){
            	var obj={
            		id:$('.SerialNumber').html().split(": ")[1],
            		price:Number($('.salePrice').find('i').html()),
            		count: Number($('.number').find('input').val()),
            	}

            	var add=true;
            	for(var i=0;i<shopList.length;i++){
                   if(obj.id==shopList[i].id){
                   	   add=false;
                   	   shopList[i].count += obj.count;
                   	   break;
                   }
            	}

            	if(add){
            		shopList.push(obj)
            	}
            	localStorage.shopList = JSON.stringify(shopList);
            	console.log(localStorage.shopList)
            	location.href='car.html'
            })
        })
      },
  }
})()

//插入获取的数据
content.init();

















