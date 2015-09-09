(function(){
'use strict';
	var app=angular.module('single-page-app',[
		'ui.router',
		'controllers',
		'factories',
		'ngMessages',
		'ngStorage',

		])
		.constant('urls', {
       BASE: 'http://acctr.loc/'
   		})

		

	
})();