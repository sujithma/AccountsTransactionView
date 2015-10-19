(function(){
	'use strict';
	var userController	=	angular.module('userController',[])
		.controller('userController',function($scope,userFact,$state,Notification,userService,rolesService){
			userFact.viewUsers()
			    	.then(function(e){
			    		userService.setData(e.data);
			    		$scope.data = userService.getData();
			    		console.log($scope.data);
			    		for(var $data in $scope.data){
			    			$scope.data[$data].role_name = rolesService.findData($scope.data[$data].role_id);
						}
			  
			
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
					$scope.user = { role : $scope.rolesData[0].name};
		    	})

		     $scope.save	=	function(user){
		     	// if(user.name == null  || user.email == null || user.password == null || user.confirm_password == null){return false;}
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
		.controller('userControllerSettings',function($state,$scope,$stateParams,rolesService,userService){
		
			$scope.userDetails = userService.findData($stateParams.id);
			$scope.role_name = rolesService.findData($scope.userDetails.role_id);
									
		})
		
})();