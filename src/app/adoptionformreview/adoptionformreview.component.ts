import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-adoptionformreview',
  templateUrl: './adoptionformreview.component.html',
  styleUrls: ['./adoptionformreview.component.css']
})
export class AdoptionformreviewComponent implements OnInit {

  formObj: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router ) { }
  public catsss : Array<Object>;
  showForm = false;
  ngOnInit() {
    
    this.formObj = this.fb.group ({
    });
    this.init();
  }
    sendForm = function (){
        this.doAJAX("create" , JSON.stringify(this.formObj.value ) , "AdoptionForm", this.callback, this);
    }

    reset = function (){
        this.formObj = {};
    }
    

    callback = function (arr){
        alert("Successfully sent.");
        // window.location.assign("customer.html");
    }

    init = function(){
        this.grabCatInfo();
    }

    grabCatInfo = function(){
        this.doAJAX("read" , JSON.stringify({} ) , "AdoptionForm", this.catInfoCallback, this);
        this.doAJAX("read" , JSON.stringify({} ) , "Cat", this.realCatInfoCallback, this);
    }

    catInfoCallback = function(arr, dis){
        console.log("catsCallback : " , arr);
        dis.catName = arr;
        

    }

    realCatInfoCallback = function(arr,dis){
        console.log("catsCallback : " , arr);
        dis.realCatName = arr;
        

    }

    reviewForm = function(cat ){
      console.log("TCL: AdoptionformreviewComponent -> reviewForm -> this.formObj", cat)
        this.formObj.value = cat;
        
        this.showForm = true;
    }

    goBack = function(){
        this.showForm = false;
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
