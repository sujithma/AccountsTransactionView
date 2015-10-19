(function(){
	'use strict';
	var userService	=	angular.module('userService',[])
		.service('userService',function(){
			var usersData	=	{};
			this.setData = function(data) {
			      usersData =  data;
			}
			this.getData = function(){
				return usersData;
			}    
			this.pushData = function(data){
				usersData.push(data);
				console.log(usersData.length);
				return usersData;
			}
			this.spliceData = function(index,count){
				var $id = -1;
				for(var i = 0, len = usersData.length; i < len; i++) {
				    if (usersData[i].id === index.id) {
				        $id = i;
				        break;
				    }
				}
				usersData.splice($id,count);
			
			}
			 this.findData = function(id){
			 	var $data = {};
			 	console.log(id);
				for(var i = 0, len = usersData.length; i < len; i++) {
				    if (usersData[i].id == id) {
				        $data = {
				        	'id' :usersData[i].id,
				        	'name':usersData[i].name,
				        	'role_id':usersData[i].role_id};
				        
				        break;
				    }
				}
				console.log($data);
				return $data;

			 }
			//  this.updateData = function(role){

			//  	for(var i = 0, len = usersData.length; i < len; i++) {
			// 	    if (usersData[i].id == role.id) {
			// 	        	usersData[i].name = role.role_name;
			// 	        break;
			// 	    }
			// 	}
			// 	return usersData;

			//  }
			
			return this;
		});
})();