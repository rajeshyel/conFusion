import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map,catchError } from 'rxjs/operators';

import {ProcessHTTPMsgService} from './process-httpmsg.service';
import { baseURL } from '../shared/baseurl';
import {Feedback,ContactType} from '../shared/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient,private processHTTPMsgService: ProcessHTTPMsgService) { }

  submitFeedback(fbObj:Feedback):Observable<Feedback> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this.http.post<Feedback>(baseURL + 'feedback/', fbObj, httpOptions)
        .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
