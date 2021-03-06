import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/*
  Generated class for the GetUsers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GetUsers {
  githubApiUrl = 'https://api.github.com';
  constructor(public http: Http) {}

  // Load all github users
  load(): Observable<any>{
    return this.http.get(this.githubApiUrl+"/users")
        .map(res => <any>res.json());
  }

}

