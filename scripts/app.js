(function(){
'use strict';
	var app=angular.module('AccountsTransaction',[
		'ui.router',
		'controllers',
		'factories',
		'ngMessages',
		'ngAnimate',
	    'inspinia'

		])
		.constant('urls', {
	       BASE: 'http://acctr.loc/'
   		})
		
		


})();