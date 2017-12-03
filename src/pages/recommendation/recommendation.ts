import {Component, Input, ViewChild} from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

@Component({
  selector: 'app-recommendation',
  templateUrl: 'recommendation.html'
})
export class RecommendationPage {
  @Input() establishments: any;
  @ViewChild(Slides) slides: Slides;
  activeSlide: number = 2;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
