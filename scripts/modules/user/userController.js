(function(){
	'use strict';
	var userController	=	angular.module('userController',['userService'])
		.controller('userController',function($scope,userFact,$state,Notification,userService){
			userFact.viewUsers()
			    	.then(function(e){
			    		userService.setData(e.data);
			    		$scope.data = userService.getData();
			    	})
			$scope.delete = function($id){
				var $id = {'id' : $id};
				var conf = confirm('Are You sure to Delete');
				if(conf == true) {
					userFact.delete($id)
						.then(function(response){
							  Notification.success('Success notification');
				    		  userService.spliceData($id,1);
						},function(){
							Notification.warning('error notification');
						})
					}else{
						return false;
					}
			}
		})
		.controller('userControllerEdit',function($state,$stateParams,$scope){
			$scope.id = $stateParams.id;
		})
		.controller('userControllerAdd',function($state,$scope,rolesFact,userFact,userService,Notification){
			$scope.rolesData = [];
			rolesFact.Roles()
		    	.then(function(e){
		    		$scope.rolesData = e.data;
		    	})

		     $scope.save	=	function(user){
		     	if(user == null){return false;}
		     	userFact.add(user)
		     		.then(function(response){
		     			user.id = response.data.userid;
		     			userService.pushData(user);
		     			Notification.success('Success notification');
		     			$state.go('index.users');

		     		},function(){
		     			Notification.warning('error notification');
		     		})	
		    	
		    };
		    	

		})
		
})();