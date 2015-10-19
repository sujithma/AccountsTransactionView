(function(){
	'use strict';
	var dashboardController	=	angular.module('dashboardController',[])
		.controller('dashboardController',function($scope,userFact,rolesFact,userService,rolesService){

			userFact.viewUsers()
			    	.then(function(e){
			    		userService.setData(e.data);
			    		
			    		
			    	})
			rolesFact.Roles()
		    	.then(function(e){
		    		rolesService.setData(e.data);
		    		
		    	})

		});

})();