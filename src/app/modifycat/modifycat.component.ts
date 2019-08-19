import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-modifycat',
  templateUrl: './modifycat.component.html',
  styleUrls: ['./modifycat.component.css']
})
export class ModifycatComponent implements OnInit {

  formObj: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router ) { }
  public catsss : Array<Object>;
  showForm = false;
  ngOnInit() {
    
    this.formObj = this.fb.group ({
		  username: '',
		  password: ''
    });
    this.init();
  }

    
    
    editUserProfile = function (){
    }

    init = function (){
        this.getCatInformation();
    }

    getCatInformation = function(){
        this.doAJAX("read" , JSON.stringify({}), "Cat", this.callback, this);
    }

    reset = function (){
        this.formObj = {};
    }
    

    callback = function (arr,dis){
        console.log("TCL: callbackUpdate -> arr", arr)
        dis.catsss = arr;
    }

    reviewForm = function(cat){
        this.formObj.value = cat;
        this.showForm = true;
    }

    editCatProfile = function(){
        delete this.formObj.value["$$hashKey"];
        this.doAJAX("update" , JSON.stringify(this.formObj.value ) , "Cat", this.callbackUpdate , this);
        
    }

    callbackUpdate = function (arr , dis){

        dis.showForm = false;
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
            callback(arr , dis);
            return "Success";
        },
        error: function (arr) {
          callbackFailed(arr , dis);
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
