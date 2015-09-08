(function(){
'use strict';
	var controllers=angular.module('controllers',[
		'dashboard',
		'login'
		])
	.config(function($stateProvider,$urlRouterProvider){
	      $stateProvider
	          .state('index',{
	          		url:'/index',
	          		abstract:true,
	          		controller:'mainController',
	                template: '<div ui-view></div>'
	          })

	    $urlRouterProvider.otherwise('login');      

     })
	.controller('mainController',function($scope,userFact,$state){
		
		$state.go('index.dashboard');
	})

	
})();