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
				return $id
				//return $http.post(urls.BASE + 'role_delete',$id)
			};

		return rolesObj;	
		}]);
})();