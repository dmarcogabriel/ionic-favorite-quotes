import { Component } from '@angular/core';
import { IonicPage, Toggle } from 'ionic-angular';

//PROVIDERS
import { SettingsService } from '../../services/settings';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(
    private settingsService: SettingsService
  ) { }

  //METHODS
  onToggle(toggle: Toggle) {
    this.settingsService.setBgColor(toggle.checked);
  }

  //CHECKS IF TOGGLE IS TRIGGERED OR NOT
  getCheckState() {
    return this.settingsService.getBgColor();
  }
}
