(function(){
	'use strict';
	var categories	=	angular.module('categories',['categoriesController'])
		.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('index.categories');
			$stateProvider
				.state('index.categories',{
					url	:	'/categories',
					cashe : false,
					controller	:	'categoriesController',
					templateUrl	:	'views/categories/categories.html'

				})
				.state('index.categories.add',{
					url	:	'/add',
					cashe : false,
					controller	:	'categoriesController',
					templateUrl	:	'views/categories/add_categories.html'

				})
		})
})();