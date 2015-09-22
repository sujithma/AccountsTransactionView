(function(){
	'use strict';
	var loginController	=	angular.module('loginController',['authService'])	
		.controller('loginController',function($scope,loginFact,$state,authService){

			console.log("login Controller");
			$scope.submitForm = function() {
			    var $params = {
			      "email": $scope.email,
			      "password": $scope.password
			    };
			loginFact.submit($params)
				.then(function(e){
					authService.setData(e.data);
					var authStatus = authService.authenticate();
					if(authStatus == 'admin'){
						$state.go('index.dashboard');
					}else if(authStatus == 'user'){
						$state.go('index.dashboard');
					}
					else{
						 $state.go('index.login');
						}
				},function(){

					$state.go("index.login");

				});
			}
				
		})
		.controller('logoutController',function($scope,loginFact,$state){
			loginFact.logout()
				.then(function(e){
					console.log(e.data.status);
					$state.go('index.login');
				});

		});
})();