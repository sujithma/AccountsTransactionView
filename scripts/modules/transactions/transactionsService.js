(function(){
	'use strict';
	var transactionsService	=	angular.module('transactionsService',[])
		.service('transactionsService',function(){
			var transactionsData	=	{};
			this.setData = function(data) {
			      transactionsData = data;
			    };
			this.getData = function(){
				return transactionsData;
			}    
			this.pushData = function(data){
				transactionsData.push(data);
				console.log(transactionsData.length);
				return transactionsData;
			}
			this.spliceData = function(index,count){
				var $id = -1;
				for(var i = 0, len = transactionsData.length; i < len; i++) {
				    if (transactionsData[i].id === index.id) {
				        $id = i;
				        break;
				    }
				}
				transactionsData.splice($id,count);
			
			 }
			 this.findData = function(id){
			 	var $data = {};

				for(var i = 0, len = transactionsData.length; i < len; i++) {
				    if (transactionsData[i].id == id) {
				         $data = {
				        	'title' :transactionsData[i].title,
				        	'description':transactionsData[i].description,
				        	'transaction_type':transactionsData[i].transaction_type,
				        	'transaction_date':transactionsData[i].transaction_date};
				        
				        break;
				    }
				}
				//console.log($data);
				return $data;

			 }
			 this.updateData = function(role){

			 	for(var i = 0, len = transactionsData.length; i < len; i++) {
				    if (transactionsData[i].id == role.id) {
				        	transactionsData[i].name = role.role_name;
				        break;
				    }
				}
				return transactionsData;

			 }
			
			return this;
		});
})();