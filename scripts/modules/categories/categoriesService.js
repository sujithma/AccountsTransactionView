(function(){
	'use strict';
	var categoryService	=	angular.module('categoryService',[])
		.service('categoryService',function(){
			var categoryData	=	{};
			this.setData = function(data) {
				categoryData = data;	
			};
			this.getData = function(){
				return categoryData;
			} 
			this.parentCategory = function(){
				var parentData = [];
				for(var i = 0, len = categoryData.length; i < len; i++) {
					var subCategories = [];
				    if (categoryData[i].parent_id == 0) {
				    	for(var j = 0, len = categoryData.length; j < len; j++) {
						    if (categoryData[j].parent_id == categoryData[i].id){				    	
						        subCategories.push(categoryData[j]);
						    }
						}
				    	categoryData[i].subCategories = subCategories;				    	
				        parentData.push(categoryData[i]);
				    }
				}
				return parentData;
			} 

			this.parentOnlySubCategory = function(){
				var parentData = [];
				for(var i = 0, len = categoryData.length; i < len; i++) {
					var subCategories = [];
				    if (categoryData[i].parent_id == 0) {
				    	for(var j = 0, len = categoryData.length; j < len; j++) {
						    if (categoryData[j].parent_id == categoryData[i].id){				    	
						        subCategories.push(categoryData[j]);
						    }
						}						
				    	categoryData[i].subCategories = subCategories;
				    	if (categoryData[i].subCategories.length != 0)	{
				    		parentData.push(categoryData[i]);
				    	}	
				    }
				}
				return parentData;
			}  
			this.pushData = function(data){
				categoryData.push(data);
				console.log(categoryData);
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
				        $data = categoryData[i];
				        break;
				    }
				}
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