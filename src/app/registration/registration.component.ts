import {  Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  formObj: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router ) { }

  ngOnInit() {
    
    this.formObj = this.fb.group ({
		  username: '',
		  password: ''
    });
  }
  

    register = function () {
        this.formObj.userStatus = "user";
        console.log("TCL: this.formObj", this.formObj);
        this.doAJAX("create" , JSON.stringify(this.formObj.value) , "User", this.callback);
        
        
        
    }

    reset = function (){
        this.formObj = {};
    }
    

    callback = function (arr){
        console.log("Results returned : " , arr);
        alert("Successfully registered.");
        window.location.assign("login");
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

}
