(function(){
	'use strict';
	var categoriesController	=	angular.module('categoriesController',[])
		.controller('categoriesController',function($scope,categoriesFact,$state,Notification,categoryService){
			categoriesFact.viewCategories()
				.then(function(responseData){
					categoryService.setData(responseData.data)
					$scope.data	=	categoryService.getData();
					//console.log($scope.data);
				})

			$scope.delete = function(id){
				var conf = confirm('Are You sure to Delete');
				if(conf == true) {
					categoriesFact.deleteCategory(id)
						.then(function(success){
							Notification.success('Success notification');
				    		categoryService.spliceData(id,1);
						},function(error){
							Notification.warning({message: 'Errorr', title: 'Error Occured'});
						})
					}else{
						return false;
					}
			}
		
		})
		.controller('categoriesControllerAdd',function($scope,categoriesFact,$state,categoryService){
				categoriesFact.viewCategories()
				.then(function(responseData){
					categoryService.setData(responseData.data)
					if(responseData.data.length != 0){
						$scope.categories	=	categoryService.getData();
					}else{
						$scope.categories = false;
					}
					
					//console.log($scope.data);
				})
				$scope.save = function(category){
				var $parent_id = (typeof(category.parent_id) != 'undefined') ? category.parent_id : '';
				var $data = {name: category.name,transaction_type:category.transaction_type,parent_id : $parent_id};
				//console.log(category);
				categoriesFact.addCategories($data)
					.then(function(success){
						console.log(success.data.status)
						if(success.data.status == 409){
							$scope.exist = true;
						}else{
							$data.id = success.data.id;
							$data.parent_id = success.data.parent_id == "" ? 0 : 1;
							categoryService.pushData($data);
							$state.go('index.categories');
						}
						
					},function(error){

					})


			}
		})
.controller('categoriesControllerTrash',function($scope,categoriesFact,$state,Notification,categoryService){
			categoriesFact.viewCategoriesTrash()
				.then(function(responseData){
					categoryService.setData(responseData.data)
					$scope.data	=	categoryService.getData();
					console.log($scope.data);
				})

			$scope.delete = function(id){
				var conf = confirm(' Are You sure to Delete.The data will be permanently deleted');
				if(conf == true) {
					categoriesFact.deleteCategoryPermanent(id)
						.then(function(success){
							Notification.success('Success notification');
				    		categoryService.spliceData(id,1);
				    		
						},function(error){
							Notification.warning({message: 'Errorr', title: 'Error Occured'});
						})
					}else{
						return false;
					}
			}
			$scope.restore = function(id){
				var conf = confirm(' Are You sure to Restore the Category');
				if(conf == true) {
					categoriesFact.categoryRestore(id)
						.then(function(success){
							Notification.success('Success notification');
				    		categoryService.spliceData(id,1);
				    		
						},function(error){
							Notification.warning({message: 'Errorr', title: 'Error Occured'});
						})
					}else{
						return false;
					}
			}
		
		})

})();
