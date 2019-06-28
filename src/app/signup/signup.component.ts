import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validator, Validators, FormGroup, FormArray, } from "@angular/forms";
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { passwordCheck } from '../passwordcheck';  
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user:FormGroup;username:any;password:any
  constructor(private fb:FormBuilder,private http:HttpClient) { }
  pcheck:boolean;
  cpassfield;
  submitTypeName="login"
  ngOnInit() {
   
    this.user=this.fb.group({
      email:['',Validators.required],
      password:[''],
      confirmPassword:['']
    },{validator:passwordCheck})
  }
 
  
  
  onSubmit(){
  
   


      let userID = this.user.controls['email'].value;
    let password = this.user.controls['password'].value;

    console.log(userID,password)
    const data={
      'email':userID,
      'password':password
    }
    var json = JSON.stringify(data);
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        
      })
    };
   
this.http.post<any>("http://localhost:3000/users/signup",json, httpOptions).subscribe(response=>{
  console.log(response);
});
    }
 

}
