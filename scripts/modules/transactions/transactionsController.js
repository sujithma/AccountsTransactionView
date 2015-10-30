(function(){
	'use strict';
	var transactionsController	=	angular.module('transactionsController',[])
		.controller('transactionsController',function($scope,transactionsFact,$state,Notification,transactionsService){
			transactionsFact.viewTransactions()
				.then(function(responseData){
					transactionsService.setData(responseData.data)
					$scope.data	=	transactionsService.getData();
				})
				$scope.delete = function(id){
				var conf = confirm('Are You sure to Delete');
				if(conf == true) {
					transactionsFact.deleteTransaction(id)
						.then(function(success){
							Notification.success('Success notification');
				    		categoryService.spliceData(id,1);
						},function(error){
							Notification.warning({message: 'Errorr', title: 'Error Occured'});
						})
					}else{
						return false;
					}
			}
			
		})

		.controller('transactionControllerAdd',function($scope,transactionsFact,$state,transactionsService,categoriesFact,categoryService){
				categoriesFact.viewCategories()
				.then(function(responseData){
					categoryService.setData(responseData.data)
					if(responseData.data.length != 0){
						$scope.categories	=	categoryService.getData();
					}else{
						$scope.categories = false;
					}
					
					//console.log($scope.data);
					})
					$scope.save = function(transaction){
					var $category_id = (typeof(transaction.category_id) != 'undefined') ? transaction.category_id : '';
					var $data = {title: transaction.title,
								description : transaction.description,
								category_id : $category_id,
								transaction_type : transaction.transaction_type
							};
					//console.log(category);
					transactionsFact.addTransaction($data)
					.then(function(success){
						console.log(success.data.status)					
						transactionsService.pushData($data);
						$state.go('index.transactions');
						
						
					},function(error){

					})
				}
		})
		


})();
