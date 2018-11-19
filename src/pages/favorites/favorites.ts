import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

//PAGES
import { QuotePage } from './../quote/quote';

//PROVIDERS
import { QuotesService } from './../../services/quotes';

//INTERFACES
import { Quote } from '../../data/quote.interface';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  //PROPRIEDADES
  quotes: Quote[];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private quoteService: QuotesService,
    private modalCtrl: ModalController
  ) { }

  //MÉTODOS
  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

  //MODAL QUOTE
  showQuote(selectedQuote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, selectedQuote);

    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.quoteService.removeQuoteFromFavorites(selectedQuote);
      }
    });
  }
}
