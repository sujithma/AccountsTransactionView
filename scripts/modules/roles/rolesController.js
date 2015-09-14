(function(){
	'use strict';
	var rolesController	=	angular.module('rolesController',[])
		.controller('rolesController',function(rolesFact,$scope,$state){
			console.log("Roles Controller");


			rolesFact.viewRoles()
		    	.then(function(e){
		    		//console.log(e.data);
		    		$scope.data	=	e.data;
		    		console.log($scope.data);
		    		
		    	})
		    $scope.closebox	=	function(){
		    	$state.go('index.roles');
		    };

		});	 
})();