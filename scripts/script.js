(function(){
'use strict';
	var app=angular.module('single-page-app',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){
	      $stateProvider
	          .state('index',{
	          		url:'/index',
	          		controller:function($scope){

	          		},
	                templateUrl: 'templates/home.html'
	          })
	          .state('about',{
	          		url:'/about',
	          		controller:function($scope){

	          		},
	                templateUrl: 'templates/about.html'
	          });
	          $urlRouterProvider.otherwise('index');

	});
	
})();