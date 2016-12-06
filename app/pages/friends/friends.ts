import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';

import { HomePage } from '../home/home';

import { GetUsers } from '../../providers/get-users/get-users';

/*
  Generated class for the FriendsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/friends/friends.html',
    providers: [GetUsers]
})
export class FriendsPage {

    homePage:any = HomePage;
  public friends:any = [
      {name:'Stanley',pics:'img/dd.jpg',vote:0},
      {name:'Dotun',pics:'img/gg.jpg',vote:0},
      {name:'David',pics:'img/interiors2.jpg',vote:0}];

    public data:any;
  constructor(public navCtrl: NavController, public navParams:NavParams, private getUsers:GetUsers) {
        //this.getFriends();
      getUsers.load().subscribe(users => {
          console.log(users);
          this.data = users;
      })

  }

    public openPage(user_id){
        console.log(user_id);
        this.navCtrl.push(this.homePage, {user_id:user_id});
        //console.log("page opened");
    }

    downVote(index){
        this.data[index].vote -= 1;
    }

    upVote(index){
        this.data[index].vote += 1;
    }

    getFriends(){
        /*
        this.http.request("http://locahhost/api/users")
        .subscribe((res:Response) => {
            this.data = res.json();
            console.log(this.data);
        });
        */
    }
}
