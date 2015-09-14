(function(){
'use strict';
	var user=angular.module('user',[
		'userController'
		]).config(function($stateProvider,$urlRouterProvider){
			$stateProvider
	       		.state('index.login',{
	          		url:'/login',
	          		controller:'LoginController',
	                templateUrl: 'templates/login.html'
	          })
	       		
	       		
	});
	

	
})();