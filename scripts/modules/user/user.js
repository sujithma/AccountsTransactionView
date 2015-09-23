(function(){
'use strict';
	var user=angular.module('user',[
		'userController'
		]).config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('index.users');
			$stateProvider
	       		.state('index.users',{
	          		url:'/users',
	          		controller:'userController',
	                templateUrl: 'views/users/users.html'
	          })
       			.state('index.users.edit',{
	          		url:'/edit/:id',
	          		controller:'userControllerEdit',
	                template: '<p>Edit id is {{id}}</p>'
	          })
       			.state('index.users.add',{
	          		url:'/add',
	          		controller:'userControllerAdd',
	                templateUrl: 'views/users/users_add.html'
	          })
       			.state('index.users.settings',{
	          		url:'/settings/:id',
	          		controller:'userControllerSettings',
	                template: 'settings page'
	          })
	       		
	       		
	       		
	});
	

	
})();