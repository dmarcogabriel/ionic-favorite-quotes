import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

//INTERFACE
import { Quote } from '../../data/quote.interface';

//PROVIDERS
import { QuotesService } from './../../services/quotes';


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteGroup: {
    category: string,
    quotes: Quote[],
    icon: string
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private quoteService: QuotesService
  ) { }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  //FAVORITE QUOTE
  //@param: selectedQuote: Quote;
  addToFavorites(selectedQuote: Quote) {
    let alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add this quote?',
      buttons: [{
        text: 'Yes, go ahead!',
        handler: () => {

          //Add to array 'favoriteQuotes'
          this.quoteService.addQuoteToFavorites(selectedQuote);

        }
      },
      {
        text: 'No, I changed my mind',
        role: 'cancel',
        handler: () => {
          console.log('Cancelled!');
        }
      }]
    });
    alert.present();
  }

  //REMOVE FROM FAVORITES
  removeFromFavorites(quote: Quote) {
    const alert = this.alertCtrl.create({
      title: "Remove Quote",
      subTitle: "Are you sure?",
      message: "Are you sure want to remove this quote?",
      buttons: [
        {
          text: 'Remove',
          handler: () => {

            //Remove from array 'favoriteQuotes'
            this.quoteService.removeQuoteFromFavorites(quote);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    alert.present();
  }

  //CHECK IF QUOTE IS FAVORITE
  isFavorite(quote: Quote) {
    return this.quoteService.isQuoteFavorited(quote);
  }

}
