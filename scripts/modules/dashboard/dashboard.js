(function(){
'use strict';
	var user=angular.module('dashboard',['dashboardController'])
	.config(function($stateProvider, $urlRouterProvider){
	    $urlRouterProvider.otherwise("index.dashboard");
        $stateProvider
   		   .state('index.dashboard',{
          		url:'/dashboard',
          		controller:'dashboardController',
              templateUrl: 'views/dashboard/dashboard.html'
          })
         

          .state('index.logout',{
              url:'/logout',
              controller:function(){
                
              },
              template: 'sdsd'
          })
         

       	
       	})	
	
	
})();