(function(){
	'use strict';
	var rolesController	=	angular.module('rolesController',[])
		.controller('rolesController',function(rolesFact,$scope,$state,Notification){
			console.log("Roles Controller");


			rolesFact.Roles()
		    	.then(function(e){
		    		//console.log(e.data);
		    		$scope.data	=	e.data;
		    		console.log($scope.data);
		    		
		    	})
		    $scope.closebox	=	function(){
		    	$state.go('index.roles');
		    };
		    $scope.save	=	function(){
		    	var $role =	{'role_name': $scope.role_name};
		    	rolesFact.add($role)
		    		.then(function(re){
		    			Notification.success('Success notification');
		    		},function(){
		    			Notification.warning('Success notification');
		    		})	
		    };
		    $scope.delete =	function($id){
		    	rolesFact.delet($id)
		    		.then(function(re){
		    			console.log(re.data);
		    			Notification.success('Success notification');
		    		},function(){
		    			Notification.warning('Success notification');
		    		})	
		    
		    };	

		});	 
})();