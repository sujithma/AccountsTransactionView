(function(){
'use strict';
	var login=angular.module('login',['loginController'])
		.config(function($stateProvider,$urlRouterProvider){

			//$authProvider.loginUrl = 'http://acctr.loc/logind';
			$stateProvider
	       		.state('index.login',{
	          		url:'/login',
	          		controller:'loginController',
	                templateUrl: 'scripts/modules/login/login.html'
	          })
	       		
	});
	

	
})();