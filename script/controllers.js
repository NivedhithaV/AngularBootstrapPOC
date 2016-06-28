
app.controller("SimpleController", function($scope) {
	$scope.pageClass = 'users';
	$scope.name = '';
	$scope.lastName = '';
	$scope.city = '';
	$scope.tax = '';
	$scope.predicate = 'city';
	$scope.incomplete = true; 
	$scope.requiredField='';
/*function SimpleController($scope){*/
	$scope.nameList = [
		{name:'Nivedhitha', lastName: 'Venugopal', city:'Chennai', tax:0}, 
		{name:'Vijay', lastName: 'Dhanabalan',  city:'Tuticorin', tax:0},
		{name:'Helen', lastName: 'Ravindran',  city:'Mumbai', tax:0}, 
		{name:'Janani', lastName: 'Chandrasekaran',  city:'Tanjore', tax:0}, 
		{name:'Anirudh', lastName: 'Ramnath',  city:'Chicago', tax:0}, 
		{name:'Thanuja', lastName: 'GS',  city:'Bangalore', tax:0}
	];

	$scope.$watch('name', function() {$scope.test();});
	$scope.$watch('lastName', function() {$scope.test();});
	$scope.$watch('city',function() {$scope.test();});
	$scope.$watch('tax',function() {$scope.test();});

	$scope.getTotalValue = function(){
		var total = 0;
        angular.forEach($scope.nameList, function(n) {
            total += n.tax;
       	})
       	if(total==0){
      		total='';
      	}
	   return total;
	},
	$scope.removeUser = function(index) {
	   	$scope.nameList.splice($scope.nameList.indexOf(index), 1);
	   	$('#delete-success').modal('show');
	   	setTimeout(function() {
		     $('#delete-success').modal('hide');
		}, 1000);
	}, 
	$scope.addUser = function() {
      /*  $scope.nameList.push({
            name:'Guest', lastName: 'User', city:'N/A', tax:0
        });*/
		$('#add-user').modal('show');
    },
    $scope.test = function(){
    	$scope.incomplete = true;
    	if ($scope.name.length &&
			$scope.lastName.length &&
			$scope.city.length) {
				$scope.incomplete = false;
  		}
    },
    $scope.saveUser = function(){
    	console.log($scope.tax);
		$scope.nameList.push({
            name: $scope.name, 
            lastName: $scope.lastName,
            city: $scope.city,
            tax: $scope.tax
        });
        $('#add-user').modal('hide');
    }
});

app.controller("LoginController", function($scope, $location) {
	 $scope.pageClass = 'login';
	 $scope.validateUser = function(){
	 	$('.form-signin').bootstrapValidator({
	       	 // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
	       // container: 'tooltip',
	        feedbackIcons: {
	            valid: 'glyphicon glyphicon-ok',
	            invalid: 'glyphicon glyphicon-remove',
	            validating: 'glyphicon glyphicon-refresh'
	        },
	        fields: {
	            username: {
	                message: 'The username is not valid',
	                validators: {
	                    notEmpty: {
	                        message: 'The username is required and cannot be empty'
	                    },
	                    stringLength: {
	                        min: 6,
	                        max: 30,
	                        message: 'The username must be more than 6 and less than 30 characters long'
	                    },
	                    regexp: {
	                        regexp: /^[a-zA-Z]+$/,
	                        message: 'The username can only consist of alphabets'
	                    },
	                    different: {
	                        field: 'password',
	                        message: 'The username and password cannot be the same as each other'
	                    }
	                }
	            },
	            password: {
	                validators: {
	                    notEmpty: {
	                        message: 'The password is required and cannot be empty'
	                    },
	                    different: {
	                        field: 'username',
	                        message: 'The password cannot be the same as username'
	                    },
	                    stringLength: {
	                        min: 8,
	                        message: 'The password must have at least 8 characters'
	                    }
	                }
	            }
	        }
	    })
		.on('success.form.bv', function(e) {
			e.preventDefault();
		 	$location.path("/home");
   			$scope.$apply();
		 });
	}
});

app.controller("HomeController", function($scope) {
 	$scope.pageClass = 'home';
});