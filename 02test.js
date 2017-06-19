/*jslint devel:true,nomen:true,white:true*/
/*global Class:false*/
var Accomodation  = Class.create((function(){
	  "use strict";
	  var _isLocked = true,
	  	  publicPropertiesAndMethods = {
	  	 	 
	  	 	  lock:function(){
	  	 	  	 _isLocked = true;
	  	 	  },
	  	 	  unlock:function(){
	  	 	  	 _isLocked = false;
	  	 	  },
	  	 	  getIsLocked:function(){
	  	 	  	 return _isLocked;
	  	 	  },
	  	 	  initialize:function(){
	  	 	  	 this.unlock();
	  	 	  }
	  	 };
	  	return publicPropertiesAndMethods; 
}()));
var House = Accomodation.extend({
	  isAlarmed:false,
	  alarm:function(){
	  	  this.isAlarmed = true;
	  	  alert("Alarm activated");
	  },
	  lock:function(){
	  	  Accomodation.prototype.lock.call(this);
	  	  this.alarm();
	  }
});
