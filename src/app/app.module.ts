import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//APP
import { MyApp } from './app.component';

//PAGES
import { FavoritesPage } from './../pages/favorites/favorites';
import { LibraryPage } from './../pages/library/library';
import { SettingsPage } from './../pages/settings/settings';
import { QuotesPage } from './../pages/quotes/quotes';
import { QuotePage } from './../pages/quote/quote';

//TABS
import { TabsPage } from './../pages/tabs/tabs';

//PROVIDERS
import { SettingsService } from '../services/settings';
import { QuotesService } from './../services/quotes';


@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    QuotesPage,
    SettingsPage,
    QuotePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    QuotesPage,
    SettingsPage,
    QuotePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesService,
    SettingsService
  ]
})
export class AppModule {}
