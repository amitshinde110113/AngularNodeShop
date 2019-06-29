import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

data;
  constructor(private http:HttpClient) { }
response;
  ngOnInit() {
  }

   findProp(obj, prop, defval){
    if (typeof defval == 'undefined') defval = null;
    prop = prop.split('.');
    for (var i = 0; i < prop.length; i++) {
        if(typeof obj[prop[i]] == 'undefined')
            return defval;
        obj = obj[prop[i]];
    }
    return obj;
}
  getAllProducts(){

    this.http.get("http://localhost:3000/products").subscribe(response=>{
     console.log(response);
     
  
    var props = 'response.data';
    this.data=this.findProp(response,props,null);
    
    this.response=this.data.map((curelement,index,arr) => {
    
      return{
        name:this.data[index].name,
        img:this.data[index].img,
        price:this.data[index].price,
        url:this.data[index].url,
        id:this.data[index].id


      }
    });
    console.log(this.data);
    console.log(this.response);
     
      });
 
    
  }

}
