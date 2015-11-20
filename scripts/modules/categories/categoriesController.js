(function(){
	'use strict';
	var categoriesController	=	angular.module('categoriesController',[])

		.controller('categoriesController',function($scope,categoriesFact,$state,Notification,categoryService,authService){
		$scope.id =0;
			categoriesFact.viewCategories()
				.then(function(responseData){
					categoryService.setData(responseData.data)
					$scope.categories = responseData.data;
					$scope.id = 19;
					console.log("in loop"+$scope.id);
					$scope.parentCategories	= categoryService.parentCategory();
				})
			console.log("id"+$scope.id);
			var authStatus = authService.authenticate();
			$scope.admin = authStatus == 'admin' ? true : false;

			// $scope.subCategories = function(id) {
			// 	$scope.subCategories = categoryService.subCategories(id);
			// 	// return categoryService.subCategories(id);
			// }


			$scope.delete = function(id){
				var conf = confirm('Are You sure to Delete');
				if(conf == true) {
					categoriesFact.deleteCategory(id)
						.then(function(success){							
				    		categoryService.spliceData(id,1);
				    		$scope.parentCategories	= categoryService.parentCategory();
				    		Notification.success('Success notification');			    		
						},function(error){
							Notification.warning({message: 'Errorr', title: 'Error Occured'});
						})
					}else{
						return false;
					}
			}
			  // $scope.oneAtATime = true;

			  // $scope.groups = [
			  //   {
			  //     title: 'Dynamic Group Header - 3',
			  //     content: 'Dynamic Group Body - 1'
			  //   },
			  //   {
			  //     title: 'Dynamic Group Header - 7',
			  //     content: 'Dynamic Group Body - 2'
			  //   }
			  // ];

			  // $scope.items = ['Item 1', 'Item 2', 'Item 3'];
			  // $scope.addItem = function() {
			  //   var newItemNo = $scope.items.length + 1;
			  //   $scope.items.push('Item ' + newItemNo);
			  // };

			  // $scope.status = {
			  //   isFirstOpen: true,
			  //   isFirstDisabled: false
			  // };
		
		})
		.controller('categoriesControllerAdd',function($scope,categoriesFact,$state,categoryService,Notification){
				$scope.FomCategory = {};
				categoriesFact.viewCategories()
				.then(function(responseData){
					categoryService.setData(responseData.data)
					if(responseData.data.length != 0){
						$scope.categories	=	categoryService.parentCategory();
					}else{
						$scope.categories = false;
					}
					$scope.categories.splice(0, 0, {id:0,name:"Parent"});
					$scope.FomCategory.parent_id = $scope.categories[0].id;
					
				})
				$scope.save = function(category,selectedCategory){
				var $parent_id = (typeof(selectedCategory.parent_id) != 'undefined') ? selectedCategory.parent_id : '';
				var $data = {name: category.name,parent_id : $parent_id};
				categoriesFact.addCategories($data)
					.then(function(success){
						console.log(success.data.status)
						if(success.data.status == 409){
							$scope.exist = true;
						}else{
							categoryService.pushData(success.data);
							Notification.success('New category Added');
							$state.go('index.categories');
						}
						
					},function(error){
						Notification.warning('error notification');
					})


			}
		})
		.controller('categoriesControllerEdit',function($scope,categoriesFact,$state,categoryService,$stateParams,Notification){
			$scope.id = $stateParams.id;
			$scope.CategoryDetails	= categoryService.findData($scope.id);
			$scope.FomCategory = {};
			categoriesFact.viewCategories()
				.then(function(responseData){
					categoryService.setData(responseData.data)
					if(responseData.data.length != 0){
						$scope.categories	=	categoryService.parentCategory();
					}else{
						$scope.categories = false;
					}
					$scope.FomCategory.parent_id = $scope.CategoryDetails.parent_id;
				})	
				
					$scope.save = function(data,parentId){
						data.parent_id = parentId;
						categoriesFact.edit(data)
							.then(function(success){
								if(success.data.status == 409){
									$scope.exist = true;
								}else{
									Notification.success('Success notification');
									$state.go('index.categories');
								}
								
							},function(error){
								Notification.warning('error notification');
							});
					}
					
					// var $category_id = (typeof(transaction.category_id) != 'undefined') ? transaction.category_id : '';
					// var $data = {title: transaction.title,
					// 			description : transaction.description,
					// 			category_id : $category_id,
					// 			transaction_type : transaction.transaction_type,
					// 			date:transaction.date
					// 		};
					// //console.log(category);
					// transactionsFact.addTransaction($data)
					// .then(function(success){
					// 	console.log(success.data.status)					
					// 	transactionsService.pushData($data);
					// 	$state.go('index.transactions');
						
						
					// },function(error){

					// })
				// }
		})
.controller('categoriesControllerTrash',function($scope,categoriesFact,$state,Notification,categoryService){
			categoriesFact.viewCategoriesTrash()
				.then(function(responseData){
					console.log(responseData.data);
					categoryService.setData(responseData.data)
					$scope.data	=	categoryService.getData();
				})
				categoriesFact.viewCategories()
				.then(function(responseData){
					categoryService.setData(responseData.data)
					$scope.categories = responseData.data;
					$scope.parentCategories	= categoryService.parentCategory();
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