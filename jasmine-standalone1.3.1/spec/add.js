/*
* 一个简单的函数,将传入的所有数字进行求和
*
* @author:wangzhenchuan
* @time:2017/6/19
* @exp:function
* @return total
*
*/
var add  = function(){
	  var total = 0,
	      len = arguments.length;
	  for(var index = 0;index<len;index++){
	    	  total+= arguments[index];
	  }
	  if(isNaN(total)){
	    	  console.log("请输入正确的number值");
	  }else{
              return total;
	  }
	 /*
		if(typeof total === "number"){
			return total;
	    }else{
            console.log("请输入正确的number值");
	    }
	 */  
}
console.log(add());
