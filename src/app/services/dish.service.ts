import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes(): Promise<Dish[]>{
    return new Promise(resolve=>{
      // Simulate server latency with 2 second delay
      setTimeout(()=>resolve(DISHES),2000);
    });
  }

  getDish(id:string):Promise<Dish>{
    return new Promise(resolve=>{
      // Simulate server latency with 2 second delay
      setTimeout(()=>resolve(DISHES.filter((dish)=>(dish.id==id))[0]),2000);
    });
  }

  getFeaturedDish():Promise<Dish>{
    //returns the dish which has "featured" as "true"
    return new Promise(resolve=>{
      // Simulate server latency with 2 second delay
      setTimeout(()=>resolve(DISHES.filter((dish)=>dish.featured)[0]),2000);
    });
  }
}
