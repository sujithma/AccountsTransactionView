(function(){
'use strict';
	var login=angular.module('login',['loginController'])
		.config(function($stateProvider,$urlRouterProvider){
			
			$stateProvider
	       		.state('index.login',{
	          		url:'/login',
	          		controller:'loginController',
	                templateUrl: 'scripts/modules/login/login.html'
	          })
	       		
	});
	

	
})();