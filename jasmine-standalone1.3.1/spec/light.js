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