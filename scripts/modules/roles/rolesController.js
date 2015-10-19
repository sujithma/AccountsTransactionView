(function(){
	'use strict';
	var rolesController	=	angular.module('rolesController',[])
		.controller('rolesController',function(rolesFact,$scope,$state,Notification,rolesService){
			rolesFact.Roles()
		    	.then(function(e){
		    		rolesService.setData(e.data);
		    		$scope.data = rolesService.getData();
		    	})
		    $scope.closebox	=	function(){
		    	$state.go('index.roles');
		    };
		    $scope.save	=	function(){
		    	var $role =	{'role_name': $scope.role_name};
		    	rolesFact.add($role)
		    		.then(function(re){
		    			rolesService.pushData($role);
		    			Notification.success('Success notification');
		    			$state.go('index.roles');
		    		},function(){
		    			Notification.warning('Success notification');
		    		})	
		    };
		   $scope.delete = function($id){
		   		var $id =	{'id': $id};
				rolesFact.delet($id)
			    	.then(function(e){
			    		  Notification.success('Success notification');
			    		  rolesService.spliceData($id,1);
			    	},function(){
			    		    Notification.warning({message: 'Errorr', title: 'Error Occured'});
			    	})	
			};   


		})

		.controller('rolesControllerEdit',function($state,$stateParams,$scope,rolesService,rolesFact,Notification){
			$scope.id = $stateParams.id;
			$scope.role = rolesService.findData($scope.id);
			$scope.update	=	function(){

			console.log($scope.role_name);
			if( $scope.role_name == null ||  $scope.role_name == ''){
					return false;
				}else{
					var $role =	{'role_name': $scope.role_name,'id':$scope.id};
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
		
})();