(function(){
'use strict';
	var controllers=angular.module('controllers',[
		'dashboard',
		'login',
		'navigation',
		'roles',
		'user',
		'categories'
		])
	.config(function($stateProvider,$urlRouterProvider,$httpProvider){
			$httpProvider.defaults.withCredentials = true;
	      	$stateProvider
	          .state('index',{
	          		url:'/index',
	          		abstract:true,
	          		controller:'mainController',
	                templateUrl:'views/common/holder.html' 
	          })


	    $urlRouterProvider.otherwise('index/login');      

     })

	.controller('mainController',function($scope,$state,loginFact){
		loginFact.checkLogedIn()
	    	.then(function(e){
	    		console.log(e.data);
	    		//(e.data.status == 1) ? $state.go('index.dashboard') : $state.go('index.login')

	    	})
	})

	
})();