import { Component, ViewChild } from '@angular/core';
import { Platform, Tab, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//ROOT PAGE
import { TabsPage } from './../pages/tabs/tabs';

//PAGES
import { SettingsPage } from './../pages/settings/settings';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  tabsPage: any = TabsPage;
  settingsPage: any = SettingsPage;

  @ViewChild('main') nav: NavController;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl: MenuController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  //METHODS
  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}

