import {Component, OnInit} from '@angular/core';
//import {ROUTER_DIRECTIVES, Router} from '@';


declare const FB:any;

@Component({
    selector: 'facebook-login',
    templateUrl: 'facebooklogin.html',
    //directives: [ROUTER_DIRECTIVES]
})

export class FacebookLoginComponent implements OnInit {

    constructor() {
        FB.init({
            appId      : '541121856091996',
            cookie     : false,  // enable cookies to allow the server to access
                                // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.5' // use graph api version 2.5
        });
    }

    onFacebookLoginClick() {
        FB.login();
    }

    statusChangeCallback(resp) {
        if (resp.status === 'connected') {
            // connect here with your server for facebook login by passing access token given by facebook
        }else if (resp.status === 'not_authorized') {
            
        }else {
            
        }
    };
    ngOnInit() {
        FB.getLoginStatus(response => {
            this.statusChangeCallback(response);
        });
    }
}