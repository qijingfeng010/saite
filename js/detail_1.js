
/*获取id*/
var id = location.search.split('=')[1];

var content = (function(){

  return{
      init(){
         this.data();
      },
      data(){
        var _this=this;
          $.get('../json/saite.json',function(data){
               _this.getData(data)
         },'json')
      },
      getData(data){
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
                          <div class="SerialNumber">商品编号：${data.floor[i][j].id}</div>
                          <div class="score">商品评分：  （已有0人评价） （月销 37 件/总销 148 件）</div>
                          <div class="weight">商品重量：0.0420 kg</div>
                          <div class="service">服务：由公司发货并提供售后服务。</div>
                          <div class="number">
                               购买数量：
                               <!-- <span class="reduce">-</span><input value="1"></input><span class="plug">+</span> -->
                                   <button class="reduce">-</button><input value="1"></input><button class="plug">+</button>
                          </div>
                          <div class="buy">
                            <button>立即购买</button>
                            <button>加入购物车</button>
                            <span>加入收藏</span>
                          </div>
                         </div>`
                         str4=str1+str2+str3;
                         $('.content').append(str4)
                }
              }
         }
      }

  }
})()
//插入获取的数据
content.init();


//放大镜
var Magnifier=(function(){
   var middleBox=$('.middle');
   // console.log(middleBox.children('img'))
   var smallImg=$('.small').children('img');
   var middleImg=middleBox.$('img');
   var maxBox=$('.max');
   var maxImg=maxBox.$('img');
   var filter=$('.filter');

   return {
        init(){
          //滑过小图
           this.smallOver();
           //滑进中图
           // this.middleOver();
           //滑出中图
           // this.middleOut();

        },
        smallOver(){
           console.log(smallImg.index())
        }

   }
})()
//实例化
Magnifier.init();

/*function Magnifier(){
  this.middleBox=document.querySelector('.middle');
  this.smallImg=document.querySelector('.small').querySelectorAll('img');
  this.middleImg=this.middleBox.querySelector('img');
  this.maxBox=document.querySelector('.max')
  this.maxImg=this.maxBox.querySelector('img')
  this.filter=this.middleBox.querySelector('.filter')
  this.init();
}

Magnifier.prototype.init=function(){
    this.onmouseover();
    this.middleOver();
    this.middleOut();
}

Magnifier.prototype.onmouseover=function(){ 
     var _this=this;
  for(var i=0;i<this.smallImg.length;i++){
      this.smallImg[i].onmouseover=function(){
             _this.tabToggle(this)
      }
    } 
}
Magnifier.prototype.tabToggle=function(index){
       var src=index.src;
       this.middleImg.src=src;
       this.maxImg.src=src;
}

Magnifier.prototype.middleOver=function(){
  var _this=this;
  this.middleBox.onmouseover=function(){
       _this.filter.style.display = "block";
       _this.maxBox.style.display='block';
       this.onmousemove=function(){
            _this.move();
       }
  }
}

Magnifier.prototype.middleOut=function(){
  var _this=this;
  this.middleBox.onmouseout=function(){
     _this.filter.style.display = "none";
         _this.maxBox.style.display='none';
  }
}

Magnifier.prototype.move=function(e){
    var e=e||event;
    var l=e.clientX - this.middleBox.offsetLeft - this.filter.offsetWidth/2;
    var t=e.clientY - this.middleBox.offsetTop - this.filter.offsetHeight/2;
    l=l>this.middleBox.offsetWidth-this.filter.offsetWidth?this.middleBox.offsetWidth-this.filter.offsetWidth:(l<0?0:l);
    t=t>this.middleBox.offsetHeight-this.filter.offsetHeight?this.middleBox.offsetHeight-this.filter.offsetHeight:(t<0?0:t);
    this.filter.style.left=l+'px';
    this.filter.style.top=t+'px';
    this.maxImg.style.left=-2*l+'px';
    this.maxImg.style.top=-2*t+'px';
    // console.log(this.middleBox.offsetLeft)
    // console.log(e.clientY)
    // console.log(this.middleBox.offsetTop)
    // console.log(this.filter.offsetHeight/2)
}


new Magnifier();
*/















