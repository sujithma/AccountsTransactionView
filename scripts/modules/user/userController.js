(function(){
	'use strict';
	var userController	=	angular.module('userController',[])
		.controller('userController',function($scope,userFact,$state,Notification,userService,rolesService){
			
				userFact.viewUsers()
			    	.then(function(e){
			    		userService.setData(e.data);
			    		$scope.data = userService.getData();
			    		//console.log($scope.data);
			    		for(var $data in $scope.data){
			    			$scope.data[$data].role_name = rolesService.findData($scope.data[$data].role_id);
						}			
			    	})
		
			

			$scope.changeStatus = function($id,$status) {
				var $id = {'id' : $id};
				// var $status = {'status' : $status};
				var $option = $status==0 ? 'Active' : 'Block';
				var conf = confirm('Are You sure want to '+ $option);
				if(conf == true) {
					userFact.changeStatus($id)
					 	.then(function(success){
						 	userService.changeStatus($id);
						 	$scope.data = userService.getData();
						 	Notification.success('Success notification');
						 	},function(){
								Notification.warning('error notification');
						})
				}
			}

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
		.controller('userControllerEdit',function($state,$stateParams,$scope,userService,rolesFact,userFact,Notification){
			$scope.id = $stateParams.id;
			$scope.formRole ={};
			$scope.UserData	= userService.findData($scope.id);
			$scope.name = $scope.UserData.name;
			$scope.rolesData = [];
			$scope.formRole ={rolesData : $scope.UserData.roles};
			rolesFact.Roles()
		    	.then(function(e){
		    		$scope.rolesData = e.data;
		    	})
		    	$scope.save	=	function(user,roleId){
		     		user.role_id = roleId;
		     		user.id = $scope.id;
		    		console.log(user);
		     		userFact.edit(user)
		     		.then(function(response){
		     			console.log(response);
		     			if(response.data == 'alreday exist')
		     			{
		     				$scope.ext = true;
		     				return false;
		     			}else {

		     			}
			     			Notification.success('Success notification');
			     			$state.go('index.users');
		     		},function(){
		     			Notification.warning('error notification');
		     		})	
		    };

			
		})
		.controller('userControllerAdd',function($state,$scope,rolesFact,userFact,userService,Notification){
			$scope.status = 1;
			$scope.rolesData = [];
			$scope.formRole ={};
			rolesFact.Roles()
		    	.then(function(e){
		    		$scope.rolesData = e.data;
		    		$scope.formRole.roleId = $scope.rolesData[0].id;
					$scope.user = { role_name : $scope.rolesData[0].name};
		    	})
		     $scope.save	=	function(user,roleId){
		     	// if(user.name == null  || user.email == null || user.password == null || user.confirm_password == null){return false;}
		     	user.role_id = roleId;
		     	userFact.add(user)
		     		.then(function(response){
		     			console.log(response.data);
		     			if(response.data == 'alreday exist')
		     			{
		     				$scope.ext = true;
		     				return false;
		     			}else{
		     				user.id = response.data.userid;
			     			userService.pushData(user);
			     			console.log(user);
			     			Notification.success('Success notification');
			     			$state.go('index.users');
		     			}
		     		},function(){
		     			Notification.warning('error notification');
		     		})	
		    };
		})

		.controller('userControllerSettings',function($state,$scope,$stateParams,rolesService,userService){
		
			$scope.userDetails = userService.findData($stateParams.id);
			$scope.role_name = rolesService.findData($scope.userDetails.role_id);
									
		})

		.controller('userControllerTrash',function($scope,Notification,userFact,$state,userService){
			userFact.viewUsersTrash()
				.then(function(responseData){
					userService.setData(responseData.data)
					$scope.data	= userService.getData();
				})

			$scope.delete = function(id){
				var conf = confirm('Are You sure to Delete.The data will be permanently deleted');
				if(conf == true) {
					userFact.deleteUserPermanent(id)
						.then(function(success){
							Notification.success('Success notification');
				    		userService.spliceData(id,1);
				    		
						},function(error){
							Notification.warning({message: 'Errorr', title: 'Error Occured'});
						})
					}else{
						return false;
					}
			}
			$scope.restore = function(id){
				var conf = confirm(' Are You sure to Restore the User');
				if(conf == true) {
					userFact.userRestore(id)
						.then(function(success){
							console.log(success.data.user);
							Notification.success('Success notification');
				    		userService.spliceData(id,1);
				    		// userService.pushData(success.data.user);
				    		
						},function(error){
							Notification.warning({message: 'Errorr', title: 'Error Occured'});
						})
					}else{
						return false;
				}
			}
		})
		
})();