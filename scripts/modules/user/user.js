(function(){
'use strict';
	var user=angular.module('user',[
		'userController'
		]).config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('index.users');
			$stateProvider
	       		.state('index.users',{
	          		url:'/users',
	        //   		data: {
				     //    permissions: {
					    //       only: ['admin']
					    //     }
					    // },

	          		controller:'userController',
	                templateUrl: 'views/users/users.html'
	          	})
       			.state('index.users.edit',{
	          		url:'/edit/:id',
	          		controller:'userControllerEdit',
	                templateUrl:'views/users/user_edit.html'
	          	})
       			.state('index.users.add',{
	          		url:'/add',
	          		controller:'userControllerAdd',
	                templateUrl: 'views/users/users_add.html'
	          	})
       			.state('index.users.settings',{
	          		url:'/settings/:id',
	          		controller:'userControllerSettings',
	                templateUrl: 'views/users/users_settings.html'
	          	})
       			.state('index.users.trash',{
	          		url:'/trash',
	          		controller:'userControllerTrash',
	                templateUrl: 'views/users/users_trash.html'
	          	})
	       		
	       		
	       		
	});
	

	
})();