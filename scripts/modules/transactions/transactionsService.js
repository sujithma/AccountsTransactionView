(function(){
	'use strict';
	var transactionsService	=	angular.module('transactionsService',[])
		.service('transactionsService',function(){
			var transactionsData	=	{};
			var searchData	=	[];
			this.setData = function(data) {				
			      transactionsData = data;
			      searchData = data;
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
				console.log(index);
				for(var i = 0, len = transactionsData.length; i < len; i++) {
				    if (transactionsData[i].id === index) {
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
						console.log(transactionsData[i]);
				         $data = transactionsData[i];
				         // {
				        	// 'title' :transactionsData[i].title,
				        	// 'description':transactionsData[i].description,
				        	// 'transaction_type':transactionsData[i].transaction_type,
				        	// 'transaction_date':transactionsData[i].transaction_date};
				        
				        break;
				    }
				}
				return $data;

			}
			var searchType = [];
			var searchUser = [];

			this.getDataByType = function(type){
				var checkData = searchUser.length > 0 ? searchUser : transactionsData;				
				var data = [];
				for(var i = 0, len = checkData.length; i < len; i++) {
					if (type == 'all') {
						searchType = checkData;
						return checkData;
					}
				    else if (checkData[i].transaction_type == type) {
				        data.push(checkData[i]);
				    }
				}
				searchType = data;
				return data;

			}
			this.getDataByUser = function(userId){
				var checkData = searchType.length > 0 ? searchType : transactionsData;
				var data = [];
				for(var i = 0, len = checkData.length; i < len; i++) {
					if (userId == 0) {
						searchUser = checkData;
						return checkData;
					}
				    else if (checkData[i].user_id == userId) {
				        data.push(checkData[i]);
				    }
				}
				searchUser = data;
				return data;

			}
			this.updateData = function(transaction){
				for(var i = 0, len = transactionsData.length; i < len; i++) {
				    if (transactionsData[i].id == transaction.id) {
				        	transactionsData[i] =transaction;
				        	console.log(transactionsData[i]);
				        break;
				    }
				}
				return transactionsData;

			 }
			
			return this;
		});
})();