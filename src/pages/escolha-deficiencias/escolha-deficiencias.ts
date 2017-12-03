import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Keyboard } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-escolha-deficiencias',
  templateUrl: 'escolha-deficiencias.html',
})
export class EscolhaDeficienciasPage {

  searchText;
  temp = [];
  allOptions = [];
  choices = [];
  categories = [{ name: "Auditiva", selected: false }, { name: "Fisica", selected: false },
  { name: "Intelectual", selected: false }, { name: "Visual", selected: false },
  { name: "Mobilidade Reduzida", selected: false }];

  constructor(public navCtrl: NavController, public navParams: NavParams, public keyboard: Keyboard) {
  }

  ionViewDidLoad() {
    this.allOptions = ["Mudo", "Surdo", "Paraplegico", "Prótese", "Gestante", "Idoso", "Obeso", "Cadeirante"];
  }

  onInput(text) {
    if (!text) {
      this.temp = [];
      return;
    }
    text = text.toLowerCase();

    this.temp = this.allOptions.filter(el =>
      el.indexOf(text) != -1
    )
    if (!this.temp[0]) {
      this.temp.push("Adicionar " + text)
    }
  }

  onCancel(ev) {
    this.keyboard.close();
    this.clearSearch()
  }

  clearSearch() {
    this.searchText = "";
    this.temp = [];
  }

  addChoice(choice) {
    let newChoice: any = {};
    if (choice.indexOf("Adicionar") != -1) {
      choice.replace('Adicionar ', '');
      newChoice.isNewRegistry = true;
    }

    newChoice.name = choice
    this.choices.push(newChoice);
    this.clearSearch();
  }

  removeChoice(index) {
    this.choices.splice(index, 1);
  }

  changeCategory(index) {
    this.categories[index].selected = !this.categories[index].selected;
  }

  send() {
    // this.navCtrl.setRoot(HomePage);
    this.navCtrl.push('PreferenciasPage');
  }

}
