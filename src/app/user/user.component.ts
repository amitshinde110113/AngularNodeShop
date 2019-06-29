import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ServiceService } from '../service.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loginComponent:LoginComponent;
  constructor(private service:ServiceService) { }
response ={
  user:" ",
  token:" "
};
tokenField="";
  ngOnInit() {
    
   
  this.response=this.service.getRes();
  this.tokenField=this.response.token;
  console.log(this.tokenField);
 
  }

  
}
