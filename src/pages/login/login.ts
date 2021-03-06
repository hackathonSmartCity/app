import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { NavController, NavParams } from 'ionic-angular';
import {ApiService} from "../../services/apiServices";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [Facebook]
})
export class LoginPage {

  username: string;
  password: string;
  userData;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private fb: Facebook,
              private apiService: ApiService,
              private storage: Storage) {
  }

  ionViewDidLoad() {

    this.storage.get('user').then((val) => {
      if (val) {
        this.navCtrl.setRoot(HomePage);
      }
    });

  }


  fbLogin() {
    this.fb.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => {
        console.log('Logged into Facebook', res);
        // this.return = JSON.stringify(res);
        this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', [])
          .then(profile => {
            this.userData = {
                name: profile.name,
                email: profile.email,
                picture: profile.picture_large.data.url,
                facebook_auth: res.authResponse.accessToken
            };

            this.apiService.authFacebook(this.userData).then(user => {
              this.storage.set('user', this.userData);
              this.storage.set('loggedin', true);
              this.navCtrl.push('EscolhaDeficienciasPage');
            });
          })
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }

  logForm(){
    this.navCtrl.setRoot(HomePage)
  }

}
