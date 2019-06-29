import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validator, Validators, FormGroup, FormArray, } from "@angular/forms";
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:FormGroup;
token:any=null;
response:any;
  constructor(private http:HttpClient,private fb:FormBuilder,private router:Router,private service:ServiceService) { }

  ngOnInit() {

    this.user=this.fb.group({
      email:['',Validators.required],
      password:['']
      
    });

  }
  
 onSubmit(){
         let userID = this.user.controls['email'].value;
        let password = this.user.controls['password'].value;

        console.log(userID,password)
        const data={
            'email':userID,
            'password':password
             }
          const httpOptions =
           {
                 headers: new HttpHeaders(
                   {
                   'Content-Type':  'application/json',
      
                   })
        };
  var json = JSON.stringify(data);
  console.log(json);
  

this.http.post<any>("http://localhost:3000/users/login",json, httpOptions).subscribe(response=>{
//console.log(response);


this.response=
  {
    user:response.user,
    token:response.Token
  }

this.service.set(this.response,this.response.token);
 this.token=this.response.token;
console.log(this.response.token);
console.log(response);
if(this.response.token !==null)
{
  this.router.navigate(['userPage']);
}
});
  }







}
