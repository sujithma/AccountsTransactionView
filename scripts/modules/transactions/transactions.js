(function(){
	'use strict';
	var transactions = angular.module('transactions',['transactionsController'])
		.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('index.transactions');
			$stateProvider
				.state('index.transactions',{
					url	:	'/transactions',
					cache : false,
					controller	:	'transactionsController',
					templateUrl	:	'views/transactions/transactions.html'

				})
				.state('index.transactions.add',{
					url	:	'/add',
					cache : false,
					controller	:	'transactionControllerAdd',
					templateUrl	:	'views/transactions/add_transaction.html'

				})
				.state('index.transactions.trash',{
					url	:	'/trash',
					cache : false,
					controller	:	'transactionsControllerTrash',
					templateUrl	:	'views/transactions/trash_transactions.html'

				})
				.state('index.transactions.edit',{
					url	:	'/edit/:id',
					cache : false,
					controller	:	'transactionControllerEdit',
					templateUrl	:	'views/transactions/edit_transaction.html'

				})
				
				
		})
})();