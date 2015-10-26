(function(){
	'use strict';
	var categoriesFact	=	angular.module('categoriesFactory',[])
		.factory('categoriesFact',['$http','urls',function($http,urls){
			var categoriesObj	=	{};
				categoriesObj.viewCategories	=	function(){
					return $http.get(urls.BASE + 'categories')
				};
				categoriesObj.addCategories	=	function(data){
					return $http.post(urls.BASE + 'categories/add',data)
				};
				categoriesObj.deleteCategory	=	function(id){
					return $http.post(urls.BASE + 'categories/delete',{id:id})
				};
				categoriesObj.viewCategoriesTrash	=	function(){
					return $http.get(urls.BASE + 'categories/trash')
				};
				categoriesObj.deleteCategoryPermanent	=	function(id){
					return $http.post(urls.BASE + 'categories/forceDelete',{id:id})
				};
				categoriesObj.categoryRestore	=	function(id){
					return $http.post(urls.BASE + 'categories/restore',{id:id})
				};
				
				
			return categoriesObj;	
		}]);
})();
