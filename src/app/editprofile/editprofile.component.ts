import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  formObj: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router ) { }

  ngOnInit() {
    
    this.formObj = this.fb.group ({
		  username: '',
		  password: ''
    });

    this.init();
  }

    editUserProfile (){
        this.doAJAX("update" , JSON.stringify(this.formObj.value ) , "User", this.callbackUpdate , this);
    }

    init (){
      this.getProfileInformation();
    }

    getProfileInformation(){
        var username = localStorage.getItem("username");
        console.log("Getting : " , username);
        this.doAJAX("read" , JSON.stringify({ username : username}) , "User", this.callback, this);
    }

    reset (){
        this.formObj = this.fb.group ({});
    }

    

    callback (arr , dis){
        console.log("Results returned : " , arr[0]);
        dis.formObj.value = (arr[0]);

        let date = new Date(dis.formObj.value.dob);
        let year = date.getFullYear();
        let month= date.getMonth()+1;
        let dt = date.getDate();


        dis.formObj.value.dob = date ;
        console.log("TCL: callback -> this.formObj", dis.formObj);
    }

    callbackUpdate = function (arr,dis){
        alert("Successfully updated.");
        // window.location.assign("customer.html");
    }

    

    serverURL() {
      return "http://localhost:3000/api?"; // here to change DB
    }
  
    doAJAXCall(partialLink, dataToSend, callback, callbackFailed ,dis ) {
  
      let url = this.serverURL() + partialLink;
  
      let data = dataToSend;
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
  doAJAX(action , data , entity , callback ,dis ){
      let sentString = "action=" + action + "&data=" + data + "&entity=" + entity;
      let url = this.serverURL() + sentString;
      $.ajax({
          url: url,
          type: 'GET',
          data: null,
          success: function (arr) {
              callback(arr , dis);
              return "Success";
          },
          error: function (arr) {
              callback(arr , dis);
              return "Failed";
          }
      });
      // $.get(url    , callback);
  }

}
