app.controller('sitio2Ctl', function($scope, $http) {
	$scope.firstName = "John";
	$scope.lastName = "Doe";
//	debugger;
//	argumentos.set("CLAVEXXX", "VALORDDDD");

	$http({
		url : "https://jsonplaceholder.typicode.com/posts/1",
		method : "GET"
	}).then(function(data) {
		
		$scope.cuerpo = data.data;
		
	});
	
	

	 $scope.lista = [ {
	 "clave1" : "valor1",
	 "clave2" : "valor2",
	 "clave3" : -1477285200007
	 }, {
	 "clave1" : "valor1",
	 "clave2" : "valor2",
	 "clave3" : 1477585200018
	 }, {
	 "clave1" : "valor1",
	 "clave2" : "valor2",
	 "clave3" : 1477239200039
	 } ];

	 
	 $scope.mostrarDetalle = function(objeto){
		 $scope.objeto = objeto;
		 $("#myModal").modal();
	 }
});