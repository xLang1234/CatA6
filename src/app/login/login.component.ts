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
  formObj: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router ) { }

  ngOnInit() {
    
    this.formObj = this.fb.group ({
		  username: '',
		  password: ''
    });
  }
  
  login() {
        console.log("TCL: formObj" , this.formObj);
        this.doAJAX("read" , JSON.stringify(this.formObj.value) , "User", this.callback);
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
      localStorage.setItem("username", arr[0].username);
      if(arr[0].userStatus == "user")    
          window.location.assign("customer"); 
      else if (arr[0].userStatus == "admin"){
          //Reroute to admin page
          window.location.assign("admin"); 
          console.log("To admin");
      }
          
      else
          window.location.assign("customer"); 
  }
}

  

}
