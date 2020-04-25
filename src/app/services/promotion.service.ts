import { Injectable } from '@angular/core';
import {Promotion} from '../shared/promotion';
import {PROMOTIONS} from '../shared/promotions';
import { resolve } from 'url';

import {Observable,of} from 'rxjs';
import {delay} from 'rxjs/operators';
import { map,catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ProcessHTTPMsgService} from './process-httpmsg.service';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {


  constructor(private http:HttpClient,private processHTTPMsgService: ProcessHTTPMsgService) { }

  getPromotions(): Observable<Promotion[]>{   
      //return of(PROMOTIONS).pipe(delay(2000));

      return this.http.get<Promotion[]>(baseURL + 'promotions')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getPromotion(id:string):Observable<Promotion>{
    //return of(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]).pipe(delay(2000));
    return this.http.get<Promotion>(baseURL + 'promotions/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedPromotion():Observable<Promotion>{
    //return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000));
    return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true').pipe(map(promotion => promotion[0]))
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
