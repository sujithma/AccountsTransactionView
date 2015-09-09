(function(){
	'use strict';
	var loginController	=	angular.module('loginController',[])	
		.controller('loginController',function($scope,loginFact,$state){

			console.log("login Controller");
			$scope.submitForm = function() {
			    var $params = {
			      "email": $scope.email,
			      "password": $scope.password
			    };
			loginFact.submit($params)
				.then(function(e){
					console.log(e.data);
					(e.data.id == '1') ? $state.go('index.dashboard') : $state.go('index.login');
				})
				 // $auth.login(credentials).then(function(data) {
				 // 	console.log(data);
     //            //$state.go('users', {});
     //        	});
			}

		});
})();