/**
 * 
 */
var app = angular.module('myApp', ["ngRoute"]);
app.config(['$locationProvider', function($locationProvider) {
	  $locationProvider.hashPrefix('');
	}]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "sitio2.html",
        controller : "sitio2Ctl"
    })
    .when("/red", {
        templateUrl : "red.html",
        controller : "redCtl"
        	
    })
    .when("/green", {
        templateUrl : ""
    })
    .when("/blue", {
        templateUrl : ""
    });
});

//app.factory("argumentos", function(){
//	var mapa = {};
//	
//	var set = function(clave, valor){
//		mapa[clave] = valor;
//	}
//	
//	var get = function(clave){
//		return mapa[clave];
//	}
//	
//	return mapa;	
//});

app.controller('myController', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});