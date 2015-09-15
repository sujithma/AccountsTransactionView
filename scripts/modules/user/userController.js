(function(){
	'use strict';
	var userController	=	angular.module('userController',[])
		.controller('userController',function($scope,userFact,$state,Notification){
			userFact.viewUsers()
			    	.then(function(e){
			    		$scope.data	=	e.data;
			    	})
			$scope.delete = function(id){
				userFact.deete(id)
			    	.then(function(e){
			    		$scope.data	=	e.data;
			    		  Notification.success('Success notification');
			    		  $scope.data.splice(id,1);
			    	},function(){
			    		  Notification.warning('Success notification');
			    	})	
			}    	
		})
		.controller('userControllerEdit',function($state,$stateParams,$scope){
			$scope.id = $stateParams.id;
		})
		
})();