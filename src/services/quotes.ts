import { Quote } from '../data/quote.interface';

export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  //SHOW
  getFavoriteQuotes() {
    return this.favoriteQuotes.slice();
  }

  //ADD
  addQuoteToFavorites(quote: Quote) {
    this.favoriteQuotes.push(quote);
  }

  //REMOVE
  removeQuoteFromFavorites(quote: Quote) {
    const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    this.favoriteQuotes.splice(position, 1);
  }
}
