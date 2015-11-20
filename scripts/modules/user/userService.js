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
				for(var i = 0, len = usersData.length; i < len; i++) {
				    if (usersData[i].id == id) {
				        $data = usersData[i]
				        
				        break;
				    }
				}
				return $data;

			 }
			 this.changeStatus = function(id){
			 	id = id.id;
			 	var $data = this.findData(id);
				$data.status = $data.status==0 ? 1 : 0;
				return $data;
			 }

			 this.updateData = function(user){
			 	for(var i = 0, len = usersData.length; i < len; i++) {
				    if (usersData[i].id == user.id) {
				        usersData[i] = user;
				        break;
				    }
				}
				return usersData;
			 }
			
			return this;
		});
})();