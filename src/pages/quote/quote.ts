import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

//PROVIDERS
import { QuotesService } from './../../services/quotes';

//DATA
import { Quote } from '../../data/quote.interface';


@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  person: string;
  text: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private quotesService: QuotesService,
    private ViewCtrl: ViewController,
    private alertCtrl: AlertController
  ) {
  }

  //METHODS
  ionViewDidLoad() {
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

  closeModal(remove = false) {
    const alert = this.alertCtrl.create({
      title: 'Remove this Quote?',
      message: 'Are you sure want to remove this quote?',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            this.ViewCtrl.dismiss(remove);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => console.log('Cancelled!')
        }
      ]
    });
    alert.present();
  }
}
