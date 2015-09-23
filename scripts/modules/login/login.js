(function(){
'use strict';
	var login=angular.module('login',['loginController'])
		.config(function($stateProvider,$urlRouterProvider){

			//$authProvider.loginUrl = 'http://acctr.loc/logind';
			$stateProvider
       			.state('index.home',{
	          		url:'/home',
	          		//controller:'LoginController',
	                template: '<h1>welcome</h1>'
	          })
       			.state('index.logout',{
	                url:'/logout',
	                controller:'logoutController',
	                templateUrl: 'views/login/login.html'
          })
         


	       		
	});
	

	
})();