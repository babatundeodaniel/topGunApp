import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/*
  Generated class for the GetUserActivities provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GetUserActivities {
  githubApiUrl = 'https://api.github.com';
  constructor(private http: Http) {}

  // Load all github users
  load(user): Observable<any>{
    return this.http.get(this.githubApiUrl+"/users/"+user+"/gists")
        .map(res => <any>res.json());
  }

  load_gists(gist_id): Observable<any>{
    return this.http.get(this.githubApiUrl+"/gists/"+gist_id)
        .map(res => <any>res.json());
  }

}

