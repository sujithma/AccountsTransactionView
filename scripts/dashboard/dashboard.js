(function(){
'use strict';
	var user=angular.module('dashboard',['dashboardController'])
	.config(function($stateProvider,$urlRouterProvider){
			$stateProvider
	       		.state('index.dashboard',{
	          		url:'/dashboard',
	          		controller:'dashboardController',
	                template: '<p>Welcome to dashboard</p>'
	          })
       	})	
	
	
})();