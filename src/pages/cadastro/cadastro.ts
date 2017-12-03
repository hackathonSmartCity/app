import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EscolhaDeficienciasPage } from '../escolha-deficiencias/escolha-deficiencias';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public index = 0;
  name;
  email;
  passwd;
  passwdc;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  send() {
    this.index++;

    if (this.index >= 4) {
      this.registerUser()
    }
  }

  registerUser() {
    let newUser = [];
    newUser = [
      {'name': this.name},
      {'email': this.email},
      {'passwd': this.passwd}
    ];
    this.navCtrl.push("EscolhaDeficienciasPage");
  }

}
