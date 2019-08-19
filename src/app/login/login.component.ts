import {  Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
	
  myForm: FormGroup;
  formObj: FormGroup;
	results: any = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router ) { }

  ngOnInit() {
	  this.myForm = this.fb.group ({
		  name: '',
		  password: ''
    });
    
    this.formObj = this.fb.group ({
		  username: '',
		  password: ''
    });
  }
  
  login() {
        console.log("TCL: formObj" , this.formObj);
        this.doAJAX("read" , JSON.stringify(this.formObj.value) , "User", this.callback);
    }
  
  onSubmit() {
	  this.authService.authUser(this.myForm.value.name, this.myForm.value.password).subscribe(data => { 
		this.results = data;
		if (this.results[0].auth) 
		{
			this.authService.setSecureToken(this.myForm.value.name);
			this.authService.setUserRole(this.results[0].role); 
			this.router.navigateByUrl('/user');
		}
	  });
  }

  serverURL() {
    return "http://localhost:3000/api?"; // here to change DB
  }

  doAJAXCall(partialLink, dataToSend, callback, callbackFailed) {

    var url = this.serverURL() + partialLink;

    var data = dataToSend;
    $.ajax({
        url: url,
        type: 'GET',
        data: data,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (arr) {
            callback(arr);
            return "Success";
        },
        error: function (arr) {
          callbackFailed(arr);
            return "Failed";
        }
    });

}



doAJAX(action , data , entity , callback ){
    var sentString = "action=" + action + "&data=" + data + "&entity=" + entity;
    var url = this.serverURL() + sentString;
    $.ajax({
        url: url,
        type: 'GET',
        data: null,
        success: function (arr) {
            callback(arr);
            return "Success";
        },
        error: function (arr) {
            callback(arr);
            return "Failed";
        }
    });
    // $.get(url    , callback);
}

callback = function (arr){
  console.log("Results returned : " , arr);
  if(arr.length != 0)
  {
      alert("Successfully login.");
      localStorage.setItem("username", this.formObj.value.username);
      if(arr[0].userStatus == "user")    
          window.location.assign("customer.html"); 
      else if (arr[0].userStatus == "admin"){
          //Reroute to admin page
          window.location.assign("admin.html"); 
          console.log("To admin");
      }
          
      else
          window.location.assign("customer.html"); 
  }
}


 
  
  // $scope.formObj = {};
  //   $scope.login = function () {
  //       console.log("TCL: formObj", $scope.formObj);
  //       doAJAX("read" , JSON.stringify($scope.formObj) , "User", callback);
  //   }
	
	

  //   $scope.reset = function (){
  //       $scope.formObj = {};
  //   }
    

  //   var callback = function (arr){
  //       console.log("Results returned : " , arr);
  //       if(arr.length != 0)
  //       {
  //           alert("Successfully login.");
  //           localStorage.setItem("username", $scope.formObj.username);
  //           if(arr[0].userStatus == "user")    
  //               window.location.assign("customer.html"); 
  //           else if (arr[0].userStatus == "admin"){
  //               //Reroute to admin page
  //               window.location.assign("admin.html"); 
  //               console.log("To admin");
  //           }
                
  //           else
  //               window.location.assign("customer.html"); 
  //       }
  //   }

  //   $scope.signUp =  function (formList) {

        
  //   }
  

}
