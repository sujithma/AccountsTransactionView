(function(){
	'use strict';
	var categories	=	angular.module('categories',['categoriesController'])
		.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('index.categories');
			$stateProvider
				.state('index.categories',{
					url	:	'/categories',
					controller	:	'categoriesController',
					templateUrl	:	'views/categories/categories.html'

				})
		})
})();