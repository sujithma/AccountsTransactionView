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
	      		.state('login',{
	      			url :'/login',
	          		controller:'loginController',
	                templateUrl: 'views/login/login.html'
	          
	      		})
	          	.state('index',{
	          		url:'/index',
	          		abstract:true,
	          		controller:'mainController',
	                templateUrl:'views/common/holder.html' 
	          })


	    $urlRouterProvider.otherwise('/login');      

     })

	.controller('mainController',function($scope,$state,loginFact){
		loginFact.checkLogedIn()
	    	.then(function(e){
	    		$scope.userData = e.data.user;
	    		(e.data.status == 1) ? $state.go($state.$current) : $state.go('login')

	    	})
	})

	
})();