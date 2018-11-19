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

  //ATTRIBUTES
  quotes: Quote[];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private quoteService: QuotesService,
    private modalCtrl: ModalController
  ) { }

  //METHODS
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

        //UPDATE FAVORITE PAGE
        const position = this.quotes.findIndex((el: Quote) => {
          return el.id == selectedQuote.id;
        });
        this.quotes.splice(position, 1);
      }
    });
  }
}
