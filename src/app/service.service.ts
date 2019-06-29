import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  response:any;
  token;
  constructor() { }

  set(response,token){
this.response=response;
this.token=token;
console.log(this.token);
  }

  getRes(){
   return this.response;
      }
      getToken(){
        return this.token;
           }
}
