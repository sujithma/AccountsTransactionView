(function(){
	'use strict';
	var loginController	=	angular.module('loginController',['authService'])	
		.controller('loginController',function($scope,loginFact,$state,authService){
			$scope.error = false;
			console.log("login Controller");
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
						$state.go('index.dashboard');
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
					console.log(e.data.status);
					$state.go('login');
				});

		});
})();