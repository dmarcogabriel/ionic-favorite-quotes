import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//INTERFACE
import { Quote } from '../../data/quote.interface';

//DATA
import quotes from '../../data/quotes';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

  quoteCollection: {
    category: string,
    quotes: Quote[],
    icon: string
  }[] //Adicionei colchetes no final pois quotecollection é um array

  ngOnInit(){
    this.quoteCollection = quotes;
  }

}
