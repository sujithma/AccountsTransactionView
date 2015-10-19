(function(){
	'use strict';
	var rolesService	=	angular.module('rolesService',[])
		.service('rolesService',function(){
			var rolesData	=	{};
			this.setData = function(data) {
			      rolesData =  data;
			    };
			this.getData = function(){
				return rolesData;
			}    
			this.pushData = function(data){
				rolesData.push(data);
				console.log(rolesData.length);
				return rolesData;
			}
			this.spliceData = function(index,count){
				var $id = -1;
				for(var i = 0, len = rolesData.length; i < len; i++) {
				    if (rolesData[i].id === index.id) {
				        $id = i;
				        break;
				    }
				}
				rolesData.splice($id,count);
			
			 }
			 this.findData = function(id){
			 	var $data = {};

				for(var i = 0, len = rolesData.length; i < len; i++) {
				    if (rolesData[i].id == id) {
				        $data = rolesData[i].name
				        
				        break;
				    }
				}
				console.log($data);
				return $data;

			 }
			 this.updateData = function(role){

			 	for(var i = 0, len = rolesData.length; i < len; i++) {
				    if (rolesData[i].id == role.id) {
				        	rolesData[i].name = role.role_name;
				        break;
				    }
				}
				return rolesData;

			 }
			
			return this;
		});
})();