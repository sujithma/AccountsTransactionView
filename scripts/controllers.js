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

	    $urlRouterProvider.otherwise('index/login');      

     })
	.controller('mainController',function($scope,loginFact,$state){
		loginFact.checkLogedIn()
			    	.then(function(e){
			    		console.log(e.data);
			    		(e.data == '1') ? $state.go('index.dashboard') : $state.go('index.login')

			    	})
		//$state.go('index.dashboard');
	})

	
})();