import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AvaliacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-avaliacao',
  templateUrl: 'avaliacao.html',
})
export class AvaliacaoPage {

  data;
  likeOutline = "assets/imgs/like-outline.svg"
  dislikeOutline = "assets/imgs/dislike-outline.svg"
  favoriteOutline = "assets/imgs/favorite-outline.svg"
  likeIcon = "assets/imgs/like.svg"
  dislikeIcon = "assets/imgs/dislike.svg"
  favoriteIcon = "assets/imgs/favorite.svg"

  like = this.likeOutline;
  dislike = this.dislikeOutline;
  favorite = this.favoriteOutline;

  liked;
  disliked;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.data = {
      name: "Museu Cidade Olímpica e Paralímpica", likes: 120, dislikes: 10,
      photo: "https://lh3.googleusercontent.com/proxy/h5ZG0HJhSoiAc20qOHgH23kqvC71aT3iqrzGkqbcyjtnL8fbToDUwXBajyF2uBnNrW2QN2BHLdQrdbba352Hv1s9BH-2fWzP5qeovPPFl5k5sGmzrz3XPJdcGquZI79Q3xrv1QVZwHqbhmKgllW5DDPhjXaorg=w408-h228-k-no",
      description: "Instalado na antiga oficina de trens do Engenho de Dentro, ao lado do Estádio Olímpico do Engenhão, o Museu Cidade Olímpica tem o esporte como tema principal. O espaço, que conta com ambientes interativos, busca difundir a história da Olimpíada e da cidade."
    }
    this.liked = false;
    this.disliked = false;
  }

  changeLike() {
    if (this.liked) {
      this.like = this.likeOutline;
      this.data.likes--;
    } else {
      this.like = this.likeIcon;
      this.data.likes++
      if (this.disliked) {
        this.dislike = this.dislikeOutline;
        this.data.dislikes--
        this.disliked = !this.disliked;
      }
    }
    this.liked = !this.liked;
  }

  changeDislike() {
    if (this.disliked) {
      this.dislike = this.dislikeOutline;
      this.data.dislikes--;
    } else {
      this.dislike = this.dislikeIcon;
      this.data.dislikes++;
      if (this.liked) {
        this.like = this.likeOutline;
        this.data.likes--
        this.liked = !this.liked;
      }
    }
    this.disliked = !this.disliked;
  }

  favoritePlace() {
    if (this.favorite == this.favoriteOutline) {
      this.favorite = this.favoriteIcon;
    } else {
      this.favorite = this.favoriteOutline;
    }
  }
}
