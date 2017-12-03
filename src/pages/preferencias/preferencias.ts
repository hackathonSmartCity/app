import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the PreferenciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preferencias',
  templateUrl: 'preferencias.html',
})
export class PreferenciasPage {

  choices: any;
  public preferencias = [
    { name: "Bares", selected: false },
    { name: "Cinemas", selected: false },
    { name: "Eventos", selected: false },
    { name: "Hoteis", selected: false },
    { name: "Lojas", selected: false },
    { name: "Pontos Turísticos", selected: false },
    { name: "Restaurantes", selected: false },
    { name: "Teatro", selected: false }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  sendPreferences() {
    this.navCtrl.setRoot(HomePage)
  }

  addChoice(choice) {
    let newChoice: any = {};
    if (choice.indexOf("Adicionar") != -1) {
      choice.replace('Adicionar ', '');
      newChoice.isNewRegistry = true;
    }

    newChoice.name = choice
    this.choices.push(newChoice);
  }

  changeCategory(index) {
    this.preferencias[index].selected = !this.preferencias[index].selected;
  }


}
