(function(){
	'use strict';
	var loginFact	=	angular.module('loginFactory',[])
		.factory('loginFact', ['$http','urls',function ($http,urls) {
			 
			 var loginObj = {};
			
			 loginObj.welcome = function () {
					$http.get(urls.BASE + 'login')
						.then(function(response) {
						   return response;
						  }, function(response) {
						    // called asynchronously if an error occurs
						    // or server returns response with an error status.
						  });
			 };
			 
			 loginObj.submit = function($params) {
		 	    return $http.post(urls.BASE +'logind',$params)
			      .then(function(response){
			    	return response;
				})
			 }
				        
			loginObj.checkLogedIn = function() {
				return $http.post(urls.BASE +'loginAuth')
			      .then(function(response){
			    	return response;
				})
			 }	    
			 loginObj.logout = function() {
				return $http.get(urls.BASE +'logout')
			      .then(function(response){
			    	return response;
				})
			 }	    
			 
			 
			 return loginObj;
			}]);
})();	