//循环遍历localStorage的数据
var shopList=localStorage.shopList||[];
shopList=JSON.parse(shopList);

var str=null;
for(var i=0;i<shopList.length;i++){
    str=`<tr>
 	        <td><input type="checkbox"></input></td>
	   	    <td class="title"></td>
	   	    <td class="price tocenter">￥${shopList[i].price}</td>
	   	    <td class="integral tocenter">0.00</td>
	   	    <td class="count tocenter">
	   	        <button class="reduce">-</button>
                <input type="text" value="${shopList[i].count}" />
	   	        <button class="add">+</button>
	   	    </td>
	   	    <td class='del tocenter'>删除</td>
	 	</tr>`
	$('tbody').append(str)
}


//减商品数量
$('.reduce').on('click',function(){
	var i=$(this).siblings('input').val()
    if(i<=1){
    	i=1
    }else{
    	i--
    }
    $(this).siblings('input').val(i)
})

//加商品数量
$('.add').on('click',function(){
	var i=$(this).siblings('input').val()
     i++
    $(this).siblings('input').val(i)
})

//删除商品
$('.del').on('click',function(){
	$(this).closest('tr').remove()
})

//全选商品
$('th').find('input').on('click',function(){
	if(this.checked){
		$('tbody').find('input').attr("checked",true);
		$('.selectAll').find('input').attr("checked",true)

	}else{
		$('tbody').find('input').attr('checked',false);
		$('.selectAll').find('input').attr("checked",false);
	}
})

//选部分

























