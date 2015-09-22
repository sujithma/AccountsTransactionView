(function(){
	'use strict';
	var userFact	=	angular.module('userFactory',[])
		.factory('userFact', ['$http','urls',function ($http,urls) {
			 
			 var userObj = {};
			
			 userObj.viewUsers = function () {
					return $http.get(urls.BASE + 'users')
			 };	 
			 userObj.add	=	function($user){
				return $http.post(urls.BASE + 'user_add',$user)
			};
			userObj.delete	=	function($id){
				return $http.post(urls.BASE + 'user_delete',$id)
			};
			 return userObj;
			}]);
})();	