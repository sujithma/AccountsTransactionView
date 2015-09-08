(function(){
'use strict';
	var login=angular.module('login',['loginController'])
		.config(function($stateProvider,$urlRouterProvider){
			console.log(14562);
			$stateProvider
	       		.state('index.login',{
	          		url:'/login',
	          		controller:'loginController',
	                templateUrl: 'login/login.html'
	          })
	       		
	});
	

	
})();