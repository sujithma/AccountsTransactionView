(function(){
	'use strict';
	var rolesController	=	angular.module('rolesController',[])
		.controller('rolesController',function(rolesFact,$scope,$state,Notification,rolesService){
			
			rolesFact.Roles()
		    	.then(function(e){
		    		rolesService.setData(e.data);
		    		$scope.data = rolesService.getData();
		    		console.log($scope.data);
		    	})
		   
		   $scope.delete = function($id){
		   	var conf = confirm('Are You sure to Delete');
				if(conf == true) {
			   		var $id =	{'id': $id};
					rolesFact.delet($id)
				    	.then(function(e){
				    		  Notification.success('Success notification');
				    		  rolesService.spliceData($id,1);
				    	},function(){
				    		    Notification.warning({message: 'Errorr', title: 'Error Occured'});
				    	})	
					};   
				}

		})
		.controller('rolesControllerAdd',function($state,$stateParams,$scope,rolesService,rolesFact,Notification){
			 $scope.closebox	=	function(){
		    	$state.go('index.roles');
		    };
		    $scope.save	=	function(){
		    	var $role =	{'name': $scope.role_name};
		    	rolesFact.add($role)
		    		.then(function(re){
		    			$role.id = re.data.role;
		    			$role.created_at = re.data.created_at.date;
		    			rolesService.pushData($role);
		    			Notification.success('Success notification');
		    			$state.go('index.roles');
		    		},function(){
		    			Notification.warning('Success notification');
		    		})	
		    };
		})
		.controller('rolesControllerEdit',function($state,$stateParams,$scope,rolesService,rolesFact,Notification){
			$scope.id = $stateParams.id;
			$scope.role = rolesService.findData($scope.id);

			$scope.update	=	function(role){
			console.log(role);
			if( role == null ||  role == ''){
					return false;
				}else{
					var $role =	{'role_name': role,'id':$scope.id};
				rolesFact.update($role)
					.then(function(resp){
						rolesService.updateData($role);
		    			Notification.success('Success notification');
		    			$state.go('index.roles');

					},function(){

					})
				}				
			};			
		})


		.controller('rolesControllerTrash',function($scope,rolesFact,$state,rolesService,Notification){
			rolesFact.viewRoleTrash()
				.then(function(responseData){
					rolesService.setData(responseData.data)
					$scope.data	= rolesService.getData();
				})

			$scope.delete = function(id){
				var conf = confirm('Are You sure to Delete.The data will be permanently deleted');
				if(conf == true) {
					rolesFact.deleteRolePermanent(id)
						.then(function(success){
							Notification.success('Success notification');
							console.log(success);
				    		rolesService.spliceData(id,1);
				    		
						},function(error){
							Notification.warning({message: 'Errorr', title: 'Error Occured'});
						})
					}else{
						return false;
					}
			}
			$scope.restore = function(id){
				var conf = confirm(' Are You sure to Restore the Role');
				if(conf == true) {
					rolesFact.roleRestore(id)
						.then(function(success){
							Notification.success('Success notification');
				    		rolesService.spliceData(id,1);	
						},function(error){
							Notification.warning({message: 'Errorr', title: 'Error Occured'});
						})
					}else{
						return false;
				}
			}
		})	
		
})();