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
	          		url:'/users/:id',
	          		controller:'userControllerEdit',
	                template: '<p>Edit id is {{id}}</p>'
	          })
	       		
	       		
	       		
	});
	

	
})();