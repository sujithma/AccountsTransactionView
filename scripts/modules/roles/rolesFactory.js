(function(){
	'use strict';
	var rolesFact	=	angular.module('rolesFactory',[])
		.factory('rolesFact',['$http','urls',function($http,urls){
			var rolesObj	=	{};
			rolesObj.Roles	=	function(){
					return $http.get(urls.BASE + 'roles/view')
						
			};
			rolesObj.add	=	function($role){
				return $http.post(urls.BASE + 'roles/add',$role)
			};
			rolesObj.delet	=	function($id){
				return $http.post(urls.BASE + '/roles/delete',$id)
			};
			rolesObj.update	=	function($role){
				return $http.post(urls.BASE + 'roles/edit',$role)
			};
			rolesObj.findRole	=	function($role){
				return $http.post(urls.BASE + 'roles/role_find',$role)
			};
			rolesObj.viewRoleTrash	=	function(){
					return $http.get(urls.BASE + 'roles/trash')
				};
			rolesObj.deleteRolePermanent = function(id){	
				return $http.post(urls.BASE + 'roles/forceDelete',{id:id})
			};
			rolesObj.roleRestore = function(id){
				return $http.post(urls.BASE + 'roles/restore',{id:id})
			};

		return rolesObj;	
		}]);
})();