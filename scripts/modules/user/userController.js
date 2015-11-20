(function(){
	'use strict';
	var userController	=	angular.module('userController',[])
		.controller('userController',function($scope,userFact,$state,Notification,userService,rolesService){
				userFact.viewUsers()
			    	.then(function(e){
			    		userService.setData(e.data);
			    		$scope.users = userService.getData();
			    		//console.log($scope.data);
			   //  		for(var $data in $scope.data){
			   //  			$scope.data[$data].role_name = rolesService.findData($scope.data[$data].role_id);
						// }			
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
						 	Notification.success({message: "user "+$option+" successfully"});
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
							userService.spliceData($id,1);
							Notification.success('Deleted successfully');
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
		     		userFact.edit(user)
		     		.then(function(response){
		     			if(response.data == 'alreday exist')
		     			{
		     				$scope.ext = true;
		     				return false;
		     			}else {
		     				userService.updateData(response.data.user);
		     				Notification.success('Edited successfully');
			     			$state.go('index.users');
		     			}
		     		},function(){
		     			Notification.warning('error notification');
		     		})	
		    };

			
		})
		.controller('userControllerAdd',function($state,$scope,rolesFact,userFact,userService,Notification){
			rolesFact.Roles()
		    	.then(function(e){
		    		$scope.rolesData = e.data;
		    		$scope.roleId = $scope.rolesData[0].id;
		    	})
		    $scope.save	=	function(user,roleId){
		     	user.role_id = roleId;
		     	userFact.add(user)
		     		.then(function(response){
		     			if(response.data == 'alreday exist')
		     			{
		     				$scope.ext = true;
		     				return false;
		     			}else{
			     			userService.pushData(response.data.user);
			     			Notification.success('New user Added');
			     			$state.go('index.users');
		     			}
		     		},function(){
		     			Notification.warning('error notification');
		     		})	
		    };
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
							Notification.success('Deleted the user Permanaently');
							var $id = {'id' : id};
				    		userService.spliceData($id,1);
				    		
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
							Notification.success('Restored successfully');
							var $id = {'id' : id};
				    		userService.spliceData($id,1);
				    		
						},function(error){
							Notification.warning({message: 'Errorr', title: 'Error Occured'});
						})
					}else{
						return false;
				}
			}
		})
		
})();