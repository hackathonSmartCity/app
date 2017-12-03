import {Component, Input, ViewChild} from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

@Component({
  selector: 'app-recomendado',
  templateUrl: 'recomendado.html'
})
export class Recomendado {
  @Input() recomendados: any;
  @ViewChild(Slides) slides: Slides;
  activeSlide: number = 2;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
