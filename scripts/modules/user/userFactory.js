(function(){
	'use strict';
	var userFact	=	angular.module('userFactory',[])
		.factory('userFact', ['$http','urls',function ($http,urls) {
			 
			var userObj = {};
			
			userObj.viewUsers = function () {
				return $http.get(urls.BASE + 'users')
			};	 
			userObj.add	=	function($user){
				return $http.post(urls.BASE + 'users/add',$user)
			};
			userObj.edit	=	function($user){
				return $http.post(urls.BASE + 'users/edit',$user)
			};
			userObj.delete	=	function($id){
				return $http.post(urls.BASE + 'users/delete',$id)
			};
			userObj.viewUsersTrash	=	function(){
				return $http.post(urls.BASE + 'users/trash')
			};
			userObj.userRestore	=	function(id){

				return $http.post(urls.BASE + 'users/restore',{id:id})
			};
			userObj.changeStatus	=	function($id){
				return $http.post(urls.BASE + 'users/status',$id)
			};
			userObj.allUsers	=	function(){
				return $http.get(urls.BASE + 'users/allUsers')
			};
			 return userObj;
			}]);
})();	