/*
* 与房子相关的各种类
* 
* @module Accommodation-related
*/
/*
* 定义各种类型房子的类
*
* @class Accommodation
* @constructor
* @example 
*        var myAccommodation = new Accomodation();
*/
var Accomodation  = Class.create((function(){
	  /*
	  * 标明房子当前是否上锁
	  * @property {Boolean} _isLocked
	  * @protected
	  */
	  var _isLocked = true,
	  	  publicPropertiesAndMethods = {
	  	 	  /*
			  * 给房子上锁
			  * @method lock
			  * @example
			  *      var myAccommodation = new Accommodation();
			  *		 myAccommodation.lock();
	  	 	  */
	  	 	  lock:function(){
	  	 	  	 _isLocked = true;
	  	 	  },
	  	 	  /*
			  * 给房子解锁
			  * 
			  * @method unlock
			  * @example
			  *       var myAccommodation = new Accommodation();
			  *       myAccommodation.unlock();
	  	 	  */
	  	 	  unlock:function(){
	  	 	  	 _isLocked = false;
	  	 	  },
	  	 	  /*
			  * 确定房子当前是否上锁
			  *
			  * @method getIsLocked
			  * @return {Boolean} 该值表示锁的状态-true表示已经上锁
			  * @example 
			  *      var myAccommodation = new Accommodation();
			  *		 myAccommodation.getIsLocked();  // false 
			  * @example
			  *      var myAccommodation = new Accommodation();
			  * myAccommodation.lock();
			  * myAccommodation.getIsLocked()  // true
	  	 	  */
	  	 	  getIsLocked:function(){
	  	 	  	 return _isLocked;
	  	 	  },
	  	 	  /*
			  * 创建该类的对象实例时会自动执行本方法
			  * 对住宅进行解锁
			  *
			  * @method initialize
			  *
	  	 	  */
	  	 	  initialize:function(){
	  	 	  	 this.unlock();
	  	 	  }
	  	 };
	  	return publicPropertiesAndMethods; 
}()));
/*
*  表示房子的类,这是一种特殊类型的住宅
*
*  @class House
*  @construcor
*  @extends Accommodation
*  @example
*      var myHouse = new House();
*  
*/
var House = Accomodation.extend({
	  /*
	  * 表示房子警报是否开启一true表示已开启
	  * 
	  * @property {Boolean} isAlarmed
	  */
	  isAlarmed:false,
	  /*
	  * 启动房子的警报
	  * @method alarm
	  */
	  alarm:function(){
	  	  this.isAlarmed = true;
	  	  alert("Alarm activated");
	  },
	  /*
	  * 给房子上锁并启动警报
	  * 
	  * @method lock
	  */
	  lock:function(){
	  	  Accomodation.prototype.lock.call(this);
	  	  this.alarm();
	  }
});