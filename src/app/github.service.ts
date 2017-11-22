import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class GithubService {
  private username='Reetii';
  private client_id ='a1021fbef162e342a05f';
  private client_secret = '61582acba300d0d4842d1aab746e5d128bee5d2c';

  constructor(private http: Http) {
    console.log('Github service init');
   }

   getUser(){
     return this.http.get('https://api.github.com/users/' + this.username).map(res => res.json());
   }

   getRepos(){
     return this.http.get('https://api.github.com/users/' + this.username +'/repos').map(res => res.json());
   }
   updateUsername(username:string){
     this.username = username;

   }

}
