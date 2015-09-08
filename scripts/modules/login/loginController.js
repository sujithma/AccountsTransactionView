(function(){
	'use strict';
	var loginController	=	angular.module('loginController',[])	
		.controller('loginController',function($scope,loginFact){

			console.log("login Controller");
			$scope.submitForm = function() {
			    var $params = {
			      "email": $scope.email,
			      "password": $scope.password
			    };
			loginFact.submit($params)
				.then(function(e){
					console.log(e.data);
				})
			}

		});
})();