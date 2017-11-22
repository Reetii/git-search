import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
  providers:[GithubService]
})
export class GithubComponent implements OnInit {
  user:any;
  repos:any;
  username:string;

  constructor(private _githubservice: GithubService) {
  console.log('Github component');

}
search(){
  this._githubservice.updateUsername(this.username);
  this._githubservice.getUser().subscribe(user => {
    this.user = user;
  });
  this._githubservice.getRepos().subscribe(repos => {
    this.repos = repos;
  });
  console.log(this.username);

}


  ngOnInit() {
  }

}
