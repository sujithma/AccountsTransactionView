(function(){
'use strict';
	var login=angular.module('login',['loginController'])
		.config(function($stateProvider,$urlRouterProvider){
      // $state.params.previousState.name
			//$authProvider.loginUrl = 'http://acctr.loc/logind';
			$stateProvider
   			.state('index.home',{
          		url:'/home',
          		//controller:'LoginController',
              templateUrl: 'views/login/userhome.html'
	        })
   			.state('index.logout',{
                url:'/logout',
                controller:'logoutController',
                templateUrl: 'views/login/login.html'
          	})
            .state('index.profile',{
                url:'/profile',
                controller:'profileController',
                templateUrl: 'views/login/profile.html'
            })     		
	});
	
	
})();