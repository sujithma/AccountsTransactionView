(function(){
	'use strict';
	var transactionsFact	=	angular.module('transactionsFactory',[])
		.factory('transactionsFact',['$http','urls',function($http,urls){
			var transactionsObj	=	{};
				transactionsObj.viewTransactions	=	function(){
					return $http.get(urls.BASE + 'transactions')
				};

				transactionsObj.addTransaction	=	function(data){
					return $http.post(urls.BASE + 'transactions/add',data)
				};
				// transactionsObj.deleteTransaction	=	function(id){
				// 	return $http.post(urls.BASE + 'transactions/delete',{id:id})
				// };
				// transactionsObj.viewCategoriesTrash	=	function(){
				// 	return $http.get(urls.BASE + 'categories/trash')
				// };
				// transactionsObj.deleteCategoryPermanent	=	function(id){	
				// 	return $http.post(urls.BASE + 'categories/forceDelete',{id:id})
				// };
				// transactionsObj.categoryRestore	=	function(id){
				// 	return $http.post(urls.BASE + 'categories/restore',{id:id})
				// };
				
				
			return transactionsObj;	
		}]);
})();
