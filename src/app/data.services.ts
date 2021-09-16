import { Injectable } from "@angular/core";
import{InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn:'root'  
})
export class DataService implements InMemoryDbService{
    constructor(){}
    createDb(){
        return{
            employees:[
                {id:1,name:"Sudharsan",location:'Chennai',email:'sudharsan@gmail.com',mobile:9234567890},
                {id:2,name:"Suganthan",location:'Chennai',email:'suga@yahoo.com',mobile:9334567890},
                {id:3,name:"Surya Prakash",location:'Bangalore',email:'surya@gmail.com',mobile:9634567890}
            ]
        };
    }
}