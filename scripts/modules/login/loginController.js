(function(){
	'use strict';
	var loginController	=	angular.module('loginController',['authService'])	
		.controller('loginController',function($scope,loginFact,$state,authService){

			loginFact.checkLogedIn()
	    	.then(function(e){
	    		(e.data.status == 1) ? $state.go('index.dashboard') : $state.go('login')

	    	})

			$scope.error = false;
			$scope.submitForm = function() {
			    var $params = {
			      "email": $scope.email,
			      "password": $scope.password
			    };
			loginFact.submit($params)
				.then(function(e){

					if(e.data.status == 401){
						$scope.error = true;
						console.log($scope.error);
						$state.go("login");
					}
					
					authService.setData(e.data);
					var authStatus = authService.authenticate();
					if(authStatus == 'admin'){
						$state.go('index.dashboard');
					}else if(authStatus == 'user'){
						$state.go('index.home');
					}
					else{
						 $state.go('login');
						}
				},function(error){
					
					$state.go("login");

				});
			}
				
		})

		.controller('logoutController',function($scope,loginFact,$state){
			loginFact.logout()
				.then(function(e){
					$state.go('login');
				});
		})

		.controller('profileController',function($state,loginFact,$scope,authService,Notification){
			loginFact.profile()
				.then(function(e){
					$scope.user = e.data;
				});

			 $scope.onFileSelect = function ($files) {
			 	console.log("wedw");
                $scope.selectedFile = $files;
            };

			$scope.uploadedFile = function() {
				$scope.passStatus = false;
				$scope.editStatus = false;
				var file = $scope.selectedFile[0];
				loginFact.editImage(file)
					.then(function(success){
						console.log(success.data);
					})
				// $scope.$apply(function($scope) {
			 //   		$scope.files = element.files;         
				// });
			}
			// $scope.addFile = function() {
			// 	loginFact.editImage($scope.files)
			// 		.then(function(success){
			// 			console.log(success.data);
			// 		})
			// 		// function( msg ) // success
			// 		// {
			// 		// 	console.log('uploaded');
			// 		// },
			// 		// function( msg ) // error
			// 		// {
			// 		// console.log('error');
			// 	// });
			// }

			$scope.edit	=	function(stat){
				if (stat == 0) {
					$scope.passStatus = true;
					$scope.editStatus = false;
				}
				else{
					$scope.passStatus = false;
					$scope.editStatus = true;
				}		
			}

			$scope.save	=	function(user){
				
				loginFact.saveProfile(user)
					.then(function(success){
						console.log(success);
						if(success.data == 'mismatch')
		     			{
		     				$scope.mismatch = true;
		     			}
		     			else {
		     				Notification.success('Profile Updated');
			    //  			var authStatus = authService.authenticate();
							// if(authStatus == 'admin'){
							// 	$state.go('index.dashboard');
							// }else {
							// 	$state.go('index.home');
							// }
		     			}
					},function(){
		     			Notification.warning('error notification');
		     		})
			}
			
		});
})();