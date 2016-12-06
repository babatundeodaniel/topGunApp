
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {GetUserActivities } from "../../providers/get-user-activities/get-user-activities";

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [GetUserActivities]
})
export class HomePage {
  public friends:any = [
    {name:'Stanley',pics:'img/dd.jpg',vote:0},
    {name:'Dotun',pics:'img/gg.jpg',vote:0},
    {name:'David',pics:'img/interiors2.jpg',vote:0}];

  userId:any = '';
  gists = [];
  gistings = [];
  public friends_activity:any = [
    {'user_id':0,image:'img/dd.jpg',date:"12/09/1990", 'content':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla sagittis magna. In id tellus arcu. Cras euismod tellus in elit elementum ultrices'},
    {'user_id':1,image:'img/MZTV.png', date:"12/09/1890", 'content':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla sagittis magna. In id tellus arcu. Cras euismod tellus in elit elementum ultrices'},
    {'user_id':1,image:'img/Sky_News_2007.png',date:"12/02/2007", 'content':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla sagittis magna. In id tellus arcu. Cras euismod tellus in elit elementum ultrices'},
    {'user_id':2,image:'img/MZTV.png',date:"12/09/1990",'content':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla sagittis magna. In id tellus arcu. Cras euismod tellus in elit elementum ultrices'}

  ];
  constructor(public navCtrl: NavController, public navParams:NavParams, public getUserActivities:GetUserActivities) {
    this.userId = this.navParams.get('user_id');
    this.getUserActivities.load(this.userId)
      .subscribe(gists => {
        //console.log(gists);
        this.gists = gists;
        for(let gist in this.gists){
          console.log(this.gists[gist]);
          this.getUserActivities.load_gists(this.gists[gist].id)
            .subscribe(gistings => {
              this.gistings.push(gistings);
              console.log(this.gistings);
            })
        }
      });
  }
}
