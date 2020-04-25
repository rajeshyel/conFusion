import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
//import {LEADERS} from '../shared/leaders';
import { delay } from 'rxjs/operators';
import {Observable,of} from 'rxjs';
import { map,catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ProcessHTTPMsgService} from './process-httpmsg.service';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http:HttpClient,private processHTTPMsgService: ProcessHTTPMsgService) { }

  getLeaders(): Observable<Leader[]>{
    //return Promise.resolve(LEADERS);
    //return of(LEADERS).pipe(delay(2000));
    return this.http.get<Leader[]>(baseURL + 'leadership')
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  getLeader(id:string):Observable<Leader>{
    //return Promise.resolve(LEADERS.filter((leader)=>leader.id==id)[0]);
    //return of(LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(2000));
    return this.http.get<Leader>(baseURL + 'promotions/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  getFeaturedLeader():Observable<Leader>{
    //return Promise.resolve(LEADERS.filter((leader)=>leader.featured)[0]);
    //return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000));

    return this.http.get<Leader[]>(baseURL + 'leadership?featured=true').pipe(map(leader => leader[0]))
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
