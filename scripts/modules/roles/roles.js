(function(){
	'use strict';
	var role = angular.module('roles',['rolesController'])
	.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('index.roles.view');
		$stateProvider
			.state('index.roles',{
				url : '/view',
				controller : 'rolesController',
				templateUrl : 'views/roles/roles.html'

			})

			.state('index.roles.add',{
				url : '/add',
				controller : 'rolesController',
				templateUrl : 'views/roles/roles_add.html'

			})
	})
})();