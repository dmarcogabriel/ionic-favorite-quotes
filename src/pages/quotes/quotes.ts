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
  addToFavorite(selectedQuote: Quote) {
    let alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add this quote?',
      buttons: [{
        text: 'Yes, go ahead!',
        handler: () => {

          //Adiciona ao array favoriteQuotes
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

}
