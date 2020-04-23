import { Component, OnInit,Inject } from '@angular/core';
import {Dish} from '../shared/dish';
import { DishService } from "../services/dish.service";
import {Promotion} from '../shared/promotion';
import { PromotionService } from "../services/promotion.service";
import {Leader} from '../shared/leader';
import {LeaderService} from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //declare two variables
  dish: Dish;
  dishErrMess:string;
  promotion: Promotion;
  leader: Leader;

  constructor(private dishService:DishService,
    private promotionService:PromotionService,
    private leaderService:LeaderService,
    @Inject('BaseURL') private BaseURL
    )
   { }

  ngOnInit() {
    /*
    this.dish=this.dishService.getFeaturedDish();
    this.promotion=this.promotionService.getFeaturedPromotion();
    this.leader=this.leaderService.getFeaturedLeader();
    */
    //updating methods to use promises
    this.dishService.getFeaturedDish().subscribe((dish)=>this.dish=dish,
    errmess=>this.dishErrMess=<any>errmess);
    this.promotionService.getFeaturedPromotion().subscribe((promotion)=>this.promotion=promotion);
    this.leaderService.getFeaturedLeader().subscribe((leader)=>this.leader=leader);
  }

}
