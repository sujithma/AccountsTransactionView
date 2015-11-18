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

			loginObj.saveProfile = function($user){
				return $http.post(urls.BASE + 'profile/save',$user)
			};

			loginObj.profile = function(){
				return $http.get(urls.BASE + 'profile')
			};

			loginObj.editImage = function(file){
				
				// var payLoad = new FormData();
			 //    for (var attrname in $image) {
			 //    	payLoad.append(attrname, $image[attrname]);
			 //    }
			    // var fd = new FormData();
			    // fd.append("file", files[0]);

				return $http.post(urls.BASE + 'profile/edit/image', file)
			};


			return loginObj;
			}]);
})();	