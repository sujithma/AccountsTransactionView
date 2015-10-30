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
				transactionsObj.deleteTransaction	=	function(id){
					return $http.post(urls.BASE + 'transactions/forceDelete',{id:id})
				};
				transactionsObj.viewTransactionTrash	=	function(){
					return $http.get(urls.BASE + 'transactions/trash')
				};
				transactionsObj.deleteTransactionPermanent = function(id){	
					return $http.post(urls.BASE + 'transactions/delete',{id:id})
				};
				transactionsObj.transactionRestore = function(id){
					return $http.post(urls.BASE + 'transactions/restore',{id:id})
				};
				
				
			return transactionsObj;	
		}]);
})();
