import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import { HttpHeaders,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopicServiceService {

  url='http://localhost:8081/login';

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    };

    constructor(private http:HttpClient) { }

  public option = new BehaviorSubject('');
  optionObservable = this.option.asObservable();

  public score = new BehaviorSubject(0);
  scoreObservable = this.score.asObservable();

  public total = new BehaviorSubject(0);
  totalObservable = this.total.asObservable();

  public username = new BehaviorSubject('');
  usernameObservable = this.username.asObservable();

  public mymet(loginJson){
    console.log(loginJson);
    return this.http.post<any>(this.url, loginJson, this.httpOptions);
    }

  changeOption(option: string){
    this.option.next(option);
  }

  changescore(score: number, total: number){
    this.score.next(score);
    this.total.next(total);
  }

  changeusername(username: string){
    this.username.next(username);
    console.log("service value"+ username);
  }


}
