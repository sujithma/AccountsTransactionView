(function(){
	'use strict';
	var rolesFact	=	angular.module('rolesFactory',[])
		.factory('rolesFact',['$http','urls',function($http,urls){
			var rolesObj	=	{};
			rolesObj.Roles	=	function(){
					return $http.get(urls.BASE + 'role_view')
						
			};
			rolesObj.add	=	function($role){
				return $http.post(urls.BASE + 'role_add',$role)
			};
			rolesObj.delet	=	function($id){
				return $http.post(urls.BASE + 'role_delete',$id)
			};
			rolesObj.update	=	function($role){
				return $http.post(urls.BASE + 'role_edit',$role)
			};
			rolesObj.findRole	=	function($role){
				return $http.post(urls.BASE + 'role_find',$role)
			};

		return rolesObj;	
		}]);
})();