import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'app-recommendation',
  templateUrl: 'recommendation.html'
})
export class RecommendationPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
