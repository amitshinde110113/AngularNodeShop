import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  response:any;
  constructor() { }

  set(response){
this.response=response;
  }

  get(){
   return this.response;
      }
}
