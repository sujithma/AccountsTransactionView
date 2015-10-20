(function(){
	'use strict';
	var categoryService	=	angular.module('categoryService',[])
		.service('categoryService',function(){
			var categoryData	=	{};
			this.setData = function(data) {
			      categoryData =  data;
			    };
			this.getData = function(){
				return categoryData;
			}    
			this.pushData = function(data){
				categoryData.push(data);
				console.log(categoryData.length);
				return categoryData;
			}
			this.spliceData = function(index,count){
				var $id = -1;
				for(var i = 0, len = categoryData.length; i < len; i++) {
				    if (categoryData[i].id === index.id) {
				        $id = i;
				        break;
				    }
				}
				categoryData.splice($id,count);
			
			 }
			 this.findData = function(id){
			 	var $data = {};

				for(var i = 0, len = categoryData.length; i < len; i++) {
				    if (categoryData[i].id == id) {
				        $data = categoryData[i].name
				        
				        break;
				    }
				}
				console.log($data);
				return $data;

			 }
			 this.updateData = function(role){

			 	for(var i = 0, len = categoryData.length; i < len; i++) {
				    if (categoryData[i].id == role.id) {
				        	categoryData[i].name = role.role_name;
				        break;
				    }
				}
				return categoryData;

			 }
			
			return this;
		});
})();