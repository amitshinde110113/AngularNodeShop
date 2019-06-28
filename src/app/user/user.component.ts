import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loginComponent:LoginComponent;
  constructor(private service:ServiceService) { }
response :any="user";
  ngOnInit() {
    

  this.response=this.service.get();
  //this.response ={user:'user'};
   console.log(this.response)
  }

  
}
