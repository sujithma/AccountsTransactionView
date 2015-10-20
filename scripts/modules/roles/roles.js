(function(){
	'use strict';
	var role = angular.module('roles',['rolesController'])
	.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('index.roles');
		$stateProvider
			.state('index.roles',{
				url : '/roles',
				cache:false,
				controller : 'rolesController',
				templateUrl : 'views/roles/roles.html'

			})

			.state('index.roles.add',{
				url : '/add',
				cache:false,
				controller : 'rolesControllerAdd',
				templateUrl : 'views/roles/roles_add.html'

			})
			.state('index.roles.edit',{
	          	url:'/roles/:id',
	          	cache:false,
	          	controller:'rolesControllerEdit',
	            templateUrl : 'views/roles/roles_edit.html'
	        })
	})
})();